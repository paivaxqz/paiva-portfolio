import { ImageResponse } from "next/og";

export const alt = "Paiva — Frontend";
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
          background: "#f3eee4",
          color: "#1c1915",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b6458",
          }}
        >
          <span>paiva.lat</span>
          <span>Brasil</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              fontStyle: "italic",
            }}
          >
            Paiva
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              color: "#c45c26",
              fontStyle: "italic",
            }}
          >
            Frontend com opinião.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 8,
            width: "100%",
            background: "#c45c26",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
