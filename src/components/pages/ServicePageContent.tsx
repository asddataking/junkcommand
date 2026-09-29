import Link from "next/link";
import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/data/services";
import { SERVICE_LONGFORM } from "@/data/service-longform";
import { pagesInGroup } from "@/data/indexing";
import { CURBSIDE_START, FULL_SERVICE_START } from "@/data/curbside-pricing";
import { BRAND } from "@/lib/constants";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { SidebarCta } from "@/components/shared/SidebarCta";
import { ServiceLinkCard } from "@/components/shared/ServiceLinkCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { MediaImage } from "@/components/ui/MediaImage";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { PhoneLink } from "@/components/forms/PhoneLink";

const AREA_PAGES = pagesInGroup("areas");

export function ServicePageContent({ service }: { service: Service }) {
  const related = getRelatedServices(service);
  const longform = SERVICE_LONGFORM[service.slug] ?? [];

  return (
    <>
      <ServiceHero
        eyebrow={service.eyebrow}
        h1={service.h1}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        startingPrice={service.startingPrice}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: service.title, href: `/${service.slug}` },
        ]}
      />
      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            {longform.length > 0 ? (
              <div>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  {service.title.toUpperCase()} IN PORT HURON
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                  {longform.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  WHY CHOOSE JUNK COMMAND
                </h2>
                <p className="mt-4 text-muted">{service.description}</p>
              </div>
            )}

            <ul className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)]">
              <MediaImage
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                HOW PRICING WORKS
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Junk Command quotes {service.shortTitle.toLowerCase()} jobs by
                how much space the load takes in the truck, plus access. Curbside
                Command starts at ${CURBSIDE_START} when qualifying items are
                already outside. Full-service Command starts at $
                {FULL_SERVICE_START} when we carry items out of the home or
                garage. Photos get you a free estimate. You approve the price
                before we load.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <FreeEstimateButton
                  ctaPosition={`${service.slug}_pricing`}
                  pageType="service_page"
                >
                  Get a Free Estimate
                </FreeEstimateButton>
                <PhoneLink
                  ctaPosition={`${service.slug}_pricing_phone`}
                  pageType="service_page"
                  className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.55)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-bright hover:bg-[rgba(7,135,255,0.08)]"
                >
                  Call {BRAND.phone}
                </PhoneLink>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                HOW IT WORKS
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-3">
                {service.process.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
                  >
                    <span className="font-display text-3xl text-bright">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-heading text-lg text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <CtaBanner
              title={`NEED ${service.shortTitle.toUpperCase()} GONE?`}
              description={`Junk Command removes ${service.shortTitle.toLowerCase()} across Port Huron and St. Clair County. Get your free estimate now.`}
              className="border-x border-[rgba(0,135,255,0.25)]"
              ctaPosition={`${service.slug}_mid`}
              pageType="service_page"
            />

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                WHAT WE TAKE
              </h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.whatWeTake.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="size-1.5 rounded-full bg-bright" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Full item list:{" "}
                <Link href="/what-we-take" className="text-bright hover:text-white">
                  what we take
                </Link>
                . Light commercial loads:{" "}
                <Link
                  href="/commercial-junk-removal"
                  className="text-bright hover:text-white"
                >
                  commercial junk removal
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                {service.title.toUpperCase()} FAQS
              </h2>
              <div className="mt-6">
                <FaqAccordion items={service.faqs} idPrefix={service.slug} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SidebarCta
              title={`${service.shortTitle} Quote`}
              description="Send photos for a fast, accurate estimate — or call now."
              pageType="service_page"
            />
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
              <h2 className="font-display text-xl tracking-[0.08em] text-white">
                SERVICE AREAS
              </h2>
              <ul className="mt-4 space-y-2">
                {AREA_PAGES.map((city) => (
                  <li key={city.path}>
                    <Link
                      href={city.path}
                      className="text-sm text-muted transition-colors hover:text-bright"
                    >
                      Junk Removal in {city.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              RELATED SERVICES
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceLinkCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="BOOK YOUR PICKUP TODAY"
        ctaPosition={`${service.slug}_bottom`}
        pageType="service_page"
      />
    </>
  );
}
