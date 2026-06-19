import { ImageResponse } from "next/og";

export const alt = "ClearKanvas Global: Where complexity becomes clarity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0F1E3D 0%, #0A1124 60%, #060B16 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* CK brand mark (matches the favicon) */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 22,
              background: "#FF6A2B",
              color: "#fff",
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            CK
          </div>
        </div>

        {/* Company name (large) + tagline (smaller) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            ClearKanvas Global
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              fontSize: 40,
              fontWeight: 600,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            <span>Where complexity becomes</span>
            <span style={{ color: "#FF6A2B", marginLeft: 14 }}>clarity.</span>
          </div>
        </div>

        {/* Footer services row */}
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          <span>Global Capability Centers</span>
          <span style={{ color: "#FF6A2B" }}>·</span>
          <span>Finance &amp; Accounting</span>
          <span style={{ color: "#FF6A2B" }}>·</span>
          <span>HR &amp; Talent</span>
          <span style={{ color: "#FF6A2B" }}>·</span>
          <span>Customer Experience</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
