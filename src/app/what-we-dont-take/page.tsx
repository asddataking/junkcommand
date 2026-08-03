import { AlertTriangle, MessageSquare, Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "What We Don't Take", href: "/what-we-dont-take" },
];

const RESTRICTED_ITEMS = [
  "Hazardous waste",
  "Liquid chemicals",
  "Paint",
  "Oil",
  "Gasoline",
  "Propane tanks",
  "Asbestos",
  "Medical waste",
  "Other regulated materials",
] as const;

const pageFaqs = [
  {
    question: "What materials does Junk Command not accept?",
    answer:
      "We cannot accept hazardous waste, liquid chemicals, paint, oil, gasoline, propane tanks, asbestos, medical waste, or other regulated materials. If you're unsure, just ask—we're happy to help you find the proper disposal option.",
  },
  {
    question: "What should I do if I'm not sure about an item?",
    answer: `Text a photo to ${BRAND.phone} or include it in your quote request. We'll tell you whether we can haul it or point you to the right disposal option.`,
  },
];

export const metadata = buildPageMetadata({
  title: "What We Don't Take | Restricted Items | Junk Command",
  description:
    "Junk Command cannot accept hazardous waste, liquid chemicals, paint, oil, gasoline, propane tanks, asbestos, medical waste, or other regulated materials. Ask us if you're unsure.",
  path: "/what-we-dont-take",
});

export default function WhatWeDontTakePage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, {
            id: "https://www.getjunkcommand.com/what-we-dont-take#faq",
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Safety &amp; Compliance
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            WHAT WE DON&apos;T TAKE
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Most household junk, furniture, appliances, and cleanout debris are
            fair game. A few materials are restricted for crew safety and legal
            disposal rules.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#020305] text-bright">
                <AlertTriangle className="size-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-display text-2xl tracking-[0.08em] text-white sm:text-3xl">
                  RESTRICTED MATERIALS
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  We cannot accept hazardous waste, liquid chemicals, paint, oil,
                  gasoline, propane tanks, asbestos, medical waste, or other
                  regulated materials. If you&apos;re unsure, just ask—we&apos;re
                  happy to help you find the proper disposal option.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {RESTRICTED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-[#020305]/70 px-3 py-2.5 text-sm text-white"
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-bright"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              NOT SURE?
            </h2>
            <p className="text-muted">
              Text a photo before pickup day. We&apos;ll confirm what we can
              haul and help you point restricted items to the right local
              disposal channel.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={BRAND.smsHref} showArrow>
                <MessageSquare className="size-4" aria-hidden />
                Text Photos to {BRAND.phone}
              </Button>
              <Button href={BRAND.phoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden />
                Call {BRAND.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to clear the rest?"
        description="Send photos of your pile for a free, upfront quote on everything we can haul."
        primaryHref="/#quote"
        primaryLabel="Get My Free Quote"
      />
    </SiteShell>
  );
}
