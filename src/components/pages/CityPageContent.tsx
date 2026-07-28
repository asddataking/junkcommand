import Link from "next/link";
import type { City } from "@/data/cities";
import { getNearbyCities } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { getReviewsByCity, getFeaturedReviews } from "@/data/reviews";
import { CityHero } from "@/components/shared/CityHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { SidebarCta } from "@/components/shared/SidebarCta";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { MapPin, Check } from "lucide-react";

export function CityPageContent({ city }: { city: City }) {
  const nearby = getNearbyCities(city);
  const cityReviews = getReviewsByCity(city.slug);
  const reviews =
    cityReviews.length >= 2 ? cityReviews.slice(0, 3) : getFeaturedReviews(3);
  const featuredServices = SERVICES.slice(0, 9);

  return (
    <>
      <CityHero
        eyebrow={city.eyebrow}
        h1={city.h1}
        intro={city.intro}
        image={city.image}
        imageAlt={city.imageAlt}
        county={city.county}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: city.name, href: `/service-areas/${city.slug}` },
        ]}
      />
      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                WHY {city.name.toUpperCase()} CHOOSES US
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{city.whyUs}</p>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                SERVICES IN {city.name.toUpperCase()}
              </h2>
              <p className="mt-4 text-muted">{city.servicesBlurb}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="flex items-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-white transition-colors hover:border-bright hover:text-bright"
                    >
                      <Check className="size-4 shrink-0 text-bright" aria-hidden />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
              >
                Browse all services →
              </Link>
            </div>

            <CtaBanner
              title={`JUNK REMOVAL IN ${city.name.toUpperCase()}`}
              description="Fast scheduling, upfront pricing, veteran-owned crew."
              className="border-x border-[rgba(0,135,255,0.25)]"
            />

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                LOCAL REFERENCES
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {city.localReferences.map((ref) => (
                  <li
                    key={ref}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                    {ref}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                NEARBY LANDMARKS
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {city.nearbyLandmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="rounded-[2px] border border-[rgba(0,135,255,0.3)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                  >
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                SERVICE AREA MAP
              </h2>
              <div className="mt-6">
                <MapPlaceholder label={`${city.name}, Michigan`} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                REVIEWS NEAR {city.name.toUpperCase()}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                {city.name.toUpperCase()} FAQS
              </h2>
              <div className="mt-6">
                <FaqAccordion items={city.faqs} idPrefix={city.slug} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SidebarCta title={`${city.name} Pickup`} />
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
              <h2 className="font-display text-xl tracking-[0.08em] text-white">
                NEARBY AREAS
              </h2>
              <ul className="mt-4 space-y-2">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/service-areas/${n.slug}`}
                      className="text-sm text-muted hover:text-bright"
                    >
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 border-t border-[rgba(0,135,255,0.15)] pt-4">
                <Link href="/pricing" className="block text-sm text-bright hover:text-white">
                  Pricing →
                </Link>
                <Link href="/about" className="block text-sm text-bright hover:text-white">
                  About Junk Command →
                </Link>
                <Link href="/contact" className="block text-sm text-bright hover:text-white">
                  Contact →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`SCHEDULE ${city.name.toUpperCase()} SERVICE`}
        description="Call, text photos, or book online — Junk Command is ready."
      />
      <div className="pb-10 text-center">
        <Button href="/book-online" showArrow>
          Book Online
        </Button>
      </div>
    </>
  );
}
