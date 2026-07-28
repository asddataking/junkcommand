import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { CrewCards } from "@/components/pages/CrewCards";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getPersonSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Meet the Crew", href: "/meet-the-crew" },
];

export const metadata = buildPageMetadata({
  title: "Meet the Crew | Junk Command Port Huron",
  description:
    "Meet Dan (Owner/Operator), Gage (Crew Lead), and Luna the Blue Heeler — the Junk Command team hauling junk across Port Huron & Southeast Michigan.",
  path: "/meet-the-crew",
  image: "/images/dan-gage-luna.webp",
  imageAlt: "Junk Command crew — Dan, Gage, and Luna",
});

export default function MeetTheCrewPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema(crumbs),
          getPersonSchema({
            name: "Dan",
            jobTitle: "Owner / Operator",
            description:
              "Veteran owner and operator of Junk Command. Leads scheduling, pricing, and on-site junk removal across Port Huron and St. Clair County.",
            image: "/images/crew/dan.webp",
          }),
          getPersonSchema({
            name: "Gage",
            jobTitle: "Crew Lead",
            description:
              "Crew lead at Junk Command responsible for load planning, safe hauling, and broom-clean finishes on every junk removal job.",
            image: "/images/crew/gage.webp",
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            The People Behind the Truck
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            MEET THE CREW
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Junk Command is a small, mission-focused team. When you book with
            us, you know who is showing up — a veteran-owned family crew that
            treats your property like it is on our own block.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-online" showArrow>
              Book This Crew
            </Button>
            <Button href={BRAND.phoneHref} variant="secondary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CrewCards />
        </div>
      </section>

      <CtaBanner
        title="READY FOR A CREW THAT SHOWS UP?"
        description="Call, text photos, or book online — Junk Command will take it from there."
      />
    </SiteShell>
  );
}
