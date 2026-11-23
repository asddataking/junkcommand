import { QuoteForm } from "@/components/forms/QuoteForm";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import {
  LandingFeatureGrid,
  LandingRemovalCta,
} from "@/components/landing/LandingFeatureGrid";
import { LandingServiceAreas } from "@/components/landing/LandingServiceAreas";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingEndCta } from "@/components/landing/LandingEndCta";
import { LandingPhotoGallery } from "@/components/landing/LandingPhotoGallery";
import { TrustBar } from "@/components/sections/TrustBar";
import { MediaImage } from "@/components/ui/MediaImage";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BRAND } from "@/lib/constants";
import type { DeliveryPage } from "@/data/delivery";

export function DeliveryLandingContent({ page }: { page: DeliveryPage }) {
  const crossSells = [
    ...(page.removalCta ? [page.removalCta] : []),
    ...(page.crossSells ?? []),
  ];

  return (
    <>
      <LandingHero
        eyebrow={page.eyebrow}
        h1={page.h1}
        intro={page.intro}
        image={page.image}
        imageAlt={page.imageAlt}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: page.eyebrow, href: page.path },
        ]}
        ctas={[
          {
            label: page.primaryCta.label,
            href: page.primaryCta.href,
            showArrow: true,
          },
          { label: "Text Us", href: BRAND.smsHref, variant: "secondary" },
          { label: "Call Now", href: BRAND.phoneHref, variant: "ghost" },
        ]}
      />
      <TrustBar />
      {page.contextSection ? (
        <section className="border-b border-[rgba(0,135,255,0.15)] py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <BlurFade>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                {page.contextSection.title}
              </h2>
              <div className="mt-5 space-y-4 text-muted">
                {page.contextSection.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </BlurFade>
            {page.contextSection.image ? (
              <BlurFade delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)]">
                  <MediaImage
                    src={page.contextSection.image}
                    alt={
                      page.contextSection.imageAlt ??
                      page.contextSection.title
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            ) : null}
          </div>
        </section>
      ) : null}
      {page.audience?.length ? (
        <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              {page.audienceTitle ?? "WHO THIS IS FOR"}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {page.audience.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
                >
                  <h3 className="font-heading text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      {page.gallery?.length ? (
        <LandingPhotoGallery
          title={page.galleryTitle}
          intro={page.galleryIntro}
          images={page.gallery}
        />
      ) : null}
      <LandingHowItWorks
        steps={page.process}
        ctas={
          page.processCtas
            ? [
                {
                  label: "Get a Free Estimate",
                  href: "#quote",
                  showArrow: true,
                },
                { label: "Text Us", href: BRAND.smsHref, variant: "secondary" },
                { label: "Call Now", href: BRAND.phoneHref, variant: "ghost" },
              ]
            : undefined
        }
      />
      <LandingFeatureGrid
        title="WHAT WE HANDLE"
        features={page.features}
      />
      {page.packages?.length ? (
        <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              {page.packagesTitle ?? "STARTING ESTIMATES"}
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {page.packages.map((item) => (
                <li
                  key={item.name}
                  className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                    Starting estimate
                  </p>
                  <h3 className="mt-3 font-heading text-xl text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-display text-4xl tracking-[0.06em] text-bright">
                    {item.price}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.blurb}
                  </p>
                </li>
              ))}
            </ul>
            {page.packagesDisclaimer ? (
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
                {page.packagesDisclaimer}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}
      {page.notice ? (
        <section className="border-t border-[rgba(0,135,255,0.15)] py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6 sm:p-8">
              <h2 className="font-display text-2xl tracking-[0.06em] text-white sm:text-3xl">
                {page.noticeTitle ?? "Please note"}
              </h2>
              <p className="mt-3 max-w-3xl text-muted">{page.notice}</p>
            </div>
          </div>
        </section>
      ) : null}
      {crossSells.map((cta) => (
        <LandingRemovalCta
          key={cta.href + cta.title}
          title={cta.title}
          description={cta.description}
          href={cta.href}
          linkLabel={cta.linkLabel}
        />
      ))}
      <LandingServiceAreas intro={page.areasIntro} areas={page.areas} />
      <LandingFaq
        items={page.faqs}
        idPrefix={page.slug}
        relatedLinks={page.relatedLinks}
      />
      <QuoteForm
        title={page.formTitle}
        description={page.formDescription}
        instructions={page.formInstructions}
        embedForm={page.formEmbed ?? false}
        pageType={page.pageType ?? page.slug}
      />
      <LandingEndCta
        title={page.endCtaTitle}
        description={page.endCtaDescription}
        primaryLabel={page.endCtaLabel ?? page.primaryCta.label}
      />
    </>
  );
}
