#!/bin/sh
set -eu

rendered=$(
  awk -v replacement=deploy/nginx-greenkube-sites.conf \
    -f deploy/update-nginx.awk <<'NGINX'
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
  hostname=$1
  count=$(
    printf '%s\n' "$rendered" |
      awk -v hostname="$hostname" \
        '$1 == "server_name" && $2 == (hostname ";") { count++ } END { print count + 0 }'
  )
  if [ "$count" -ne 1 ]; then
    printf 'Expected one Nginx server for %s; found %s\n' "$hostname" "$count" >&2
    exit 1
  fi
}

for hostname in greenkube.cloud www.greenkube.cloud docs.greenkube.cloud demo.greenkube.cloud; do
  assert_one_server "$hostname"
done

wildcard_count=$(
  printf '%s\n' "$rendered" |
    awk '$1 == "server_name" && $2 == "*.greenkube.cloud;" { count++ } END { print count + 0 }'
)
if [ "$wildcard_count" -ne 1 ]; then
  printf 'Expected the existing wildcard server to remain unchanged\n' >&2
  exit 1
fi

grep -Fq \
  'include /etc/nginx/snippets/greenkube-legacy-redirects.conf;' \
  deploy/nginx-greenkube-sites.conf
grep -Fq \
  'snippet="/host-nginx/snippets/greenkube-legacy-redirects.conf"' \
  scripts/deploy-vps.sh

sh -n scripts/deploy-vps.sh
