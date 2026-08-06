import Link from "next/link";
import { Check } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingEndCta } from "@/components/landing/LandingEndCta";
import { PartnerApplicationForm } from "@/components/forms/PartnerApplicationForm";
import { LandingFormSection } from "@/components/landing/LandingFormSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { BRAND } from "@/lib/constants";
import {
  PARTNER_TRUST_SIGNALS,
  type PartnerIndustry,
} from "@/data/partners";

export function PartnerIndustryLayout({
  industry,
}: {
  industry: PartnerIndustry;
}) {
  return (
    <>
      <LandingHero
        eyebrow={industry.eyebrow}
        h1={industry.h1}
        intro={industry.intro}
        image="/images/junk-command-hero.webp"
        imageAlt={`Junk Command partner program for ${industry.shortTitle} in Port Huron`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Partners", href: "/partners" },
          { name: industry.shortTitle, href: `/partners/${industry.slug}` },
        ]}
        ctas={[
          {
            label: "Become a Partner",
            href: "#partner-apply",
            showArrow: true,
          },
          { label: "Text Us", href: BRAND.smsHref, variant: "secondary" },
          { label: "Call Now", href: BRAND.phoneHref, variant: "ghost" },
        ]}
      />
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              TYPICAL SITUATIONS
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.typicalSituations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-bright"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              HOW JUNK COMMAND HELPS
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.howWeHelp.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-bright"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            WHY PARTNERS CHOOSE US
          </h2>
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
          <p className="mt-6 text-sm text-muted">
            Explore the full{" "}
            <Link href="/partners" className="text-bright hover:text-white">
              Partner Program
            </Link>
            ,{" "}
            <Link href="/services" className="text-bright hover:text-white">
              junk removal services
            </Link>
            , or{" "}
            <Link href="/contact" className="text-bright hover:text-white">
              contact us
            </Link>{" "}
            directly.
          </p>
        </div>
      </section>

      <CtaBanner
        title={`READY TO REFER ${industry.shortTitle.toUpperCase()} CLIENTS?`}
        description="Apply below or call Junk Command — we keep your customers informed and your reputation protected."
        primaryHref="#partner-apply"
        primaryLabel="Apply to Partner"
      />

      <LandingFaq
        items={industry.faqs}
        idPrefix={`partner-${industry.slug}`}
        relatedLinks={[
          { label: "Partner Program", href: "/partners" },
          { label: "Junk Removal", href: "/services" },
          { label: "Garage Cleanouts", href: "/garage-cleanout" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <LandingFormSection
        id="partner-apply"
        title="PARTNER APPLICATION"
        description={`Tell us about your ${industry.shortTitle.toLowerCase()} business. We will follow up to set up referral coordination across Port Huron and the Blue Water Area.`}
      >
        <PartnerApplicationForm
          defaultBusinessType={industry.businessTypeDefault}
        />
      </LandingFormSection>

      <LandingEndCta
        title="LET'S WORK TOGETHER"
        description="Veteran-owned junk removal partners for professionals across Southeast Michigan."
        primaryHref="#partner-apply"
        primaryLabel="Apply Now"
      />
    </>
  );
}
