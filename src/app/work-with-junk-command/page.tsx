import type { Metadata } from "next";
import { DollarSign, Dumbbell, Utensils } from "lucide-react";
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
  title: "Work With Junk Command | $18/hr Flexible Labor Pool",
  description:
    "Join the Junk Command labor pool — $18/hr, paid lunches on work days, gym membership after 5 jobs. Flexible part-time junk removal in Port Huron.",
  path: LABOR_POOL.href,
});

const PERKS = [
  {
    icon: DollarSign,
    title: "$18 an hour",
    detail: "Straight hourly pay when you work a job. No mystery rate.",
  },
  {
    icon: Dumbbell,
    title: "Gym membership",
    detail: "We cover it after you finish 5 jobs.",
  },
  {
    icon: Utensils,
    title: "Lunches paid",
    detail: "Eat on us the days you work.",
  },
] as const;

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
            Want extra money helping Junk Command? $18 an hour. Join the crew.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-semibold uppercase tracking-[0.12em] text-bright">
            $18/hr · Gym after 5 jobs · Lunches paid on work days
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
        id="perks"
        aria-labelledby="perks-heading"
        className="border-b border-[rgba(0,135,255,0.2)] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Perks
          </p>
          <h2
            id="perks-heading"
            className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl"
          >
            WHAT YOU GET
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Flexible, part-time labor on a veteran-owned junk crew. Show up,
            work the job, get paid.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {PERKS.map(({ icon: Icon, title, detail }) => (
              <li
                key={title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5 sm:p-6"
              >
                <Icon className="size-5 text-bright" aria-hidden />
                <h3 className="mt-4 font-display text-2xl tracking-[0.06em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
        description="Join the labor pool — $18/hr, paid lunches, gym after 5 jobs. We'll text you when work is available."
        primaryHref="#join"
        primaryLabel="Join the Labor Pool"
      />
    </SiteShell>
  );
}
