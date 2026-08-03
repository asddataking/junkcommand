import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { FAQ_CATEGORIES, FAQS } from "@/data/faqs";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "FAQs", href: "/faqs" },
];

export const metadata = buildPageMetadata({
  title: "Junk Removal FAQs Port Huron MI | Junk Command",
  description:
    "Answers to 50+ junk removal questions — pricing, scheduling, what we take, service areas, and how Junk Command works in Port Huron & Southeast Michigan.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(FAQS, {
            id: "https://www.getjunkcommand.com/faqs#faq",
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Knowledge Base
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Everything you need to know about Junk Command pricing, scheduling,
            what we haul, and where we serve. Still stuck? Call{" "}
            <a
              href={BRAND.phoneHref}
              className="font-semibold text-bright hover:text-white"
            >
              {BRAND.phone}
            </a>{" "}
            — a real person will help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-online" showArrow>
              Get My Free Quote
            </Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-14 px-4 sm:px-6 lg:px-8">
          {FAQ_CATEGORIES.map((category) => {
            const items = FAQS.filter((f) => f.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id} id={category.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                  {category.label}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
                  {category.label.toUpperCase()}
                </h2>
                <div className="mt-6">
                  <FaqAccordion
                    items={items}
                    idPrefix={`faq-${category.id}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="STILL HAVE A QUESTION?"
        description="Call or text Junk Command — we will walk you through pricing, timing, and what we can haul."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </SiteShell>
  );
}
