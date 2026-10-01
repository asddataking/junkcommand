import { Mail, MessageSquare, Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { GoogleMapsEmbed } from "@/components/shared/GoogleMapsEmbed";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import {
  BRAND,
  BUSINESS_HOURS,
  LOCATION,
  MAPS_SEARCH_QUERY,
  SITE_URL,
  getGbpMapsHref,
} from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const pageFaqs = [
  {
    question: "How do I get a junk removal estimate in Port Huron?",
    answer:
      "Call or text photos to 810-242-0429, email info@junkcommand.com, or use the quote form on this page. Photos get you a confirmed range. You approve the price before we load.",
  },
  {
    question: "Where is Junk Command based?",
    answer:
      "We are a service-area business based in Port Huron, MI 48060. We come to your property in Port Huron, Fort Gratiot, Marysville, Kimball Township, St. Clair, Marine City, Smiths Creek, Romeo, Imlay City, and Lapeer. There is no public street address on this page.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We price by how much space the load takes in the truck. Curbside Command starts at $99 when qualifying items are already outside. Full-service Command starts at $129 when we carry items out.",
  },
];

export const metadata = buildPageMetadata({
  title: "Call or Text Junk Command in Port Huron | Free Estimate",
  description:
    "Contact Junk Command in Port Huron, MI. Call or text 810-242-0429, email info@junkcommand.com, or request a free photo estimate for St. Clair County junk removal.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, { id: `${SITE_URL}/contact#faq` }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,135,255,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Get In Touch
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            CONTACT JUNK COMMAND IN PORT HURON
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Ready to clear clutter in Port Huron, Fort Gratiot, Marysville,
            Kimball Township, St. Clair, Marine City, Smiths Creek, Romeo,
            Imlay City, or Lapeer? Call, text photos, email, or use the quote
            form below — we respond fast. This is a service-area business: we
            come to your property. There is no public street address on this
            page.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Pricing is by volume. Curbside Command starts at $99 when qualifying
            items are already outside. Full-service Command starts at $129 when
            we carry items out. Photos get you a free estimate. You approve the
            price before we load. We haul furniture, appliances, garage and
            estate contents, hot tubs, and mixed construction debris that is not
            hazardous.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Hours are Monday through Saturday, 8:00 AM to 6:00 PM. Sunday is
            closed. Same-day or next-day windows may be available when the job
            fits a route already moving through the Blue Water Area. If you want
            to work on the crew instead of booking a haul, see{" "}
            <a href="/work-with-junk-command" className="text-bright hover:text-white">
              Work With Junk Command
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={BRAND.phoneHref} showArrow>
              Call {BRAND.phone}
            </Button>
            <Button href="#quote" variant="secondary">
              Jump to Quote Form
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-3">
              <GoogleMapsEmbed
                query={MAPS_SEARCH_QUERY}
                label="Junk Command junk removal on Google Maps in Port Huron, Michigan"
                className="min-h-72"
                lat={LOCATION.geo.latitude}
                lng={LOCATION.geo.longitude}
                showOpenLink={false}
              />
              <Button
                href={getGbpMapsHref()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full sm:w-auto"
                showArrow
              >
                View Junk Command on Google Maps
              </Button>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                Reach Us
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
                PHONE · TEXT · EMAIL
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={BRAND.phoneHref}
                    className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
                  >
                    <Phone className="size-4 text-bright" aria-hidden />
                    Call {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.smsHref}
                    className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
                  >
                    <MessageSquare className="size-4 text-bright" aria-hidden />
                    Text Photos to {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.emailHref}
                    className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
                  >
                    <Mail className="size-4 text-bright" aria-hidden />
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                Hours
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
                BUSINESS HOURS
              </h2>
              <ul className="mt-6 divide-y divide-[rgba(0,135,255,0.2)] rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card">
                {BUSINESS_HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-white">{row.day}</span>
                    <span className="text-muted">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">
                Based in {LOCATION.displayLine}. Serving St. Clair, Macomb, and
                nearby Blue Water communities. Service-area business — we come
                to you.
              </p>
            </div>
          </div>

          <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-[#080B0F] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Prefer Online?
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
              REQUEST A QUOTE
            </h2>
            <p className="mt-2 text-sm text-muted">
              Include your address and upload photos for the fastest estimate.
              The form below is the same booking intake we use for online
              requests.
            </p>
            <div className="mt-4">
              <Button href="#quote" variant="secondary" className="w-full sm:w-auto">
                Scroll to Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(0,135,255,0.2)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white">
            CONTACT FAQS
          </h2>
          <div className="mt-6">
            <FaqAccordion items={pageFaqs} idPrefix="contact" />
          </div>
        </div>
      </section>

      <QuoteForm embedForm pageType="contact" />

      <CtaBanner
        title="NEED JUNK GONE SOON?"
        description="Call or book online for a fast quote and the soonest available window near Port Huron."
      />
    </SiteShell>
  );
}
