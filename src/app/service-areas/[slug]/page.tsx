import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCitySlugs, getCityBySlug } from "@/data/cities";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getCityPageSchema,
  getFaqSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { CityPageContent } from "@/components/pages/CityPageContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildPageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/service-areas/${city.slug}`,
    image: city.image,
    imageAlt: city.imageAlt,
  });
}

export const revalidate = 86400;

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/service-areas" },
    { name: city.name, href: `/service-areas/${city.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getCityPageSchema(city),
          getFaqSchema(city.faqs),
          getBreadcrumbSchema(crumbs),
        ]}
      />
      <CityPageContent city={city} />
    </SiteShell>
  );
}
