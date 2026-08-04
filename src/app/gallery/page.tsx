import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = buildPageMetadata({
  title: "Before & After Gallery | Junk Command Port Huron",
  description:
    "See Junk Command before-and-after junk removal jobs across Port Huron and St. Clair County — garages, estates, furniture, yard waste, and construction debris.",
  path: "/gallery",
});

export default function GalleryPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Before & After", href: "/gallery" },
  ];

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Results
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            BEFORE & AFTER
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Real cleanouts from our Port Huron crew. Tap any job to open a
            larger before-and-after view.
          </p>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner
        title="WANT RESULTS LIKE THESE?"
        description="Text photos to 810-242-0429 and we will quote your Port Huron area job fast."
      />
    </SiteShell>
  );
}
