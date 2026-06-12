import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = "Pedro Reis - Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080b12",
          color: "#f5f7fb",
          padding: 72,
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 28, color: "#35e0c2" }}>Pedro Reis</div>
        <div>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1 }}>Senior Software Engineer</div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#aeb7c7" }}>{siteConfig.title}</div>
        </div>
        <div style={{ fontSize: 24, color: "#f5b84d" }}>React · Next.js · TypeScript · Performance · Accessibility</div>
      </div>
    ),
    size
  );
}
