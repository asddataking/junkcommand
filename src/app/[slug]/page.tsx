import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/data/services";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServicePageSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicePageContent } from "@/components/pages/ServicePageContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export const revalidate = 86400;

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/${service.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getServicePageSchema(service),
          getFaqSchema(service.faqs, {
            id: `https://www.getjunkcommand.com/${service.slug}#faq`,
          }),
          getBreadcrumbSchema(crumbs),
        ]}
      />
      <ServicePageContent service={service} />
    </SiteShell>
  );
}
