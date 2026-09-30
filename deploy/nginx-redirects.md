# Operator proposal only: add each snippet to its matching HTTPS virtual host.

# TLS termination and static-file configuration remain operator-managed.

For the `www.greenkube.cloud` virtual host, preserve the path and query string
while redirecting permanently to the canonical apex:

```nginx
return 308 https://greenkube.cloud$request_uri;
```

For the `greenkube.cloud` virtual host, redirect only the root entry route to
English and preserve the query string:

```nginx
location = / {
    return 308 /en/$is_args$args;
}
```

Serve the rest of the static `dist/` files from the apex host. Do not apply the
`www` return directive to the apex virtual host. This proposal has not been
applied to production.
