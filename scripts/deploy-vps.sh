#!/bin/sh
set -eu

deploy_sha=${1-}
deployment_id=${2-}
deployment_dir=${3-}

if [ -z "$deploy_sha" ] || [ -z "$deployment_id" ] || [ -z "$deployment_dir" ]; then
  printf 'Usage: deploy-vps.sh <commit-sha> <deployment-id> <deployment-dir>\n' >&2
  exit 2
fi

case "$deploy_sha" in
  *[!0-9a-f]*)
    printf 'Invalid commit SHA\n' >&2
    exit 2
    ;;
esac
if [ "${#deploy_sha}" -ne 40 ]; then
  printf 'Invalid commit SHA length\n' >&2
  exit 2
fi

case "$deployment_id" in
  *[!0-9-]*)
    printf 'Invalid deployment ID\n' >&2
    exit 2
    ;;
esac

expected_dir="/tmp/greenkube-site-deploy/$deployment_id"
if [ "$deployment_dir" != "$expected_dir" ] || [ ! -d "$deployment_dir" ] || [ -L "$deployment_dir" ]; then
  printf 'Deployment directory is outside the expected temporary location\n' >&2
  exit 2
fi

for command_name in curl docker grep openssl tar; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    printf 'Required command not found: %s\n' "$command_name" >&2
    exit 1
  fi
done

package="$deployment_dir/site-deployment.tar.gz"
if [ ! -s "$package" ]; then
  printf 'Deployment package is missing: %s\n' "$package" >&2
  exit 1
fi

if [ -e "$deployment_dir/unpacked" ]; then
  printf 'Deployment staging directory already exists\n' >&2
  exit 1
fi
mkdir -m 700 "$deployment_dir/unpacked"
tar -xzf "$package" -C "$deployment_dir/unpacked"

for asset in \
  dist/en/index.html \
  dist/fr/index.html \
  dist/favicon.ico \
  dist/greenkube-logo.png \
  deploy/nginx-greenkube-sites.conf \
  deploy/nginx-legacy-redirects.conf \
  deploy/update-nginx.awk; do
  if [ ! -s "$deployment_dir/unpacked/$asset" ]; then
    printf 'Deployment package is missing required file: %s\n' "$asset" >&2
    exit 1
  fi
done

if [ "$(docker inspect --format '{{.State.Running}}' greenkube-website)" != true ]; then
  printf 'The existing docs container is not running\n' >&2
  exit 1
fi
nginx_image=$(docker inspect --format '{{.Image}}' greenkube-website)
docker run --rm \
  --user 0 \
  --entrypoint /bin/sh \
  "$nginx_image" \
  -c '
    for command_name in awk chroot chmod cmp cp install ln mkdir mv readlink tar; do
      if ! command -v "$command_name" >/dev/null 2>&1; then
        printf "Required helper command not found: %s\n" "$command_name" >&2
        exit 1
      fi
    done
  '

docs_certificate=/etc/letsencrypt/live/docs.greenkube.cloud/fullchain.pem
if [ ! -s "$docs_certificate" ] ||
  ! openssl x509 -in "$docs_certificate" -checkend 0 -noout >/dev/null 2>&1; then
  printf 'Issuing a separate TLS certificate for docs.greenkube.cloud\n'
  docker run --rm \
    --volume /etc/letsencrypt:/etc/letsencrypt \
    --volume /var/lib/letsencrypt:/var/lib/letsencrypt \
    --volume /var/log/letsencrypt:/var/log/letsencrypt \
    --volume /var/www/html:/var/www/html \
    certbot/certbot:latest certonly \
    --webroot \
    --webroot-path /var/www/html \
    --domain docs.greenkube.cloud \
    --cert-name docs.greenkube.cloud \
    --non-interactive \
    --agree-tos
fi

if ! openssl x509 \
  -in "$docs_certificate" \
  -noout -ext subjectAltName |
  grep -F 'DNS:docs.greenkube.cloud' >/dev/null; then
  printf 'The docs TLS certificate does not cover docs.greenkube.cloud\n' >&2
  exit 1
fi

previous_release=$(
  docker run --rm \
    --user 0 \
    --entrypoint /bin/sh \
    --mount type=bind,src=/var/www,dst=/host-www \
    "$nginx_image" \
    -c '
      if [ -L /host-www/greenkube-site/current ]; then
        readlink /host-www/greenkube-site/current
      elif [ -e /host-www/greenkube-site/current ]; then
        printf "The current site path exists but is not a symlink\n" >&2
        exit 1
      fi
    '
)

restore_config() {
    docker run --rm \
      --user 0 \
      --entrypoint /bin/sh \
      --mount type=bind,src=/etc/nginx,dst=/host-nginx \
      "$nginx_image" \
      -c '
        set -eu
        deployment_id=$1
        backup="/host-nginx/.greenkube-site-backups/greenkube.cloud.$deployment_id"
        if [ -f "$backup" ]; then
          cp -p "$backup" /host-nginx/sites-available/greenkube.cloud
        fi
      ' sh "$deployment_id"
}

restore_release() {
    docker run --rm \
      --user 0 \
      --entrypoint /bin/sh \
      --mount type=bind,src=/var/www,dst=/host-www \
      "$nginx_image" \
      -c '
        set -eu
        deployment_id=$1
        previous_release=$2
        current=/host-www/greenkube-site/current
        next="$current.rollback.$deployment_id"

        if [ -n "$previous_release" ]; then
          rm -f "$next"
          ln -s "$previous_release" "$next"
          mv -Tf "$next" "$current"
        else
          rm -f "$current"
        fi
      ' sh "$deployment_id" "$previous_release"
}

