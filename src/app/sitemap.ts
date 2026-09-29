import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { KEPT_PAGES } from "@/data/indexing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return KEPT_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.group === "services" || page.group === "areas" ? 0.85 : 0.7,
  }));
}
