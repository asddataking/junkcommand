import type { Metadata } from "next";
import { Truck, Clock3, Handshake, Dumbbell } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers | Join the Junk Command Crew | Port Huron MI",
  description:
    "Junk Command is hiring in Port Huron and St. Clair County. Join a veteran-owned junk removal crew. Hard work, honest pay, local pride. Call 810-242-0429.",
  path: "/careers",
});

const PERKS = [
  {
    icon: Truck,
    title: "Active Outdoor Work",
    description:
      "No cubicle. You are on trucks, in garages, and finishing real jobs across the Blue Water Area every day.",
  },
  {
    icon: Clock3,
    title: "Steady Local Routes",
    description:
      "Port Huron based operations mean less empty highway time and more productive days serving St. Clair County.",
  },
  {
    icon: Handshake,
    title: "Veteran-Owned Culture",
    description:
      "Clear expectations, direct communication, and a crew that backs each other up on heavy lifts and long carries.",
  },
  {
    icon: Dumbbell,
    title: "Stay Strong",
    description:
      "This is physical work. If you like lifting, hustling, and seeing a space transform in one visit, you will fit.",
  },
] as const;

const ROLES = [
  {
    title: "Junk Removal Laborer / Helper",
    detail:
      "Load trucks, protect property, and keep the pace on residential and light commercial jobs. Prior moving or construction experience helps but is not required if you are reliable and coachable.",
  },
  {
    title: "Crew Lead (Experienced)",
    detail:
      "Run job-day communication, confirm scope with customers, and keep the team safe and efficient. Ideal for someone with leadership instincts and junk removal or moving experience.",
  },
] as const;

export default function CareersPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />

      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Now Hiring
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JOIN THE CREW
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Junk Command is growing in Port Huron. If you work hard, show up on
            time, and take pride in leaving properties broom-clean, we want to
            hear from you.
          </p>
          <div className="mt-8">
            <Button href={BRAND.emailHref} showArrow>
              Email Your Interest
            </Button>
          </div>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            WHY WORK HERE
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {PERKS.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
              >
                <Icon className="size-5 text-bright" aria-hidden />
                <h3 className="mt-4 font-heading text-xl text-white">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            OPEN ROLES
          </h2>
          <ul className="mt-8 space-y-6">
            {ROLES.map((role) => (
              <li
                key={role.title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
              >
                <h3 className="font-heading text-xl text-white">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {role.detail}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-3 text-sm text-muted">
            <p>
              <span className="text-white">How to apply:</span> Email{" "}
              <a href={BRAND.emailHref} className="text-bright hover:text-white">
                {BRAND.email}
              </a>{" "}
              with a short note about your experience, availability, and a phone
              number. Or call{" "}
              <a href={BRAND.phoneHref} className="text-bright hover:text-white">
                {BRAND.phone}
              </a>
              .
            </p>
            <p>
              Must be able to lift repeatedly, work outdoors in Michigan weather,
              and pass a background check / driving review if operating company
              vehicles.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="READY TO SUIT UP?"
        description="Tell us why you want to join Junk Command — we reply fast."
        primaryHref={BRAND.emailHref}
        primaryLabel="Email Junk Command"
      />
    </SiteShell>
  );
}
