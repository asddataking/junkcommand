import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ReviewsWall } from "@/components/pages/ReviewsWall";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { hasReviews, REVIEWS } from "@/data/reviews";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getReviewSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
];

export const metadata = buildPageMetadata({
  title: "Junk Removal Reviews Port Huron | Junk Command",
  description:
    "Share your Junk Command experience or check back soon for customer reviews from Port Huron, Marysville, Fort Gratiot & Southeast Michigan.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const reviewSchema = getReviewSchema();
  const schemas = [
    getBreadcrumbSchema(crumbs),
    ...(reviewSchema ? [reviewSchema] : []),
  ];

  return (
    <SiteShell>
      <JsonLd data={schemas} />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Customer Feedback
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK COMMAND REVIEWS
          </h1>
          {hasReviews() ? (
            <p className="mt-4 max-w-2xl text-muted">
              Real feedback from homeowners, landlords, and families across the
              Blue Water Area.
            </p>
          ) : (
            <p className="mt-4 max-w-2xl text-muted">
              We&apos;re a new local crew building our reputation one job at a
              time. After your haul, we&apos;d love to hear how we did — your
              feedback helps neighbors across Port Huron and St. Clair County
              choose with confidence.
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#quote" showArrow>
              Get My Free Quote
            </Button>
            <Button href={BRAND.phoneHref} variant="secondary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {hasReviews() ? (
            <div className="mx-auto max-w-7xl">
              <ReviewsWall reviews={REVIEWS} />
            </div>
          ) : (
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card p-8 sm:p-10">
              <h2 className="font-display text-3xl tracking-[0.08em] text-white sm:text-4xl">
                BE ONE OF OUR FIRST REVIEWS
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Book a junk removal with Junk Command, then tell us about your
                experience. Honest local feedback means more than a fake star
                count — and we&apos;ll earn every word.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/#quote" showArrow>
                  Book a Pickup
                </Button>
                <Button href={BRAND.smsHref} variant="secondary">
                  Text Us After Your Job
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="READY TO WORK WITH A LOCAL CREW?"
        description="Book Junk Command for upfront pricing and veteran-owned service in Port Huron."
      />
    </SiteShell>
  );
}
