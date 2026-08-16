import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import type { LocationImage, LocationPage } from "@/data/locations/types";
import { getNearbyLocations } from "@/data/locations";
import { getLocationGeo } from "@/data/locations/geo";
import { getServiceBySlug } from "@/data/services";
import { getReviewsByCity, getFeaturedReviews } from "@/data/reviews";
import { BRAND } from "@/lib/constants";
import { CaptionedFigure } from "@/components/shared/CaptionedFigure";
import { RichText, RichTextBlock } from "@/components/shared/RichText";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { GoogleMapsEmbed } from "@/components/shared/GoogleMapsEmbed";
import { GoogleReviewCta } from "@/components/shared/GoogleReviewCta";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { PhoneLink } from "@/components/forms/PhoneLink";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MediaImage } from "@/components/ui/MediaImage";

export function imageByRole(
  location: LocationPage,
  role: LocationImage["role"],
): LocationImage | undefined {
  return (
    location.images.find((image) => image.role === role) ??
    (role === "hero" ? location.images[0] : undefined)
  );
}

export function galleryImages(location: LocationPage): LocationImage[] {
  return location.images.filter((image) => image.role !== "hero").slice(0, 3);
}

export function locationCrumbs(location: LocationPage) {
  return [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/service-areas" },
    { name: location.name, href: `/service-areas/${location.slug}` },
  ];
}

function EstimateAndPhone({
  location,
  position,
  estimateLabel = "Get a Free Estimate",
  phoneLabel,
}: {
  location: LocationPage;
  position: string;
  estimateLabel?: string;
  phoneLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <FreeEstimateButton
        ctaPosition={position}
        locationSlug={location.slug}
        pageType="location_page"
      >
        {estimateLabel}
      </FreeEstimateButton>
      <PhoneLink
        ctaPosition={`${position}_phone`}
        locationSlug={location.slug}
        pageType="location_page"
        className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.55)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-bright hover:bg-[rgba(7,135,255,0.08)]"
      >
        {phoneLabel ?? `Call / Text ${BRAND.phone}`}
      </PhoneLink>
    </div>
  );
}

export function LocationHeroEditorial({ location }: { location: LocationPage }) {
  const hero = imageByRole(location, "hero");
  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.25)]">
      <div className="absolute inset-0">
        {hero ? (
          <MediaImage
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020305]/70 via-[#020305]/88 to-[#020305]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Breadcrumbs items={locationCrumbs(location)} />
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-bright">
          <MapPin className="size-3.5" aria-hidden />
          {location.eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
          {location.h1}
        </h1>
        <p className="mt-2 text-sm text-muted">{location.county}</p>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {location.heroIntro}
        </p>
        <div className="mt-8">
          <EstimateAndPhone location={location} position="hero" />
        </div>
      </div>
    </section>
  );
}

export function LocationHeroSplit({ location }: { location: LocationPage }) {
  const hero = imageByRole(location, "hero");
  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,135,255,0.16),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <Breadcrumbs items={locationCrumbs(location)} />
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            <MapPin className="size-3.5" aria-hidden />
            {location.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            {location.h1}
          </h1>
          <p className="mt-2 text-sm text-muted">{location.county}</p>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {location.heroIntro}
          </p>
          <div className="mt-8">
            <EstimateAndPhone location={location} position="hero" />
          </div>
        </div>
        {hero ? (
          <CaptionedFigure
            src={hero.src}
            alt={hero.alt}
            caption={hero.caption}
            aspectClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 44vw"
            priority
          />
        ) : null}
      </div>
    </section>
  );
}

export function LocationHeroGallery({ location }: { location: LocationPage }) {
  return (
    <>
      <LocationHeroEditorial location={location} />
      <section className="border-b border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {galleryImages(location).map((image) => (
            <CaptionedFigure
              key={`${image.src}-${image.role}`}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              aspectClassName="aspect-[4/3]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export function LocationIntro({
  location,
  withImage = true,
  split = false,
}: {
  location: LocationPage;
  withImage?: boolean;
  split?: boolean;
}) {
  const photo = imageByRole(location, "intro") ?? imageByRole(location, "gallery");
  const copy = (
    <div>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        JUNK REMOVAL IN {location.name.toUpperCase()}
      </h2>
      <RichTextBlock paragraphs={location.localIntro} className="mt-4 space-y-4 leading-relaxed text-muted" />
    </div>
  );

  if (split && photo) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        {copy}
        <CaptionedFigure
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
        />
      </div>
    );
  }

  return (
    <div>
      {copy}
      {withImage && photo ? (
        <div className="mt-8">
          <CaptionedFigure
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            aspectClassName="aspect-[16/9]"
            sizes="(max-width: 1024px) 100vw, 760px"
          />
        </div>
      ) : null}
    </div>
  );
}

