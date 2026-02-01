import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "NutraCore Labs — Suplementos premium, probióticos y nutracéuticos elaborados en EE.UU.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#133241",
          padding: "60px 80px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#4ADE80",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "18px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Suplementos Premium · Perú
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
          }}
        >
          NutraCore Labs
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.4,
            maxWidth: "800px",
            marginBottom: "48px",
          }}
        >
          Probióticos y nutracéuticos elaborados en EE.UU. para salud
          intestinal y bienestar femenino.
        </div>

        {/* Product lines */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["NutraHer", "NutraZen", "FDA Approved", "DIGEMID"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
