import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PricingCarousel } from "@/components/sections/PricingCarousel";
import { JunkRemovalServices } from "@/components/sections/JunkRemovalServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <PricingCarousel />
      <JunkRemovalServices />
      <HowItWorks />
      <QuoteForm />
      <WhyChooseUs />
      <ServiceAreaSection />
      <ServicesGrid />
      <FinalCTA />
    </SiteShell>
  );
}
