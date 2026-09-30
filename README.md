# GreenKube main website

Static Astro source for the marketing and project-entry website at `greenkube.cloud`. Technical documentation and the interactive demo remain separate at `docs.greenkube.cloud` and `demo.greenkube.cloud`.

## Requirements

- Node.js supported by the selected Astro release
- pnpm

## Commands

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm lint
pnpm format:check
pnpm build
pnpm validate:site
pnpm preview
```

The build writes a standalone static site to `dist/`. Pushes to `main` run Site CI and then deploy the validated build to the VPS. The deployment serves the marketing site at `greenkube.cloud`, redirects `www.greenkube.cloud` to the apex, and routes `docs.greenkube.cloud` to the existing docs container on port 3002.

Configure the `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`, and `SSH_PORT` organization secrets for this repository. The deployment account needs Docker daemon access; Docker access is effectively root-level, so protect `main` and limit those secrets to this repository. The workflow uses short-lived helpers for Nginx validation/reload and static-file installation. It preserves a backup of the matching Nginx configuration and prior static releases, and rolls back the release/configuration if local route checks fail. A separate certificate is requested for `docs.greenkube.cloud` without replacing the existing apex certificate.

`deploy/nginx-greenkube-sites.conf` contains the apex, `www`, and docs virtual hosts. `deploy/update-nginx.awk` replaces only the existing apex/`www` block, leaving the demo and wildcard virtual hosts untouched. The legacy documentation paths are inventoried in `docs/legacy-route-inventory.md` and preserved using `deploy/nginx-legacy-redirects.conf`.

The `/en/` route is the canonical English homepage. All marketing routes have matching `/fr/` routes. Product copy is in `src/content/`, and `docs/site-claim-register.md` records the approved release claims.
