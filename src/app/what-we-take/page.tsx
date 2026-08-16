import Link from "next/link";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { SERVICES } from "@/data/services";
import { BRAND, SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "What We Take", href: "/what-we-take" },
];

const CATEGORIES = [
  {
    title: "Furniture & mattresses",
    href: "/furniture-removal",
    items: ["Sofas and sectionals", "Mattresses and box springs", "Dressers, desks, and tables", "Recliners and bed frames"],
  },
  {
    title: "Appliances",
    href: "/appliance-removal",
    items: ["Refrigerators and freezers", "Washers and dryers", "Stoves and dishwashers", "Window AC units"],
  },
  {
    title: "Cleanouts",
    href: "/garage-cleanout",
    items: ["Garage and basement piles", "Estate and foreclosure contents", "Storage unit leftovers", "Rental turnovers"],
  },
  {
    title: "Yard, demo & debris",
    href: "/construction-debris-removal",
    items: ["Construction debris", "Yard waste and brush", "Shed and deck tear-down debris", "Hot tubs"],
  },
  {
    title: "Electronics",
    href: "/electronics-recycling",
    items: ["TVs and monitors", "Computers and printers", "Exercise equipment", "Misc. household junk"],
  },
] as const;

const pageFaqs = [
  {
    question: "What junk does Junk Command take in Port Huron?",
    answer:
      "We haul household furniture, appliances, mattresses, garage and estate cleanout debris, yard waste, construction leftovers, electronics, and most non-hazardous items two people can carry. Send photos to 810-242-0429 if you are unsure.",
  },
  {
    question: "Do I have to move items to the curb?",
    answer:
      "No. Full-service jobs include carrying items out of the home, garage, or basement. Curbside Command is the lower-priced option when items are already outside.",
  },
  {
    question: "What will you not take?",
    answer:
      "Hazardous waste, liquids, paint, oil, gasoline, propane tanks, asbestos, and medical waste. See /what-we-dont-take or text a photo and we will tell you before we come.",
  },
];

export const metadata = buildPageMetadata({
  title: "What We Take | Junk Removal Items Port Huron | Junk Command",
  description:
    "Junk Command hauls furniture, appliances, mattresses, garage cleanouts, construction debris, and electronics in Port Huron and the Blue Water Area. See what we take.",
  path: "/what-we-take",
});

export default function WhatWeTakePage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, { id: `${SITE_URL}/what-we-take#faq` }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Item List
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            WHAT WE TAKE
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            If two people can lift it and it is not hazardous, Junk Command can
            usually haul it from Port Huron and the Blue Water Area. You point.
            We load, donate or recycle when we can, and leave the space broom-clean.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeEstimateButton ctaPosition="what_we_take_hero" pageType="what_we_take">
              Send Photos for a Price
            </FreeEstimateButton>
            <Button href="/what-we-dont-take" variant="secondary">
              See what we don&apos;t take
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
            >
              <h2 className="font-display text-2xl tracking-[0.08em] text-white">
                <Link href={category.href} className="hover:text-bright">
                  {category.title}
                </Link>
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2 text-white">
                    <Check className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white">
            SERVICE PAGES
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Every item type below has its own Port Huron landing page with
            pricing notes, process, and FAQs.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="block rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-[#080B0F] px-4 py-3 text-sm font-semibold text-white hover:border-bright hover:text-bright"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Not sure? Text a photo to {BRAND.phone} before you drag anything
            outside.
          </p>
        </div>
      </section>

      <CtaBanner
        title="GOT A PILE READY?"
        description="Send photos for a confirmed price — curbside from $99 in Port Huron."
      />
    </SiteShell>
  );
}
