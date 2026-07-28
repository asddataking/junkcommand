import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <QuoteForm />
      <WhyChooseUs />
      <ReviewsCarousel />
      <ServiceAreas />
      <FinalCTA />
    </SiteShell>
  );
}
