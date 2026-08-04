import type { Metadata } from "next";
import { Shield, Flag, HeartHandshake, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Veteran Owned Junk Removal | Junk Command Port Huron",
  description:
    "Junk Command is a veteran-owned junk removal company based in Port Huron, MI. Mission-focused service across St. Clair County. Call 810-242-0429.",
  path: "/veteran-owned",
});

const VALUES = [
  {
    icon: Flag,
    title: "Mission First",
    description:
      "We show up on time, communicate clearly, and finish the job we promised — the same standards that matter in uniform.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "Upfront pricing, careful handling of your property, and no disappearing after the truck leaves. You always know who is responsible.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for People",
    description:
      "Estate cleanouts, senior moves, and tough days deserve dignity. We treat every customer and every home with care.",
  },
  {
    icon: Users,
    title: "Local Crew",
    description:
      "Port Huron based. We live in the Blue Water Area and take pride in serving St. Clair County neighbors well.",
  },
] as const;

export default function VeteranOwnedPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Veteran Owned", href: "/veteran-owned" },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getPersonSchema({
            name: "Dan Gage",
            jobTitle: "Founder",
            description:
              "Founder of Junk Command, a veteran-owned junk removal company serving Port Huron and St. Clair County, Michigan.",
            image: "/images/dan-gage-luna.webp",
          }),
        ]}
      />

      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Our Story
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            VETERAN OWNED
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Junk Command was built on discipline, honesty, and service — values
            forged in uniform and brought home to Port Huron.
          </p>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            WHY WE STARTED JUNK COMMAND
          </h2>
          <p className="leading-relaxed text-muted">
            After serving, the mission did not end — it changed shape. Junk
            Command exists to help Michigan families and businesses take command
            of clutter without stress, surprises, or half-finished jobs. From
            our base in Port Huron, we haul furniture, clear garages, handle
            estate cleanouts, and remove the heavy stuff people should not lift
            alone.
          </p>
          <p className="leading-relaxed text-muted">
            Veteran ownership means we run the company the way we were trained
            to work: prepare, communicate, execute, and leave the site better
            than we found it. When you call{" "}
            <a href={BRAND.phoneHref} className="text-bright hover:text-white">
              {BRAND.phone}
            </a>
            , you reach a local team that answers for the result — not a distant
            franchise script.
          </p>
          <p className="leading-relaxed text-muted">
            We are proud to serve St. Clair County and nearby communities with
            fast scheduling when openings are available, volume-based pricing you
            see before we load, and a crew that treats your driveway and doorways
            with respect. That is what veteran-owned junk removal should feel
            like in the Blue Water Area.
          </p>
        </div>
      </section>

      <section className="border-y border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            HOW SERVICE SHOWS UP ON THE JOB
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-6"
              >
                <Icon className="size-5 text-bright" aria-hidden />
                <h3 className="mt-4 font-heading text-xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="WORK WITH A VETERAN-OWNED CREW"
        description="Get a free quote for junk removal in Port Huron and St. Clair County."
      />
    </SiteShell>
  );
}
