import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ServiceLinkCard } from "@/components/shared/ServiceLinkCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getServiceCatalogSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export const metadata = buildPageMetadata({
  title: "Junk Removal Services Port Huron MI | Junk Command",
  description:
    "Browse all Junk Command junk removal services — furniture, appliances, garage & estate cleanouts, hot tubs, construction debris & more across Southeast Michigan.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getServiceCatalogSchema(),
          getBreadcrumbSchema(crumbs),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Full-Service Haul-Away
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK REMOVAL SERVICES
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            From a single mattress to a full estate cleanout, Junk Command
            hauls it all across Port Huron, St. Clair County, and northern
            Macomb County. Veteran-owned. Upfront pricing. Same-day options
            when you need junk gone now.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-online" showArrow>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              What We Haul
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              EVERY JOB. ONE CREW.
            </h2>
            <p className="mt-3 text-muted">
              Pick a service below for details, pricing guidance, and how we
              clear that load — or call and we will sort it with you on the
              phone.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceLinkCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-14 grid gap-4 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h2 className="font-display text-2xl tracking-[0.08em] text-white">
                SEE OUR AREAS
              </h2>
              <p className="mt-2 text-sm text-muted">
                We serve Port Huron, Marysville, Fort Gratiot, Chesterfield,
                and towns across St. Clair &amp; Macomb Counties.
              </p>
              <Link
                href="/service-areas"
                className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
              >
                Browse service areas →
              </Link>
            </div>
            <div>
              <h2 className="font-display text-2xl tracking-[0.08em] text-white">
                TRANSPARENT PRICING
              </h2>
              <p className="mt-2 text-sm text-muted">
                Most jobs start at our $99 minimum. Volume pricing means you
                only pay for the truck space you use.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
              >
                View pricing guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="READY TO CLEAR THE CLUTTER?"
        description="Tell us what you need hauled — photos get you the fastest free quote from Junk Command."
      />
    </SiteShell>
  );
}