run_nginx_test() {
    docker run --rm \
      --pid=host \
      --mount type=bind,src=/,dst=/host,readonly \
      --mount type=bind,src=/run,dst=/host/run \
      --mount type=bind,src=/var/log/nginx,dst=/host/var/log/nginx \
      --entrypoint /bin/sh \
      "$nginx_image" \
      -c 'chroot /host /usr/sbin/nginx -t'
}

run_nginx_reload() {
    docker run --rm \
      --pid=host \
      --privileged \
      --userns=host \
      --mount type=bind,src=/,dst=/host,readonly \
      --mount type=bind,src=/run,dst=/host/run \
      --mount type=bind,src=/var/log/nginx,dst=/host/var/log/nginx \
      --entrypoint /bin/sh \
      "$nginx_image" \
      -c 'chroot /host /usr/sbin/nginx -s reload'
}

rollback_and_reload() {
    printf 'Rolling back the site and Nginx configuration\n' >&2
    restore_release
    restore_config
    run_nginx_test
    run_nginx_reload
}

if ! docker run --rm \
    --user 0 \
    --entrypoint /bin/sh \
  --mount type=bind,src=/etc/nginx,dst=/host-nginx \
  --mount type=bind,src=/var/www,dst=/host-www \
  --mount "type=bind,src=$deployment_dir/unpacked,dst=/deployment,readonly" \
  "$nginx_image" \
  -c '
    set -eu
    deployment_id=$1
    release="/host-www/greenkube-site/releases/$deployment_id"
    config="/host-nginx/sites-available/greenkube.cloud"
    backup="/host-nginx/.greenkube-site-backups/greenkube.cloud.$deployment_id"
    snippet="/host-nginx/snippets/greenkube-legacy-redirects.conf"
    current=/host-www/greenkube-site/current
    next="$current.new.$deployment_id"

    if [ -e "$release" ]; then
      printf "Release already exists: %s\n" "$deployment_id" >&2
      exit 1
    fi

    if [ ! -f "$config" ]; then
      printf "Expected Nginx file not found: %s\n" "$config" >&2
      exit 1
    fi

    if [ -e "$snippet" ] &&
      ! cmp -s /deployment/deploy/nginx-legacy-redirects.conf "$snippet"; then
      printf "A different legacy redirect snippet already exists\n" >&2
      exit 1
    fi

    mkdir -p "$release" /host-nginx/.greenkube-site-backups /host-nginx/snippets
    cp -a /deployment/dist/. "$release/"
    chmod -R a+rX "$release"
    test -f "$release/en/index.html"
    test -f "$release/fr/index.html"
    test -f "$release/favicon.ico"
    test -f "$release/greenkube-logo.png"

    ln -s "/var/www/greenkube-site/releases/$deployment_id" "$next"
    mv -Tf "$next" "$current"

    cp -p "$config" "$backup"

    if [ ! -e "$snippet" ]; then
      install -m 644 /deployment/deploy/nginx-legacy-redirects.conf "$snippet"
    fi

    candidate="$config.new.$deployment_id"
    awk \
      -v replacement=/deployment/deploy/nginx-greenkube-sites.conf \
      -f /deployment/deploy/update-nginx.awk \
      "$config" > "$candidate"
    mv -f "$candidate" "$config"
    printf "Staged static release and Nginx configuration\n"
  ' sh "$deployment_id"; then
  restore_release
  restore_config
  printf 'Could not stage the site release and Nginx configuration\n' >&2
  exit 1
fi

if ! run_nginx_test; then
  restore_release
  restore_config
  printf 'Nginx rejected the staged configuration; the prior release and config were restored\n' >&2
  exit 1
fi

if ! run_nginx_reload; then
  rollback_and_reload
  printf 'Nginx reload failed; the previous release was restored\n' >&2
  exit 1
fi

check_local_routes() {
  root_redirect=$(
    curl --silent --show-error --output /dev/null --write-out '%{http_code} %{redirect_url}' \
      --resolve greenkube.cloud:443:127.0.0.1 \
      'https://greenkube.cloud/?deployment-check=1'
  )
  [ "$root_redirect" = '308 https://greenkube.cloud/en/?deployment-check=1' ] || return 1

  www_redirect=$(
    curl --silent --show-error --output /dev/null --write-out '%{http_code} %{redirect_url}' \
      --resolve www.greenkube.cloud:443:127.0.0.1 \
      'https://www.greenkube.cloud/en/?deployment-check=1'
  )
  [ "$www_redirect" = '308 https://greenkube.cloud/en/?deployment-check=1' ] || return 1

  curl --fail --silent --show-error --max-time 20 \
    --resolve greenkube.cloud:443:127.0.0.1 \
    https://greenkube.cloud/en/ -o /dev/null
  curl --fail --silent --show-error --max-time 20 \
    --resolve greenkube.cloud:443:127.0.0.1 \
    https://greenkube.cloud/fr/ -o /dev/null
  curl --fail --silent --show-error --max-time 20 \
    --resolve greenkube.cloud:443:127.0.0.1 \
    https://greenkube.cloud/greenkube-logo.png -o /dev/null
  curl --fail --silent --show-error --max-time 20 \
    --resolve greenkube.cloud:443:127.0.0.1 \
    https://greenkube.cloud/favicon.ico -o /dev/null
  curl --fail --silent --show-error --max-time 20 \
    --resolve docs.greenkube.cloud:443:127.0.0.1 \
    https://docs.greenkube.cloud/ -o /dev/null
}

if ! check_local_routes; then
  rollback_and_reload
  printf 'The post-deploy route checks failed; the previous release was restored\n' >&2
  exit 1
fi

printf 'Deployed %s; apex, www redirect, docs TLS, logo, and favicon checks passed\n' "$deploy_sha"
rm -r "$deployment_dir"
