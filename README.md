# Shivam Shukla — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4, exported as a fully static site.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out
```

## Edit content

All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile, stats, Lighthouse gauges, experience, projects, skills, education and links. Components read from it, so most updates never touch a component.

- **Résumé:** replace `public/Shivam_Shukla_Resume.pdf`.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` (e.g. `https://shivamshukla.dev`) at build time. It drives the canonical URL, Open Graph tags, `sitemap.xml` and `robots.txt`.

## Structure

```
src/app/            layout (fonts, SEO, JSON-LD), page, OG image, sitemap, robots, icon
src/components/     Nav, Hero, LighthouseCard, Experience, Projects, Skills, Contact
src/data/           portfolio.ts (all content)
```

## Notes

- Scroll reveals are pure CSS (`animation-timeline`). The only client components are the theme toggle and the screenshot lightbox (`ProjectShot`, built on `<dialog>` + View Transitions).
- Light/dark follows the OS by default; the toggle stores an override in `localStorage`.
- Animations are disabled under `prefers-reduced-motion`.
- The social preview (`/og.png`) and home-screen icon (`/apple-touch-icon.png`) are generated at build time from `src/data/portfolio.ts` by route handlers in `src/app/og.png/` and `src/app/apple-touch-icon.png/`. They are real `.png` files so every host serves them as `image/png`.
- CSS is inlined into the HTML (`experimental.inlineCss`) to remove the render-blocking stylesheet request.
- `public/_headers` sets long-lived caching and security headers on Netlify and Cloudflare Pages.

## Deploy

Any static host works. On Vercel, import the repo and add the `NEXT_PUBLIC_SITE_URL` env var. On Netlify or Cloudflare Pages, use build command `npm run build` and output directory `out`.
