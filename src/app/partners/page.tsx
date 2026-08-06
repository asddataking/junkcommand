import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingFormSection } from "@/components/landing/LandingFormSection";
import { LandingEndCta } from "@/components/landing/LandingEndCta";
import { PartnerApplicationForm } from "@/components/forms/PartnerApplicationForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLandingServiceSchema,
} from "@/lib/schema";
import { BRAND, SITE_URL } from "@/lib/constants";
import {
  PARTNER_BENEFITS,
  PARTNER_HUB_FAQS,
  PARTNER_HUB_SECTIONS,
  PARTNER_INDUSTRIES,
  PARTNER_TRUST_SIGNALS,
} from "@/data/partners";

export const metadata: Metadata = buildPageMetadata({
  title: "Partner Program | Junk Removal Referral Partners | Junk Command",
  description:
    "Become a Junk Command referral partner in Port Huron. Reliable junk removal & hauling for realtors, property managers, contractors, and more. Apply today.",
  path: "/partners",
  image: "/images/junk-command-hero.webp",
  imageAlt: "Junk Command partner program for Blue Water Area businesses",
});

export const revalidate = 86400;

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Partners", href: "/partners" },
];

export default function PartnersPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getLandingServiceSchema({
            name: "Junk Command Partner Program",
            serviceType: "Junk Removal Referral Partnership",
            description:
              "Referral partner program for realtors, property managers, contractors, and service professionals needing reliable junk removal in Port Huron and the Blue Water Area.",
            path: "/partners",
            image: "/images/junk-command-hero.webp",
          }),
          getFaqSchema(PARTNER_HUB_FAQS, {
            id: `${SITE_URL}/partners#faq`,
          }),
          getBreadcrumbSchema(crumbs),
        ]}
      />

      <LandingHero
        eyebrow="Business Development"
        h1="Become a Junk Command Referral Partner"
        intro="Reliable Junk Removal & Hauling For Your Customers — veteran-owned, locally operated in Port Huron, with photo estimates, online booking, and fast response your clients can count on."
        image="/images/junk-command-hero.webp"
        imageAlt="Junk Command crew ready to support partner referrals in Port Huron"
        breadcrumbs={crumbs}
        ctas={[
          {
            label: "Apply to Partner",
            href: "#partner-apply",
            showArrow: true,
          },
          { label: "Text Us", href: BRAND.smsHref, variant: "secondary" },
          { label: "Call Now", href: BRAND.phoneHref, variant: "ghost" },
        ]}
      />
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            BENEFITS OF PARTNERING
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {PARTNER_BENEFITS.map((benefit) => (
              <li
                key={benefit.title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
              >
                <h3 className="font-heading text-lg text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{benefit.description}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3">
            {PARTNER_TRUST_SIGNALS.map((signal) => (
              <li
                key={signal}
                className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            WHO WE PARTNER WITH
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            From realtors and property managers to roofers, plumbers, and senior
            move managers — if your customers need junk gone or large items
            hauled, Junk Command is ready.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_HUB_SECTIONS.map((section) => {
              const dedicated = PARTNER_INDUSTRIES.some(
                (item) => item.slug === section.slug,
              );
              const linkHref = dedicated
                ? `/partners/${section.slug}`
                : "#partner-apply";

              return (
                <li
                  key={section.slug}
                  id={section.slug}
                  className="scroll-mt-28 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
                >
                  <h3 className="font-heading text-lg text-white">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-semibold text-white">
                      Typical situations:{" "}
                    </span>
                    {section.situations}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    <span className="font-semibold text-white">
                      How we help:{" "}
                    </span>
                    {section.howWeHelp}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {PARTNER_TRUST_SIGNALS.slice(0, 4).map((signal) => (
                      <li
                        key={signal}
                        className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted"
                      >
                        <Check className="size-3.5 text-bright" aria-hidden />
                        {signal}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={linkHref}
                    className="mt-4 inline-flex text-sm font-semibold text-bright hover:text-white"
                  >
                    {dedicated
                      ? `Partner as ${section.title}`
                      : "Apply to partner"}{" "}
                    →
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-[rgba(0,135,255,0.15)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="max-w-2xl text-sm text-muted">
            Looking for{" "}
            <Link href="/services" className="text-bright hover:text-white">
              junk removal
            </Link>
            ,{" "}
            <Link
              href="/garage-cleanout"
              className="text-bright hover:text-white"
            >
              garage cleanouts
            </Link>
            ,{" "}
            <Link
              href="/furniture-delivery"
              className="text-bright hover:text-white"
            >
              furniture delivery
            </Link>
            , or{" "}
            <Link
              href="/garage-sale-trail"
              className="text-bright hover:text-white"
            >
              garage sale trail delivery
            </Link>
            ? Your customers can book those too —{" "}
            <Link href="/contact" className="text-bright hover:text-white">
              contact Junk Command
            </Link>
            .
          </p>
          <Button href="#partner-apply" showArrow>
            Apply Now
          </Button>
        </div>
      </section>

      <LandingFaq
        title="PARTNER PROGRAM FAQS"
        items={PARTNER_HUB_FAQS}
        idPrefix="partners-hub"
        relatedLinks={[
          { label: "Junk Removal", href: "/services" },
          { label: "Garage Cleanouts", href: "/garage-cleanout" },
          { label: "Furniture Delivery", href: "/furniture-delivery" },
          { label: "Garage Sale Trail", href: "/garage-sale-trail" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <LandingFormSection
        id="partner-apply"
        title="PARTNER APPLICATION"
        description="Tell us about your business and estimated referral volume. We will follow up to set up simple referral coordination across Port Huron and the Blue Water Area."
      >
        <PartnerApplicationForm />
      </LandingFormSection>

      <LandingEndCta
        title="READY TO REFER WITH CONFIDENCE?"
        description="Join the Junk Command Partner Program — reliable junk removal and hauling for your customers."
        primaryHref="#partner-apply"
        primaryLabel="Become a Partner"
      />
    </SiteShell>
  );
}
