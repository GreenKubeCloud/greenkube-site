#!/bin/sh
set -eu

render() {
  awk -v replacement=deploy/nginx-greenkube-sites.conf \
    -f deploy/update-nginx.awk
}

rendered=$(
  render <<'NGINX'
server {
    listen 443 ssl http2;
    server_name greenkube.cloud www.greenkube.cloud;

    location / {
        proxy_pass http://127.0.0.1:3002;
    }
}

server {
    listen 443 ssl http2;
    server_name demo.greenkube.cloud;
}

server {
    listen 443 ssl http2;
    server_name *.greenkube.cloud;
}
NGINX
)

assert_one_server() {
  rendered_config=$1
  hostname=$2
  count=$(
    printf '%s\n' "$rendered_config" |
      awk -v hostname="$hostname" \
        '$1 == "server_name" && $2 == (hostname ";") { count++ } END { print count + 0 }'
  )
  if [ "$count" -ne 1 ]; then
    printf 'Expected one Nginx server for %s; found %s\n' "$hostname" "$count" >&2
    exit 1
  fi
}

for hostname in greenkube.cloud www.greenkube.cloud docs.greenkube.cloud demo.greenkube.cloud; do
  assert_one_server "$rendered" "$hostname"
done

wildcard_count=$(
  printf '%s\n' "$rendered" |
    awk '$1 == "server_name" && $2 == "*.greenkube.cloud;" { count++ } END { print count + 0 }'
)
if [ "$wildcard_count" -ne 1 ]; then
  printf 'Expected the existing wildcard server to remain unchanged\n' >&2
  exit 1
fi

rendered_again=$(printf '%s\n' "$rendered" | render)
if [ "$rendered_again" != "$rendered" ]; then
  printf 'Nginx deployment update is not idempotent\n' >&2
  exit 1
fi

split_rendered=$(
  render <<'NGINX'
server {
    server_name greenkube.cloud;
}

server {
    server_name www.greenkube.cloud;
}

server {
    server_name docs.greenkube.cloud;
}

server {
    server_name demo.greenkube.cloud;
}

server {
    server_name *.greenkube.cloud;
}
NGINX
)
for hostname in greenkube.cloud www.greenkube.cloud docs.greenkube.cloud demo.greenkube.cloud; do
  assert_one_server "$split_rendered" "$hostname"
done

wildcard_count=$(
  printf '%s\n' "$split_rendered" |
    awk '$1 == "server_name" && $2 == "*.greenkube.cloud;" { count++ } END { print count + 0 }'
)
if [ "$wildcard_count" -ne 1 ]; then
  printf 'Expected the wildcard server to remain unchanged for split host blocks\n' >&2
  exit 1
fi

if printf '%s\n' 'server {' '    server_name demo.greenkube.cloud;' '}' | render >/dev/null 2>&1; then
  printf 'Expected the updater to reject an Nginx file without apex/www hosts\n' >&2
  exit 1
fi

grep -Fq \
  'include /etc/nginx/snippets/greenkube-legacy-redirects.conf;' \
  deploy/nginx-greenkube-sites.conf
grep -Fq \
  'snippet="/host-nginx/snippets/greenkube-legacy-redirects.conf"' \
  scripts/deploy-vps.sh

nginx_reload=$(
  awk '
    /^run_nginx_reload\(\) \{/ { in_reload = 1 }
    in_reload { print }
    in_reload && /^}/ { exit }
  ' scripts/deploy-vps.sh
)
for option in '--pid=host' '--privileged' '--userns=host'; do
  if ! printf '%s\n' "$nginx_reload" | grep -Fq -- "$option"; then
    printf 'Nginx reload helper is missing required Docker option: %s\n' "$option" >&2
    exit 1
  fi
done

sh -n scripts/deploy-vps.sh
