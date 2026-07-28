import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export function SiteShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main className={`flex-1 pb-20 md:pb-0 ${className}`}>{children}</main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
