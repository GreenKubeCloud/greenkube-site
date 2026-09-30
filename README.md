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

The build writes a standalone static site to `dist/`. The `/` entry route has a static fallback; configure the hosting layer to issue the required HTTP 308 to `/en/`. `deploy/nginx-redirects.md` and `deploy/nginx-legacy-redirects.conf` document operator-managed redirects. The old documentation paths are inventoried in `docs/legacy-route-inventory.md`; none of these proposals has been applied to production.

The `/en/` route is the canonical English homepage. All marketing routes have matching `/fr/` routes. Product copy is in `src/content/`, and `docs/site-claim-register.md` records the approved release claims.
