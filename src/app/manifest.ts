import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} · ${profile.role}`,
    short_name: profile.name,
    description: profile.headline,
    start_url: "/",
    display: "browser",
    background_color: "#0d0d0c",
    theme_color: "#0d0d0c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
