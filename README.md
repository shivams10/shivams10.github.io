# Shivam Shukla — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4, exported as a fully static site.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out
```

## Edit content

All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile, stats, experience (with website and app screenshots), projects, skills, education and links. Components read from it, so most updates never touch a component.

- **Résumé:** replace `public/Shivam_Shukla_Resume.pdf`.
- **Screenshots:** live in `public/images/projects/` and `public/images/work/` as AVIF + WebP at several widths.
- **Site URL:** defaults to `https://shivams10.github.io`; override with `NEXT_PUBLIC_SITE_URL` at build time (e.g. for a custom domain). It drives the canonical URL, Open Graph tags, `sitemap.xml` and `robots.txt`.

## Structure

```
src/app/            layout (fonts, SEO, JSON-LD), page, og.png + apple-touch-icon.png routes, sitemap, robots, manifest
src/components/     Nav, Hero, Portrait, Experience, Projects, ProjectShot (lightbox), Skills, Contact, PointerGlow
src/data/           portfolio.ts (all content)
.github/workflows/  deploy.yml (GitHub Pages)
```

## Notes

- Scroll reveals are pure CSS (`animation-timeline`). The only client components are the theme toggle and the screenshot lightbox (`ProjectShot`, built on `<dialog>` + View Transitions).
- Light/dark follows the OS by default; the toggle stores an override in `localStorage`.
- Animations are disabled under `prefers-reduced-motion`.
- The social preview (`/og.png`) and home-screen icon (`/apple-touch-icon.png`) are generated at build time from `src/data/portfolio.ts` by route handlers in `src/app/og.png/` and `src/app/apple-touch-icon.png/`. They are real `.png` files so every host serves them as `image/png`.
- CSS is inlined into the HTML (`experimental.inlineCss`) to remove the render-blocking stylesheet request.
- `public/_headers` sets long-lived caching and security headers on Netlify and Cloudflare Pages (GitHub Pages ignores it).

## Deploy

Live at **https://shivams10.github.io**, deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main` (lint → build → publish `./out`).

One-time setup: the repo must be named `shivams10.github.io`, and **Settings → Pages → Source** must be set to **GitHub Actions**.

Any other static host works too: build command `npm run build`, output directory `out`, plus `NEXT_PUBLIC_SITE_URL` set to that host's URL.
