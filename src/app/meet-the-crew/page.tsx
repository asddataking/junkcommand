import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { CrewCards } from "@/components/pages/CrewCards";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
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
});

export default function MeetTheCrewPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
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
            <Button href="/#quote" showArrow>
              Book This Crew
            </Button>
            <Button href={BRAND.phoneHref} variant="secondary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="border-b border-[rgba(0,135,255,0.15)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F]">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <MediaImage
                src="/images/dan-gage-luna.webp"
                alt="Dan and Gage with Luna the Blue Heeler standing with the Junk Command truck and trailer"
                fill
                priority
                className="object-cover object-[center_40%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/25 to-transparent" />
              <BorderBeam
                size={140}
                duration={9}
                colorFrom="#18a0ff"
                colorTo="#0787ff"
                borderWidth={1.5}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bright">
                  Dan · Gage · Luna
                </p>
                <h2 className="mt-1 font-display text-3xl tracking-[0.08em] text-white sm:text-4xl">
                  THE JUNK COMMAND CREW
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                  Owner/Operator Dan and Crew Lead Gage — with Luna, our Blue
                  Heeler — ready to take command of your clutter across Port
                  Huron and St. Clair County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
