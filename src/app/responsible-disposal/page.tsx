import { Recycle, HeartHandshake, LandPlot } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Responsible Disposal", href: "/responsible-disposal" },
];

const pageFaqs = [
  {
    question: "Does Junk Command donate or recycle junk?",
    answer:
      "When items are clean, structurally sound, and accepted by local outlets, we route them toward donation. Scrap metal, appliances, and electronics go to recycling channels when facilities will take them. The rest is disposed of legally.",
  },
  {
    question: "Can I get a donation receipt?",
    answer:
      "Donation receipts come from the receiving organization, not from Junk Command, and only when that outlet accepts the item and issues paperwork. Ask when you book if donation is a priority for the load.",
  },
  {
    question: "Where does the junk go?",
    answer:
      "It depends on the mix: donation partners, scrap and e-waste recyclers, and licensed transfer stations serving St. Clair County. We do not dump. Restricted hazardous materials stay with you or a licensed handler — see /what-we-dont-take.",
  },
];

export const metadata = buildPageMetadata({
  title: "Responsible Disposal & Recycling | Junk Command Port Huron",
  description:
    "Junk Command donates usable items, recycles scrap and electronics when outlets accept them, and uses licensed disposal for the rest in Port Huron and St. Clair County.",
  path: "/responsible-disposal",
});

export default function ResponsibleDisposalPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, {
            id: `${SITE_URL}/responsible-disposal#faq`,
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Donate · Recycle · Dispose
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            RESPONSIBLE DISPOSAL
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Hauling is only half the job. Junk Command sorts loads so usable
            furniture can be donated, metal and e-waste can be recycled, and
            true trash goes to licensed facilities — not a ditch off the
            expressway.
          </p>
          <div className="mt-8">
            <FreeEstimateButton
              ctaPosition="disposal_hero"
              pageType="responsible_disposal"
            >
              Get a Photo Quote
            </FreeEstimateButton>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: HeartHandshake,
              title: "Donate first",
              body: "Clean, sturdy furniture and household goods go to local donation partners when they are accepting. Torn, wet, or infested items cannot be donated.",
            },
            {
              icon: Recycle,
              title: "Recycle what we can",
              body: "Appliances, scrap metal, and electronics are routed to the right yards when St. Clair County outlets will take them. Refrigeration units may need special handling.",
            },
            {
              icon: LandPlot,
              title: "Legal disposal last",
              body: "What cannot be reused is dumped at licensed transfer stations. We do not take hazardous waste, paint, oil, or propane — those need a different channel.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
            >
              <item.icon className="size-6 text-bright" aria-hidden />
              <h2 className="mt-4 font-display text-2xl tracking-[0.08em] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white">
            DISPOSAL FAQS
          </h2>
          <div className="mt-6">
            <FaqAccordion items={pageFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="READY FOR A CLEAN HAUL?"
        description="Tell us if donation matters for your load. We will plan the route around what local outlets will actually accept."
      />
    </SiteShell>
  );
}
