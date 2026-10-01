import type { Metadata } from "next";
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
import { HomepageIndexSections } from "@/components/sections/HomepageIndexSections";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GoogleMapsListing } from "@/components/shared/GoogleMapsListing";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomepageFaqs } from "@/data/faqs";
import { SITE_URL } from "@/lib/constants";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getHowToSchema,
  getServiceCatalogSchema,
} from "@/lib/schema";

const HOME_TITLE =
  "Junk Removal Port Huron & St. Clair County, MI | Curbside Pickup From $99";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  openGraph: { title: HOME_TITLE },
  twitter: { title: HOME_TITLE },
};

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
        <HomepageIndexSections />
        <TrustBar />
        <PricingCarousel />
        <CommandLoadPricing />
        <JunkRemovalServices />
        <HowItWorks />
        <QuoteForm />
        <WhyChooseUs />
        <ServiceAreaSection />
        <GoogleMapsListing />
        <ServicesGrid />
        <HomepageFaq />
        <FinalCTA />
      </HomepageBookingProvider>
    </SiteShell>
  );
}
