import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { GhlFormEmbed } from "@/components/forms/GhlFormEmbed";
import { LABOR_POOL } from "@/lib/constants";
import { getGhlLaborFormUrl } from "@/lib/ghl";

export const metadata: Metadata = buildPageMetadata({
  title: "Work With Junk Command | Flexible Junk Removal Labor Pool",
  description:
    "Want to make extra money helping Junk Command? Join the labor pool for flexible, part-time junk removal and hauling in Port Huron. We'll text you when work is available.",
  path: LABOR_POOL.href,
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: LABOR_POOL.label, href: LABOR_POOL.href },
];

export default function WorkWithJunkCommandPage() {
  const laborFormUrl = getGhlLaborFormUrl();

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />

      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Flexible Work
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            FLEXIBLE WORK WITH JUNK COMMAND
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Want to make some extra money helping Junk Command? Join the crew.
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-muted">
            <p>
              We&apos;re building a local network of dependable people who want
              flexible, part-time work helping with junk removal and hauling.
            </p>
            <p>
              No guaranteed hours. Work is offered when we have jobs available.
            </p>
            <p>
              Join the Junk Command Labor Pool and we&apos;ll text you when work
              becomes available.
            </p>
          </div>
          <div className="mt-8">
            <Button href="#join" showArrow>
              Join the Labor Pool
            </Button>
          </div>
        </div>
      </section>
      <TrustBar />

      <section
        id="join"
        className="scroll-mt-24 border-y border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            JOIN THE LABOR POOL
          </h2>
          <p className="mt-4 text-muted">
            Fill this out and we&apos;ll text you when junk removal and hauling
            work opens up.
          </p>
          <div className="mt-8">
            <GhlFormEmbed
              formUrl={laborFormUrl}
              formName="Labor Pool"
              title="Join the Junk Command Labor Pool"
              embedId="inline-labor-pool"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Join the Crew"
        title="READY TO WORK WITH JUNK COMMAND?"
        description="Join the labor pool — we'll text you when jobs are available. No guaranteed hours."
        primaryHref="#join"
        primaryLabel="Join the Labor Pool"
      />
    </SiteShell>
  );
}
