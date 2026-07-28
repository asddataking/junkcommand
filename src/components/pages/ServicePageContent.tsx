import Link from "next/link";
import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/data/services";
import { getFeaturedReviews } from "@/data/reviews";
import { CITIES } from "@/data/cities";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { SidebarCta } from "@/components/shared/SidebarCta";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { ServiceLinkCard } from "@/components/shared/ServiceLinkCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";

export function ServicePageContent({ service }: { service: Service }) {
  const related = getRelatedServices(service);
  const reviews = getFeaturedReviews(3);
  const areaSample = CITIES.filter((c) => !c.isCounty).slice(0, 8);

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
          { name: "Services", href: "/services" },
          { name: service.title, href: `/${service.slug}` },
        ]}
      />
      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                WHY CHOOSE JUNK COMMAND
              </h2>
              <p className="mt-4 text-muted">{service.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
            </div>

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
              description={`Junk Command removes ${service.shortTitle.toLowerCase()} fast across Southeast Michigan. Get your free quote now.`}
              className="border-x border-[rgba(0,135,255,0.25)]"
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
            </div>

            {reviews.length > 0 ? (
              <div>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  CUSTOMER REVIEWS
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/reviews" variant="secondary">
                    Read More Reviews
                  </Button>
                </div>
              </div>
            ) : null}

            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                {service.title.toUpperCase()} FAQS
              </h2>
              <div className="mt-6">
                <FaqAccordion items={service.faqs} idPrefix={service.slug} />
              </div>
              <p className="mt-4 text-sm text-muted">
                More answers on our{" "}
                <Link href="/faqs" className="text-bright hover:text-white">
                  full FAQ page
                </Link>{" "}
                and{" "}
                <Link href="/pricing" className="text-bright hover:text-white">
                  pricing guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <SidebarCta
              title={`${service.shortTitle} Quote`}
              description="Send photos for a fast, accurate estimate — or call now."
            />
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
              <h2 className="font-display text-xl tracking-[0.08em] text-white">
                SERVICE AREAS
              </h2>
              <ul className="mt-4 space-y-2">
                {areaSample.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="text-sm text-muted transition-colors hover:text-bright"
                    >
                      Junk Removal in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/service-areas"
                className="mt-4 inline-block text-sm font-semibold text-bright hover:text-white"
              >
                View all areas →
              </Link>
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

      <CtaBanner title="BOOK YOUR PICKUP TODAY" />
    </>
  );
}
