import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <ServicesGrid />
        <HowItWorks />
        <QuoteForm />
        <WhyChooseUs />
        <ReviewsCarousel />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
