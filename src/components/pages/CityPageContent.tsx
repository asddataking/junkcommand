import Link from "next/link";
import type { City } from "@/data/cities";
import { getNearbyCities } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { getReviewsByCity, getFeaturedReviews } from "@/data/reviews";
import { CityHero } from "@/components/shared/CityHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { CurbsideCommandHighlight } from "@/components/shared/CurbsideCommandHighlight";
import { SidebarCta } from "@/components/shared/SidebarCta";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { ServiceLinkCard } from "@/components/shared/ServiceLinkCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { CURBSIDE_START } from "@/data/curbside-pricing";
import { MapPin, Check } from "lucide-react";

const COMMON_JOB_IMAGES = [
  {
    src: "/images/services/furniture-removal.webp",
    alt: "Furniture ready for junk removal haul-away",
  },
  {
    src: "/images/services/appliance-removal.webp",
    alt: "Appliance staged for professional junk removal",
  },
  {
    src: "/images/services/garage-cleanout.webp",
    alt: "Garage cleanout clutter ready for hauling",
  },
  {
    src: "/images/services/estate-cleanout.webp",
    alt: "Estate and property cleanout items ready for pickup",
  },
] as const;

const PRICING_MOSAIC = [
  {
    src: "/images/pricing/couch.webp",
    label: "Couch",
  },
  {
    src: "/images/pricing/mattress.webp",
    label: "Mattress",
  },
  {
    src: "/images/pricing/refrigerator.webp",
    label: "Fridge",
  },
  {
    src: "/images/pricing/washer-dryer.webp",
    label: "Washer",
  },
] as const;