export function LocationServices({
  location,
  visual = false,
  compact = false,
}: {
  location: LocationPage;
  visual?: boolean;
  compact?: boolean;
}) {
  const services = location.featuredServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const photo = imageByRole(location, "services");

  return (
    <div>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        SERVICES IN {location.name.toUpperCase()}
      </h2>
      <RichText
        text={location.servicesIntro}
        className="mt-4 leading-relaxed text-muted"
      />
      {compact && photo ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ul className="space-y-3">
            {services.map((service) => (
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
          <CaptionedFigure
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
          />
        </div>
      ) : (
        <ul
          className={`mt-6 grid gap-3 ${visual ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}`}
                className="flex h-full items-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-white transition-colors hover:border-bright hover:text-bright"
              >
                <Check className="size-4 shrink-0 text-bright" aria-hidden />
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link
        href="/services"
        className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
      >
        Browse all services →
      </Link>
    </div>
  );
}

export function LocationMidCta({ location }: { location: LocationPage }) {
  return (
    <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] px-6 py-8 glow-border sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
        Serving {location.name}
      </p>
      <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        {location.midCtaTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-muted">{location.midCtaDescription}</p>
      <div className="mt-6">
        <FreeEstimateButton
          ctaPosition="mid_page"
          locationSlug={location.slug}
          pageType="location_page"
        >
          Get a Free Estimate
        </FreeEstimateButton>
      </div>
    </div>
  );
}

export function LocationCleanouts({
  location,
  split = false,
  band = false,
}: {
  location: LocationPage;
  split?: boolean;
  band?: boolean;
}) {
  const photo = imageByRole(location, "cleanout");
  const copy = (
    <div>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        {location.cleanoutHeading.toUpperCase()}
      </h2>
      <RichTextBlock
        paragraphs={location.cleanoutBody}
        className="mt-4 space-y-4 leading-relaxed text-muted"
      />
    </div>
  );

  if (band && photo) {
    return (
      <div>
        <CaptionedFigure
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
          aspectClassName="aspect-[21/9] min-h-48"
          className="mb-8"
          sizes="100vw"
        />
        {copy}
      </div>
    );
  }

  if (split && photo) {
    return (
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {copy}
        <CaptionedFigure
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
        />
      </div>
    );
  }

  return copy;
}

export function LocationNearby({
  location,
  compact = false,
  heading = true,
}: {
  location: LocationPage;
  compact?: boolean;
  heading?: boolean;
}) {
  const nearby = getNearbyLocations(location);
  if (!nearby.length) return null;

  return (
    <div>
      {heading ? (
        <>
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            JUNK COMMAND NEAR {location.name.toUpperCase()}
          </h2>
          <p className="mt-4 text-muted">
            Serving {location.name} and nearby communities
          </p>
        </>
      ) : null}
      <ul
        className={`${heading ? "mt-6" : ""} ${compact ? "flex flex-wrap gap-2" : "grid gap-3 sm:grid-cols-2"}`}
      >
        {nearby.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/service-areas/${item.slug}`}
              className={
                compact
                  ? "inline-flex rounded-[2px] border border-[rgba(0,135,255,0.3)] px-3 py-2 text-sm font-semibold text-white hover:border-bright hover:text-bright"
                  : "flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
              }
            >
              {compact ? null : (
                <MapPin className="size-4 shrink-0 text-bright" aria-hidden />
              )}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LocationMap({ location }: { location: LocationPage }) {
  const geo = getLocationGeo(location.slug);
  const searchName = geo?.searchName ?? location.name;

  return (
    <div>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        JUNK REMOVAL NEAR {searchName.toUpperCase()}
      </h2>
      <p className="mt-3 text-sm text-muted">
        Coverage map for junk removal near {searchName}
        {geo?.zips?.length ? ` (${geo.zips.join(", ")})` : ""}. Junk Command is
        based in Port Huron and comes to your property — this is not a second
        storefront.
      </p>
      <div className="mt-6">
        <GoogleMapsEmbed
          query={`junk removal near ${searchName} MI`}
          label={`Junk Command junk removal near ${searchName}, Michigan`}
          zoom={location.isCounty ? 9 : 12}
          lat={geo?.latitude}
          lng={geo?.longitude}
        />
      </div>
    </div>
  );
}

export function LocationReviews({ location }: { location: LocationPage }) {
  const cityReviews = getReviewsByCity(location.slug);
  const reviews =
    cityReviews.length >= 2 ? cityReviews.slice(0, 3) : getFeaturedReviews(3);
  const geo = getLocationGeo(location.slug);
  const searchName = geo?.searchName ?? location.name;

  return (
    <div>
      {reviews.length ? (
        <>
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            REVIEWS FROM THE BLUE WATER AREA
          </h2>
          <p className="mt-3 text-sm text-muted">
            Real Junk Command reviews. We do not invent local testimonials for{" "}
            {location.name}.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </>
      ) : null}
      <div className={reviews.length ? "mt-8" : undefined}>
        <GoogleReviewCta placeName={searchName} />
      </div>
    </div>
  );
}

export function LocationFaqs({
  location,
  narrow = false,
}: {
  location: LocationPage;
  narrow?: boolean;
}) {
  return (
    <div className={narrow ? "max-w-3xl" : undefined}>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        {location.name.toUpperCase()} FAQS
      </h2>
      <div className="mt-6">
        <FaqAccordion items={location.faqs} idPrefix={location.slug} />
      </div>
    </div>
  );
}

export function LocationFinalCta({ location }: { location: LocationPage }) {
  return (
    <section className="border-t border-[rgba(0,135,255,0.25)] bg-[#080B0F] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-5xl">
          READY TO GET THAT JUNK GONE?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Don&apos;t spend another weekend staring at it. Send Junk Command a few
          photos and get a free estimate for junk removal in {location.name},
          Michigan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EstimateAndPhone
            location={location}
            position="final"
            estimateLabel="Get a Free Estimate"
            phoneLabel={`Call / Text Junk Command`}
          />
        </div>
      </div>
    </section>
  );
}
