import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import { BLOG_POSTS } from "@/data/blog";
import { GALLERY_ITEMS } from "@/data/gallery";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 86400;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type ImageEntry = {
  pageUrl: string;
  imageUrl: string;
  title: string;
  caption?: string;
};

function absoluteImage(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function GET() {
  const entries: ImageEntry[] = [
    {
      pageUrl: SITE_URL,
      imageUrl: absoluteImage("/images/junk-command-hero.webp"),
      title: "Junk Command junk removal crew in Port Huron",
      caption: "Veteran-owned junk removal serving St. Clair County",
    },
    {
      pageUrl: `${SITE_URL}/meet-the-crew`,
      imageUrl: absoluteImage("/images/dan-gage-luna.webp"),
      title: "Dan Gage and Luna — Junk Command",
    },
    {
      pageUrl: `${SITE_URL}/meet-the-crew`,
      imageUrl: absoluteImage("/images/luna-mascot.webp"),
      title: "Luna — Junk Command K-9 Cleanup Unit",
    },
    {
      pageUrl: `${SITE_URL}/about`,
      imageUrl: absoluteImage("/images/trailer.webp"),
      title: "Junk Command trailer",
    },
  ];

  for (const service of SERVICES) {
    entries.push({
      pageUrl: `${SITE_URL}/${service.slug}`,
      imageUrl: absoluteImage(service.image),
      title: service.title,
      caption: service.imageAlt,
    });
  }

  for (const city of CITIES) {
    entries.push({
      pageUrl: `${SITE_URL}/service-areas/${city.slug}`,
      imageUrl: absoluteImage(city.image),
      title: `Junk removal in ${city.name}`,
      caption: city.imageAlt,
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      pageUrl: `${SITE_URL}/blog/${post.slug}`,
      imageUrl: absoluteImage(post.image),
      title: post.title,
      caption: post.imageAlt,
    });
  }

  for (const item of GALLERY_ITEMS) {
    entries.push({
      pageUrl: `${SITE_URL}/gallery`,
      imageUrl: absoluteImage(item.beforeImage),
      title: `${item.title} — before`,
      caption: item.beforeAlt,
    });
    entries.push({
      pageUrl: `${SITE_URL}/gallery`,
      imageUrl: absoluteImage(item.afterImage),
      title: `${item.title} — after`,
      caption: item.afterAlt,
    });
  }

  const urls = entries
    .map((entry) => {
      const caption = entry.caption
        ? `\n      <image:caption>${escapeXml(entry.caption)}</image:caption>`
        : "";
      return `  <url>
    <loc>${escapeXml(entry.pageUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(entry.imageUrl)}</image:loc>
      <image:title>${escapeXml(entry.title)}</image:title>${caption}
    </image:image>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
