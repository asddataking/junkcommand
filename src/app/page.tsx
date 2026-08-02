import { SiteShell } from "@/components/layout/SiteShell";
import { HomepageBookingProvider } from "@/components/home/HomepageBookingContext";
import { Hero } from "@/components/sections/Hero";
import { HowCurbsideWorks } from "@/components/sections/HowCurbsideWorks";
import { CommandPricing } from "@/components/sections/CommandPricing";
import { PriceEstimator } from "@/components/sections/PriceEstimator";
import { CommandLoadPricing } from "@/components/sections/CommandLoadPricing";
import { CommonItemPricing } from "@/components/sections/CommonItemPricing";
import { SpecialtyPricingNotice } from "@/components/sections/SpecialtyPricingNotice";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { BlueWaterAreaSection } from "@/components/sections/BlueWaterAreaSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MeetTheCrewHome } from "@/components/sections/MeetTheCrewHome";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HomepageFaq } from "@/components/sections/HomepageFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <SiteShell>
      <HomepageBookingProvider>
        <Hero />
        <HowCurbsideWorks />
        <CommandPricing />
        <PriceEstimator />
        <CommandLoadPricing />
        <CommonItemPricing />
        <SpecialtyPricingNotice />
        <QuoteForm />
        <ServiceAreaSection />
        <BlueWaterAreaSection />
        <WhyChooseUs />
        <MeetTheCrewHome />
        <ServicesGrid />
        <HomepageFaq />
        <FinalCTA />
      </HomepageBookingProvider>
    </SiteShell>
  );
}
