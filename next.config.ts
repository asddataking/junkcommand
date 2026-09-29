import type { NextConfig } from "next";
import path from "path";
import { PERMANENT_REDIRECTS } from "./src/data/indexing";

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
    return PERMANENT_REDIRECTS.map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: true,
    }));
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
