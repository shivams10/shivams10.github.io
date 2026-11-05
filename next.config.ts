import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out,
  // deployable to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any CDN.
  output: "export",
  experimental: {
    // Tailwind CSS is small; inlining it removes the render-blocking stylesheet request.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
