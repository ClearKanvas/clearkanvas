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
        {/* Brand mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="11" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M16 5 A11 11 0 0 1 27 16" stroke="#FF6A2B" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>ClearKanvas Global</div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "0 20px",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            <span>Where complexity becomes</span>
            <span style={{ color: "#FF6A2B" }}>clarity</span>
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
            Your partner for finance, talent, technology, and operations.
          </div>
        </div>

        {/* Footer row */}
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
