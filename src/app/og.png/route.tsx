import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

/** Social preview image, written to out/og.png at build time. */
export async function GET() {
  const photo = await readFile(path.join(process.cwd(), "public/images/shivam-720.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0d0d0c", color: "#edece6", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#9c9a91" }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3ddc84" }} />
            {profile.currentRole}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
            <div style={{ fontSize: 40, color: "#9c9a91", marginTop: 18 }}>{profile.role}</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {profile.stack.map((s) => (
              <div key={s} style={{ display: "flex", border: "2px solid #2b2a26", borderRadius: 999, padding: "10px 22px", fontSize: 24, color: "#edece6" }}>
                {s}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, padding: "48px 56px 48px 24px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by Satori, never shipped to the browser */}
          <img src={photoSrc} width={400} height={534} alt="" style={{ width: 400, height: 534, objectFit: "cover", borderRadius: 28 }} />
        </div>
      </div>
    ),
    size,
  );
}
