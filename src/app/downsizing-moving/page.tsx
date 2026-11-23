import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { DeliveryLandingContent } from "@/components/landing/DeliveryLandingContent";
import { DOWNSIZING_MOVING } from "@/data/downsizing";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLandingServiceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const page = DOWNSIZING_MOVING;

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: page.image,
  imageAlt: page.imageAlt,
});

export const revalidate = 86400;

export default function DownsizingMovingPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Downsizing & Home Transitions", href: page.path },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getLandingServiceSchema({
            name: "Downsizing & Home Transitions",
            serviceType: "Downsizing Services",
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