export function CityPageContent({ city }: { city: City }) {
  const nearby = getNearbyCities(city);
  const cityReviews = getReviewsByCity(city.slug);
  const reviews =
    cityReviews.length >= 2 ? cityReviews.slice(0, 3) : getFeaturedReviews(3);
  const featuredServices = SERVICES.slice(0, 6);

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
      <CurbsideCommandHighlight cityName={city.name} />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-14">
            <BlurFade>
              <AnimatedShinyText className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                Local Junk Removal
              </AnimatedShinyText>
              <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                JUNK REMOVAL IN {city.name.toUpperCase()}
              </h2>
              {city.introduction[0] ? (
                <p className="mt-4 leading-relaxed text-muted">
                  {city.introduction[0]}
                </p>
              ) : null}
            </BlurFade>

            <BlurFade>
              <div className="grid items-center gap-6 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
                  <MediaImage
                    src="/images/dan-gage-luna.webp"
                    alt="Dan and Gage with Luna and the Junk Command truck and trailer"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[38%_36%]"
                  />
                  <BorderBeam
                    size={110}
                    duration={10}
                    colorFrom="#18a0ff"
                    colorTo="#0787ff"
                    borderWidth={1.25}
                  />
                </div>
                <div className="relative p-6 sm:p-8">
                  <ShineBorder
                    shineColor={["#0787ff", "#18a0ff"]}
                    duration={14}
                    borderWidth={1}
                    className="opacity-35"
                  />
                  <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.22em] text-bright">
                    Veteran-Owned Crew
                  </p>
                  <h2 className="relative z-10 mt-3 font-display text-3xl tracking-[0.06em] text-white">
                    WHY {city.name.toUpperCase()} CHOOSES US
                  </h2>
                  <div className="relative z-10 mt-4 space-y-4 leading-relaxed text-muted">
                    {city.whyUs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {city.introduction.length > 1 ? (
              <BlurFade>
                <div className="space-y-4 leading-relaxed text-muted">
                  {city.introduction.slice(1).map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </BlurFade>
            ) : null}

            <BlurFade>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                SERVICES IN {city.name.toUpperCase()}
              </h2>
              <p className="mt-4 text-muted">{city.servicesBlurb}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <ServiceLinkCard service={service} />
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-5 inline-block text-sm font-semibold text-bright hover:text-white"
              >
                Browse all services →
              </Link>
            </BlurFade>

            <BlurFade>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                COMMON JOBS WE PERFORM
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {city.commonJobs.map((job, index) => {
                  const media =
                    COMMON_JOB_IMAGES[index] ?? COMMON_JOB_IMAGES[0];
                  return (
                    <li
                      key={job.title}
                      className="group relative min-h-[15rem] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card"
                    >
                      <MediaImage
                        src={media.src}
                        alt={media.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/75 to-[#020305]/20"
                        aria-hidden
                      />
                      <div className="relative z-10 flex h-full min-h-[15rem] flex-col justify-end p-5">
                        <h3 className="font-display text-xl tracking-[0.08em] text-white">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {job.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </BlurFade>

            <CtaBanner
              title={`JUNK REMOVAL IN ${city.name.toUpperCase()}`}
              description="Fast scheduling, upfront pricing, veteran-owned crew."
              className="border-x border-[rgba(0,135,255,0.25)]"
            />

            <BlurFade>
              <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] p-6 sm:p-8">
                <DotPattern
                  width={20}
                  height={20}
                  cr={0.8}
                  className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
                />
                <ShineBorder
                  shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
                  duration={16}
                  borderWidth={1}
                  className="opacity-40"
                />
                <div className="relative z-10 grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bright">
                      Serving {city.name}
                    </p>
                    <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white">
                      LOCAL REFERENCES
                    </h2>
                    <ul className="mt-6 grid gap-3">
                      {city.localReferences.map((ref) => (
                        <li
                          key={ref}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <MapPin
                            className="mt-0.5 size-4 shrink-0 text-bright"
                            aria-hidden
                          />
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-[0.08em] text-white">
                      NEARBY LANDMARKS
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {city.nearbyLandmarks.map((landmark) => (
                        <li
                          key={landmark}
                          className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-[#020305]/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                        >
                          {landmark}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)]">
                      <MediaImage
                        src="/images/junk-command-hero.webp"
                        alt="Junk Command crew ready for local junk removal service"
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover object-[center_35%] opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020305]/90 via-[#020305]/35 to-transparent" />
                      <p className="absolute bottom-3 left-3 right-3 font-display text-lg tracking-[0.1em] text-white">
                        {city.name.toUpperCase()}, MI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade>
              <div className="grid items-start gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                    PRICING OVERVIEW IN {city.name.toUpperCase()}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-muted">
                    {city.pricingOverview.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  <Link
                    href="/pricing"
                    className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
                  >
                    See full pricing details →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {PRICING_MOSAIC.map((item) => (
                    <div
                      key={item.label}
                      className="relative aspect-square overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)]"
                    >
                      <MediaImage
                        src={item.src}
                        alt={`${item.label} junk removal starting price example`}
                        fill
                        loading="lazy"
                        sizes="160px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />
                      <p className="absolute bottom-2 left-2 font-display text-sm tracking-[0.1em] text-white">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {reviews.length > 0 ? (
              <BlurFade>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  REVIEWS NEAR {city.name.toUpperCase()}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </BlurFade>
            ) : null}

            <BlurFade>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                {city.name.toUpperCase()} FAQS
              </h2>
              <div className="mt-6">
                <FaqAccordion items={city.faqs} idPrefix={city.slug} />
              </div>
              <p className="mt-4 text-sm text-muted">
                More answers in our{" "}
                <Link href="/guides" className="text-bright hover:text-white">
                  junk removal guides
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-we-dont-take"
                  className="text-bright hover:text-white"
                >
                  restricted items list
                </Link>
                .
              </p>
            </BlurFade>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)]">
              <div className="relative aspect-[5/4]">
                <MediaImage
                  src="/images/trailer.webp"
                  alt="Junk Command trailer ready for pickup"
                  fill
                  loading="lazy"
                  sizes="320px"
                  className="object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />
              </div>
              <SidebarCta title={`${city.name} Pickup`} />
            </div>

            <div className="relative overflow-hidden rounded-[2px] border border-bright/50 bg-[#080B0F] p-5 shadow-[0_0_28px_rgba(7,135,255,0.16)]">
              <ShineBorder
                shineColor={["#0787ff", "#18a0ff"]}
                duration={12}
                borderWidth={1}
                className="opacity-50"
              />
              <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-bright">
                Curbside Command
              </p>
              <p className="relative z-10 mt-2 font-display text-3xl tracking-[0.08em] text-white">
                FROM ${CURBSIDE_START}
              </p>
              <p className="relative z-10 mt-2 text-sm text-muted">
                Set it outside in {city.name} — send photos for a confirmed
                curbside price.
              </p>
              <Button href="/book-online" className="relative z-10 mt-4 w-full" showArrow>
                Get Curbside Price
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
              <ShineBorder
                shineColor={["#0787ff", "#18a0ff"]}
                duration={14}
                borderWidth={1}
                className="opacity-35"
              />
              <h2 className="relative z-10 font-display text-xl tracking-[0.08em] text-white">
                NEARBY AREAS
              </h2>
              <ul className="relative z-10 mt-4 space-y-2">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/service-areas/${n.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-bright"
                    >
                      <Check className="size-3.5 text-bright" aria-hidden />
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="relative z-10 mt-4 space-y-2 border-t border-[rgba(0,135,255,0.15)] pt-4">
                <Link href="/" className="block text-sm text-bright hover:text-white">
                  Homepage →
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-bright hover:text-white"
                >
                  All services →
                </Link>
                <Link
                  href="/pricing"
                  className="block text-sm text-bright hover:text-white"
                >
                  Pricing →
                </Link>
                <Link
                  href="/guides"
                  className="block text-sm text-bright hover:text-white"
                >
                  Guides →
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-bright hover:text-white"
                >
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
