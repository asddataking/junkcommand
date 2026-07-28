import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020305",
          color: "#18a0ff",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.5,
          border: "1px solid #0787ff",
        }}
      >
        JC
      </div>
    ),
    { ...size },
  );
}
