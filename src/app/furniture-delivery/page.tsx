import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { DeliveryLandingContent } from "@/components/landing/DeliveryLandingContent";
import { FURNITURE_DELIVERY } from "@/data/delivery";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLandingServiceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const page = FURNITURE_DELIVERY;

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: page.image,
  imageAlt: page.imageAlt,
});

export const revalidate = 86400;

export default function FurnitureDeliveryPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Furniture & Marketplace Delivery", href: page.path },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getLandingServiceSchema({
            name: "Furniture & Marketplace Delivery",
            serviceType: "Furniture Delivery",
            description: page.metaDescription,
            path: page.path,
            image: page.image,
            areaNames: page.areas.map((area) => area.name),
          }),
          getFaqSchema(page.faqs, {
            id: `${SITE_URL}${page.path}#faq`,
          }),
          getBreadcrumbSchema(crumbs),
        ]}
      />
      <DeliveryLandingContent page={page} />
    </SiteShell>
  );
}
