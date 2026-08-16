import { Building2, Clock3, Truck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { BRAND, SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLandingServiceSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Commercial Junk Removal", href: "/commercial-junk-removal" },
];

const pageFaqs = [
  {
    question: "Do you haul junk for businesses in Port Huron?",
    answer:
      "Yes. Junk Command handles office cleanouts, retail resets, warehouse clutter, rental turnovers, and light commercial debris across the Blue Water Area. We can work around business hours when the schedule allows.",
  },
  {
    question: "Can you invoice a property manager or contractor?",
    answer:
      "Yes. Tell us the billing name and job address when you request a quote. Partners can also apply at /partners.",
  },
  {
    question: "Do you offer recurring commercial pickups?",
    answer:
      "Recurring routes are available when volume is predictable — for example a shop, storage facility, or contractor yard. Call 810-242-0429 to set a window.",
  },
];

export const metadata = buildPageMetadata({
  title: "Commercial Junk Removal Port Huron MI | Junk Command",
  description:
    "Office, retail, rental, and light commercial junk removal in Port Huron and St. Clair County. Photo quotes, after-hours windows, and invoicing for local businesses.",
  path: "/commercial-junk-removal",
});

export default function CommercialJunkRemovalPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getLandingServiceSchema({
            name: "Commercial Junk Removal",
            serviceType: "Commercial Junk Removal",
            description:
              "Office, retail, rental, and light commercial junk hauling in Port Huron and the Blue Water Area.",
            path: "/commercial-junk-removal",
            image: "/images/services/garage-cleanout.webp",
          }),
          getFaqSchema(pageFaqs, {
            id: `${SITE_URL}/commercial-junk-removal#faq`,
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Businesses &amp; Property Pros
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            COMMERCIAL JUNK REMOVAL IN PORT HURON
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Clear a storefront, rental, office, or job site without tying up
            your crew. Junk Command is the local veteran-owned alternative to a
            Detroit-metro franchise — photo quotes, on-time windows, and a
            broom-clean finish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeEstimateButton
              ctaPosition="commercial_hero"
              pageType="commercial"
            >
              Get a Commercial Quote
            </FreeEstimateButton>
            <Button href={BRAND.phoneHref} variant="secondary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Building2,
              title: "Offices & retail",
              body: "Fixtures, furniture, cardboard, and leftover remodel debris from downtown Port Huron to Gratiot corridors.",
            },
            {
              icon: Truck,
              title: "Rentals & turnovers",
              body: "Tenant leftovers, mattresses, appliances, and garage piles so the next showing is not competing with junk.",
            },
            {
              icon: Clock3,
              title: "Around your hours",
              body: "Ask for early, evening, or Saturday windows. We plan routes around St. Clair County businesses that cannot close the floor.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
            >
              <item.icon className="size-6 text-bright" aria-hidden />
              <h2 className="mt-4 font-display text-2xl tracking-[0.08em] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white">
            COMMERCIAL FAQS
          </h2>
          <div className="mt-6">
            <FaqAccordion items={pageFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="NEED A JOB SITE CLEARED?"
        description="Send photos, the address, and your deadline. We will confirm price and the soonest window."
      />
    </SiteShell>
  );
}
