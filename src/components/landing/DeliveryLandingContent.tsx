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
