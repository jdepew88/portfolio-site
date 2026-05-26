# joeydepew.com

Personal portfolio for **Joseph Depew** — a TypeScript site I vibe-coded as a first draft, then shaped into something deployable.

## How this repo came together

This project started from **[Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)** by the Once UI team: a Next.js + [Once UI](https://once-ui.com) starter built for portfolios. I forked that foundation, kept the parts that fit, and layered in my own content, routes, and styling.

Thank you to the **Magic Portfolio / Once UI** folks for the template, components, and design system — this site wouldn’t have come together nearly as fast without that starting point.

## Built for Cloudflare Pages

This is a **static export** site meant to deploy on **Cloudflare Pages**, not GitHub Pages.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | `22` |

The build runs `next build` plus a small postbuild step (`scripts/postbuild-static.mjs`) so `/bio` works on static hosting.

## Design highlights

- **Virtual terminal (`/bio`)** — Interactive whois-style page with command help, colored neofetch-style system info, cowsay, and a matrix-style animation. Feels like a real shell without leaving the site.
- **About hero** — Full-width painterly banner with rounded corners, sticky portrait column, and essential social links.
- **Projects** — Custom header art, MDX case study for QDROdl, and external project cards for GitHub repos.
- **Homelab & education** — Dedicated pages for infrastructure narrative and credentials, with diagram and seal imagery where it helps.

## Stack

- Next.js (static export)
- Once UI (via Magic Portfolio)
- MDX
- TypeScript
- Sass

## Local development

```bash
npm install
npm run dev
```

Production build and local preview of the static `out/` folder:

```bash
npm run build
npm run preview   # serves out/ on http://localhost:4173
```

## Static export constraints (do not break)

- `output: "export"` in `next.config.mjs`
- `images.unoptimized = true`
- No active `src/app/api` routes
- No dynamic `robots` / `sitemap` routes
- `npm run build` must create `/out`

## Attribution / licensing

This project is based on **Magic Portfolio** and uses **Once UI**.

Template usage requires keeping the Once UI attribution link in the site footer unless you have a Pro license. See the [Magic Portfolio repo](https://github.com/once-ui-system/magic-portfolio) for upstream license terms.
