import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { PartnerIndustryLayout } from "@/components/landing/PartnerIndustryLayout";
import {
  getAllPartnerIndustrySlugs,
  getPartnerIndustry,
} from "@/data/partners";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLandingServiceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPartnerIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getPartnerIndustry(slug);
  if (!industry) return {};
  return buildPageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/partners/${industry.slug}`,
    image: "/images/junk-command-hero.webp",
    imageAlt: `Junk Command partners with ${industry.shortTitle} in Port Huron`,
  });
}

export const revalidate = 86400;

export default async function PartnerIndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getPartnerIndustry(slug);
  if (!industry) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "/partners" },
    { name: industry.shortTitle, href: `/partners/${industry.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getLandingServiceSchema({
            name: industry.title,
            serviceType: "Junk Removal Referral Partnership",
            description: industry.metaDescription,
            path: `/partners/${industry.slug}`,
            image: "/images/junk-command-hero.webp",
          }),
          getFaqSchema(industry.faqs, {
            id: `${SITE_URL}/partners/${industry.slug}#faq`,
          }),
          getBreadcrumbSchema(crumbs),
        ]}
      />
      <PartnerIndustryLayout industry={industry} />
    </SiteShell>
  );
}
