import { ImageResponse } from "next/og";

export const alt = "Paiva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f4ee",
          color: "#171512",
          padding: "72px 80px",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.18em" }}>PAIVA.LAT</div>
        <div
          style={{
            fontSize: 160,
            lineHeight: 0.85,
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Paiva
        </div>
        <div style={{ fontSize: 32 }}>Frontend</div>
      </div>
    ),
    { ...size },
  );
}
