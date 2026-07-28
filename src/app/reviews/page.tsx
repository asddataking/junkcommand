import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ReviewsWall } from "@/components/pages/ReviewsWall";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { AGGREGATE, REVIEWS } from "@/data/reviews";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getReviewSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
];

export const metadata = buildPageMetadata({
  title: `Junk Removal Reviews Port Huron | ${AGGREGATE.rating}-Star Rated`,
  description: `Read ${AGGREGATE.count}+ Junk Command customer reviews from Port Huron, Marysville, Fort Gratiot & Southeast Michigan. ${AGGREGATE.rating}-star rated junk removal.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema(crumbs),
          getReviewSchema(),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Customer Stories
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK COMMAND REVIEWS
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Real feedback from homeowners, landlords, and families across the
            Blue Water Area. Filter by city or rating to see what neighbors say
            about our crew.
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Aggregate Rating
              </p>
              <p className="mt-1 font-display text-5xl tracking-[0.06em] text-white">
                {AGGREGATE.rating}.0
              </p>
              <p className="text-sm text-bright">
                Based on {AGGREGATE.count}+ reviews
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/book-online" showArrow>
                Get My Free Quote
              </Button>
              <Button href={BRAND.phoneHref} variant="secondary">
                Call {BRAND.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReviewsWall reviews={REVIEWS} />
        </div>
      </section>

      <CtaBanner
        title="JOIN THE FIVE-STAR LIST"
        description="Book Junk Command and see why Port Huron trusts our veteran-owned crew."
      />
    </SiteShell>
  );
}
