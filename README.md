# joeydepew.com

Personal portfolio for **Joseph Depew**.

## Stack

- Next.js (static export)
- Once UI
- Magic Portfolio foundation
- MDX
- TypeScript
- Cloudflare Pages

## Local development

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: `22`

Note: this site deploys to **Cloudflare Pages**, not GitHub Pages.

## Static export constraints (do not break)

- `output: "export"` in `next.config.mjs`
- `images.unoptimized = true`
- No active `src/app/api` routes
- No dynamic `robots` route
- No dynamic `sitemap` route
- `npm run build` must create `/out`

## Attribution / licensing

This project is based on **Magic Portfolio** and uses **Once UI**.

Template usage requires keeping the Once UI attribution link in the site footer unless you have a Pro license.
