import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ChatWidgetDock } from "@/components/layout/ChatWidgetDock";
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
      <main className={`flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0 ${className}`}>{children}</main>
      <Footer />
      <MobileActionBar />
      <ChatWidgetDock />
      <StickyQuoteButton />
    </EstimateModalProvider>
  );
}
