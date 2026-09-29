import type { Metadata } from "next";
import { DollarSign, Dumbbell, Utensils } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { GhlFormEmbed } from "@/components/forms/GhlFormEmbed";
import { LABOR_POOL, SITE_URL } from "@/lib/constants";
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

const pageFaqs = [
  {
    question: "Is this a full-time job in Port Huron?",
    answer:
      "No. The labor pool is flexible part-time work. There are no guaranteed hours. We text you when junk removal jobs are available.",
  },
  {
    question: "What does the work pay?",
    answer:
      "Pay is $18 an hour when you work a job. Lunches are paid on work days. A gym membership is covered after you finish 5 jobs.",
  },
  {
    question: "Where do jobs happen?",
    answer:
      "Jobs are junk removal and hauling around Port Huron and St. Clair County — furniture, appliances, garages, and mixed loads. The crew meets at the job. This is a service-area business, not a shop with a public street address.",
  },
];

export default function WorkWithJunkCommandPage() {
  const laborFormUrl = getGhlLaborFormUrl();

  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, { id: `${SITE_URL}${LABOR_POOL.href}#faq` }),
        ]}
      />

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
              We&apos;re building a local network of dependable people in Port
              Huron and St. Clair County who want flexible, part-time work
              helping with junk removal and hauling — furniture, appliances,
              garage cleanouts, and mixed loads on a veteran-owned crew.
            </p>
            <p>
              No guaranteed hours. Work is offered when we have jobs available.
              Join the Junk Command Labor Pool and we&apos;ll text you when work
              becomes available. Pay is $18 an hour when you work a job. Lunches
              are paid on work days. A gym membership is covered after you finish
              5 jobs.
            </p>
            <p>
              This is physical work: lifting, carrying, and loading a trailer in
              Port Huron weather. You show up on time, treat the customer&apos;s
              property with respect, and finish the pile. We are a service-area
              business based in Port Huron, MI — there is no public street
              address on this page because the crew meets at the job.
            </p>
            <p>
              If you need junk hauled instead of extra work, call{" "}
              <a href="tel:8102420429" className="text-bright hover:text-white">
                810-242-0429
              </a>{" "}
              or request a free estimate from the homepage. Curbside junk pickup
              starts at $99 and full-service starts at $129, quoted by volume
              from photos.
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

      <section className="border-b border-[rgba(0,135,255,0.2)] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            LABOR POOL FAQS
          </h2>
          <div className="mt-6">
            <FaqAccordion items={pageFaqs} idPrefix="labor-pool" />
          </div>
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
