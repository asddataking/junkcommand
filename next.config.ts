import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: `</llms.txt>; rel="describedby", </llms-full.txt>; rel="alternate"; type="text/markdown"`,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/service-areas/kimball",
        destination: "/service-areas/kimball-township",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
