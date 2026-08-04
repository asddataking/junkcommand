import Link from "next/link";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { CITIES } from "@/data/cities";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Service Areas", href: "/service-areas" },
];

const counties = Array.from(new Set(CITIES.map((c) => c.county)));

export const metadata = buildPageMetadata({
  title: "Junk Removal Service Areas | Port Huron & SE Michigan",
  description:
    "Junk Command serves Port Huron, Marysville, Fort Gratiot, Memphis, Chesterfield, New Baltimore, and Blue Water Area communities across St. Clair, Macomb & Sanilac Counties. Call 810-242-0429.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <SiteShell>
      <JsonLd data={[getLocalBusinessSchema(), getBreadcrumbSchema(crumbs)]} />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Blue Water Coverage
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            SERVICE AREAS
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Based in Port Huron and serving Southeast Michigan — Junk Command
            rolls through St. Clair County daily, reaches into Macomb County
            Anchor Bay towns, and covers Blue Water communities up through
            Sanilac County.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#quote" showArrow>
              Book Junk Removal
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
          <MapPlaceholder
            label="Junk Command Service Map"
            className="min-h-72"
          />

          <div className="mt-16 space-y-14">
            {counties.map((county) => {
              const cities = CITIES.filter((c) => c.county === county);
              return (
                <div key={county}>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                    {county}
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                    {county.toUpperCase()}
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/service-areas/${city.slug}`}
                        className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright glow-border"
                      >
                        <MapPin
                          className="size-4 shrink-0 text-bright"
                          aria-hidden
                        />
                        <span>
                          Junk Removal in {city.name}
                          {city.isCounty ? " (Countywide)" : ""}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-12 max-w-3xl text-sm text-muted">
            Do not see your town listed? We regularly serve surrounding
            communities along our Blue Water routes.{" "}
            <a
              href={BRAND.phoneHref}
              className="font-semibold text-bright hover:text-white"
            >
              Call {BRAND.phone}
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-semibold text-bright hover:text-white"
            >
              contact us
            </Link>{" "}
            and we will confirm coverage for your address.
          </p>
        </div>
      </section>

      <CtaBanner
        title="NEED JUNK GONE IN YOUR TOWN?"
        description="Get a free quote with photos and we’ll confirm the soonest available window near Port Huron."
      />
    </SiteShell>
  );
}
