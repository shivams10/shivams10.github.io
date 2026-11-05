import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const dynamic = "force-static";
const size = { width: 180, height: 180 };

/** Home-screen icon, written to out/apple-touch-icon.png at build time. */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#151513", color: "#3ddc84", fontSize: 78, fontWeight: 700, letterSpacing: -3, fontFamily: "sans-serif" }}>
        {profile.initials}
      </div>
    ),
    size,
  );
}
