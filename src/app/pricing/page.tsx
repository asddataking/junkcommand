import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { EstimateCalculator } from "@/components/shared/EstimateCalculator";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { FAQS } from "@/data/faqs";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getPricingOfferCatalogSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
];

const PRICE_ROWS = [
  { item: "Curbside Command", price: "From $99" },
  { item: "Full-Service Command", price: "From $129" },
  { item: "Mattress / Box Spring (curbside)", price: "From $99" },
  { item: "Couch / Sofa (curbside)", price: "From $99–$119" },
  { item: "Recliner (curbside)", price: "From $99" },
  { item: "Washer or Dryer", price: "From $109" },
  { item: "Refrigerator / Freezer", price: "From $139" },
  { item: "Quick Clear (25% load)", price: "$179" },
  { item: "Small Cleanup (50% load)", price: "$279" },
  { item: "Large Cleanup (75% load)", price: "$369" },
  { item: "Full Command Load (100%)", price: "$449" },
  { item: "Hot Tub / Specialty Items", price: "Photo quote" },
] as const;

const pricingFaqs = FAQS.filter((f) => f.category === "pricing");

export const metadata = buildPageMetadata({
  title: "Junk Removal Pricing Port Huron MI | Curbside From $99",
  description:
    "Junk Command curbside junk pickup starts at $99 and full-service removal starts at $129. See load tiers and common item starting prices. Send photos for a confirmed quote.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pricingFaqs, {
            id: "https://www.getjunkcommand.com/pricing#faq",
          }),
          getPricingOfferCatalogSchema(),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Upfront. No Surprises.
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK REMOVAL PRICING
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            <span className="font-semibold text-white">Curbside Command</span>{" "}
            starts at $99 for qualifying items already outside.{" "}
            <span className="font-semibold text-white">Full-Service Command</span>{" "}
            starts at $129 when we carry items out. Larger piles use Command Load
            Pricing — you approve the quote before we load a single item.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#quote" showArrow>
              Get My Curbside Price
            </Button>
            <Button href={BRAND.smsHref} variant="secondary">
              Text Photos to {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Starting Prices
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              COMMON ITEM GUIDE
            </h2>
            <p className="mt-3 text-muted">
              These ranges help you plan. Final pricing depends on access,
              volume, and condition — confirmed from photos or on site.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#080B0F] text-xs uppercase tracking-[0.14em] text-bright">
                <tr>
                  <th className="px-4 py-3 font-semibold sm:px-5">Item / Job</th>
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    Starting Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(0,135,255,0.2)] bg-card">
                {PRICE_ROWS.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-3.5 text-white sm:px-5">
                      {row.item}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-bright sm:px-5">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Disclaimer: Prices shown are starting estimates for planning only
            and are not a binding quote. Unusual access, hazardous materials,
            extra labor, or disposal fees for restricted items may affect the
            final price. Junk Command confirms cost before loading. You never
            pay for work you did not approve.
          </p>
        </div>
      </section>

      <section className="border-y border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimateCalculator />
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Pricing FAQs
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            COMMON QUESTIONS
          </h2>
          <div className="mt-8">
            <FaqAccordion items={pricingFaqs} idPrefix="pricing-faq" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-online" showArrow>
              Lock In a Free Quote
            </Button>
            <Button href="/faqs" variant="secondary">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        title="GET AN EXACT PRICE TODAY"
        description="Send photos for a confirmed quote — Curbside Command starts at $99."
      />
    </SiteShell>
  );
}
