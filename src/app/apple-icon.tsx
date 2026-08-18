import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ee",
          color: "#171512",
          fontSize: 118,
          fontStyle: "italic",
          fontWeight: 300,
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
