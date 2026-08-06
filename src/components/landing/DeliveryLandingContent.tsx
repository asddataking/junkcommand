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
      {page.gallery?.length ? (
        <LandingPhotoGallery images={page.gallery} />
      ) : null}
      <LandingHowItWorks steps={page.process} />
      <LandingFeatureGrid features={page.features} />
      {page.removalCta ? (
        <LandingRemovalCta
          title={page.removalCta.title}
          description={page.removalCta.description}
          href={page.removalCta.href}
          linkLabel={page.removalCta.linkLabel}
        />
      ) : null}
      <LandingServiceAreas intro={page.areasIntro} areas={page.areas} />
      <LandingFaq
        items={page.faqs}
        idPrefix={page.slug}
        relatedLinks={page.relatedLinks}
      />
      <QuoteForm
        title={page.formTitle}
        description={page.formDescription}
      />
      <LandingEndCta
        title={page.endCtaTitle}
        description={page.endCtaDescription}
      />
    </>
  );
}
