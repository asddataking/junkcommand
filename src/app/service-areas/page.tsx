import Link from "next/link";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { CaptionedFigure } from "@/components/shared/CaptionedFigure";
import { GoogleMapsEmbed } from "@/components/shared/GoogleMapsEmbed";
import { TrustBar } from "@/components/sections/TrustBar";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { PhoneLink } from "@/components/forms/PhoneLink";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { LOCATION_REGIONS, getLocationBySlug } from "@/data/locations";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Service Areas", href: "/service-areas" },
];

export const metadata = buildPageMetadata({
  title: "Areas We Serve | Junk Removal Across SE Michigan | Junk Command",
  description:
    "Junk Command provides junk removal across the Blue Water Area, I-69 corridor, north Macomb, and southern Lapeer County. See the towns we serve and get a free estimate.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,135,255,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Areas We Serve
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK REMOVAL SERVICE AREAS
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Junk Command is based in Port Huron and serves customers throughout
            the Blue Water Area and nearby corridors. These are service-area
            pages — not branch offices. If your town is listed, we come to your
            property.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeEstimateButton
              ctaPosition="hub_hero"
              pageType="service_areas"
            >
              Get a Free Estimate
            </FreeEstimateButton>
            <PhoneLink
              ctaPosition="hub_hero_phone"
              pageType="service_areas"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.55)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-bright hover:bg-[rgba(7,135,255,0.08)]"
            >
              Call {BRAND.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <GoogleMapsEmbed
              query="St. Clair County, Michigan"
              label="Junk Command junk removal service area across St. Clair County, Michigan"
              className="min-h-72"
              zoom={9}
            />
            <CaptionedFigure
              src="/images/junk-command-hero.webp"
              alt="Junk Command crew loading a trailer for junk removal across the Blue Water Area"
              caption="Junk Command crew — serving Port Huron and nearby Michigan towns"
              aspectClassName="min-h-72 aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="mt-16 space-y-16">
            {LOCATION_REGIONS.map((region) => {
              const cities = region.slugs
                .map((slug) => getLocationBySlug(slug))
                .filter((city): city is NonNullable<typeof city> =>
                  Boolean(city),
                );
              if (!cities.length) return null;
              return (
                <div key={region.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                    {region.name}
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                    {region.heading.toUpperCase()}
                  </h2>
                  <p className="mt-3 max-w-3xl text-muted">
                    {region.description}
                  </p>
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
                          {city.name}
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
            communities along our Blue Water and I-69 routes.{" "}
            <PhoneLink
              ctaPosition="hub_body_phone"
              pageType="service_areas"
              className="font-semibold text-bright hover:text-white"
            >
              Call {BRAND.phone}
            </PhoneLink>{" "}
            or send a few photos and we will confirm coverage for your address.
          </p>
        </div>
      </section>

      <CtaBanner
        title="NEED JUNK GONE IN YOUR TOWN?"
        description="Get a free estimate with photos — Junk Command will confirm the soonest available window near you."
        ctaPosition="hub_bottom"
        pageType="service_areas"
      />
    </SiteShell>
  );
}
