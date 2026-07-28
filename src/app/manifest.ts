import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: "Junk Command",
    description:
      "Veteran-owned junk removal in Port Huron and St. Clair County. Same-day options, upfront pricing.",
    start_url: "/",
    display: "standalone",
    background_color: "#020305",
    theme_color: "#0787ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/images/junk-command-hero.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
