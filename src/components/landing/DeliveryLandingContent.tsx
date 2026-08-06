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
import { TrustBar } from "@/components/sections/TrustBar";
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              {page.contextSection.title}
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-muted">
              {page.contextSection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
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
