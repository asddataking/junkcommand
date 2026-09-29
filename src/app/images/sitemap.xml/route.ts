import { getServiceBySlug } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { KEPT_CITY_SLUGS, KEPT_SERVICE_SLUGS } from "@/data/indexing";
import { SITE_URL, SOCIAL_SHARE_IMAGE, SOCIAL_SHARE_IMAGE_ALT } from "@/lib/constants";

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
      imageUrl: absoluteImage(SOCIAL_SHARE_IMAGE),
      title: SOCIAL_SHARE_IMAGE_ALT,
      caption: "Junk Command social share image — Port Huron junk removal",
    },
    {
      pageUrl: SITE_URL,
      imageUrl: absoluteImage("/images/junk-command-hero.webp"),
      title: "Junk Command junk removal crew in Port Huron",
      caption: "Veteran-owned junk removal serving St. Clair County",
    },
    {
      pageUrl: `${SITE_URL}/about`,
      imageUrl: absoluteImage("/images/dan-gage-luna.webp"),
      title: "Dan, Gage, and Luna — Junk Command",
    },
    {
      pageUrl: `${SITE_URL}/about`,
      imageUrl: absoluteImage("/images/trailer.webp"),
      title: "Junk Command trailer",
    },
  ];

  for (const slug of KEPT_SERVICE_SLUGS) {
    const service = getServiceBySlug(slug);
    if (!service) continue;
    entries.push({
      pageUrl: `${SITE_URL}/${service.slug}`,
      imageUrl: absoluteImage(service.image),
      title: service.title,
      caption: service.imageAlt,
    });
  }

  for (const slug of KEPT_CITY_SLUGS) {
    const city = getCityBySlug(slug);
    if (!city) continue;
    const hero = city.images.find((image) => image.role === "hero") ?? city.images[0];
    if (!hero) continue;
    entries.push({
      pageUrl: `${SITE_URL}/service-areas/${city.slug}`,
      imageUrl: absoluteImage(hero.src),
      title: `Junk removal in ${city.name}`,
      caption: hero.caption || city.imageAlt,
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
