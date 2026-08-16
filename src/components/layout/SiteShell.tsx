import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { StickyQuoteButton } from "@/components/layout/StickyQuoteButton";
import { EstimateModalProvider } from "@/components/forms/EstimateModalProvider";

export function SiteShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <EstimateModalProvider>
      <Header />
      <main className={`flex-1 pb-20 md:pb-0 ${className}`}>{children}</main>
      <Footer />
      <MobileActionBar />
      <StickyQuoteButton />
    </EstimateModalProvider>
  );
}
