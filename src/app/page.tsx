import { SiteShell } from "@/components/layout/SiteShell";
import { HomepageBookingProvider } from "@/components/home/HomepageBookingContext";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PricingCarousel } from "@/components/sections/PricingCarousel";
import { CommandLoadPricing } from "@/components/sections/CommandLoadPricing";
import { JunkRemovalServices } from "@/components/sections/JunkRemovalServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HomepageFaq } from "@/components/sections/HomepageFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomepageFaqs } from "@/data/faqs";
import { SITE_URL } from "@/lib/constants";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getHowToSchema,
  getServiceCatalogSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getServiceCatalogSchema(),
          getHowToSchema(),
          getFaqSchema(getHomepageFaqs(), { id: `${SITE_URL}/#faq` }),
          getBreadcrumbSchema([{ name: "Home", href: "/" }]),
        ]}
      />
      <HomepageBookingProvider>
        <Hero />
        <TrustBar />
        <PricingCarousel />
        <CommandLoadPricing />
        <JunkRemovalServices />
        <HowItWorks />
        <QuoteForm />
        <WhyChooseUs />
        <ServiceAreaSection />
        <ServicesGrid />
        <HomepageFaq />
        <FinalCTA />
      </HomepageBookingProvider>
    </SiteShell>
  );
}
