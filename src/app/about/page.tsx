import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getPersonSchema,
} from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export const metadata = buildPageMetadata({
  title: "About Junk Command | Veteran-Owned Junk Removal Port Huron",
  description:
    "Junk Command is a veteran-owned, family-operated junk removal company in Port Huron, MI — Dan, Gage, and Blue Heeler Luna serving St. Clair County with pride.",
  path: "/about",
  image: "/images/dan-gage-luna.webp",
  imageAlt: "Dan, Gage, and Luna — the Junk Command crew in Port Huron",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema(crumbs),
          getPersonSchema({
            name: "Dan",
            jobTitle: "Owner / Operator",
            description:
              "Veteran owner and operator of Junk Command junk removal in Port Huron, Michigan.",
            image: "/images/crew/dan.webp",
          }),
          getPersonSchema({
            name: "Gage",
            jobTitle: "Crew Lead",
            description:
              "Crew lead at Junk Command, family-operated junk removal serving Southeast Michigan.",
            image: "/images/crew/gage.webp",
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Our Story
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            VETERAN OWNED. FAMILY OPERATED.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Junk Command was built in Port Huron by people who live here, work
            here, and take pride in showing up when neighbors need clutter gone.
            We are not a franchise call center — we are Dan, Gage, and our
            four-legged Chief Cleanup Officer, Luna.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-online" showArrow>
              Get My Free Quote
            </Button>
            <Button href="/meet-the-crew" variant="secondary">
              Meet the Crew
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)]">
            <MediaImage
              src="/images/dan-gage-luna.webp"
              alt="Dan and Gage with Luna the Blue Heeler — Junk Command crew in Port Huron, Michigan"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Port Huron Roots
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              BUILT FOR THE BLUE WATER AREA
            </h2>
            <p className="mt-4 text-muted">
              After years of seeing neighbors wrestle dumpsters, borrow trucks,
              and wait weeks for bulk pickup, we launched Junk Command to make
              haul-away simple: honest quotes, strong crews, and respect for
              every driveway we pull into.
            </p>
            <p className="mt-4 text-muted">
              Our headquarters is Port Huron — so when someone in Marysville,
              Fort Gratiot, or Kimball needs same-day help, we are already close.
              That local density is how we keep response times sharp and service
              personal across St. Clair and Macomb Counties.
            </p>
            <Button href="/service-areas" className="mt-6" variant="secondary">
              See Where We Serve
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(0,135,255,0.2)] bg-[#080B0F] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              The Team
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              DAN, GAGE &amp; LUNA
            </h2>
            <p className="mt-3 text-muted">
              A tight family crew with military discipline, local pride, and one
              very motivated Blue Heeler who supervises every broom-clean finish.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                src: "/images/crew/dan.webp",
                alt: "Dan, veteran owner and operator of Junk Command in Port Huron",
                name: "Dan",
                role: "Owner / Operator",
                blurb:
                  "Veteran leadership on every job — clear communication, fair pricing, and a crew that finishes what it starts.",
              },
              {
                src: "/images/crew/gage.webp",
                alt: "Gage, crew lead at Junk Command junk removal",
                name: "Gage",
                role: "Crew Lead",
                blurb:
                  "Runs the load plan, protects your floors and doorways, and keeps the truck moving until the pile is gone.",
              },
              {
                src: "/images/crew/luna.webp",
                alt: "Luna, Junk Command's Blue Heeler Chief Cleanup Officer",
                name: "Luna",
                role: "Chief Cleanup Officer",
                blurb:
                  "Blue Heeler mascot and morale officer. She does not lift sofas — she does raise standards for a tidy finish.",
              },
            ].map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card glow-border"
              >
                <div className="relative aspect-[4/5]">
                  <MediaImage
                    src={person.src}
                    alt={person.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bright">
                    {person.role}
                  </p>
                  <h3 className="mt-1 font-display text-2xl tracking-[0.08em] text-white">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{person.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/meet-the-crew"
              className="text-sm font-semibold text-bright hover:text-white"
            >
              Full crew profiles →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Community First
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              NEIGHBORS HELPING NEIGHBORS
            </h2>
            <p className="mt-4 text-muted">
              We donate usable items whenever we can, recycle scrap when
              facilities accept it, and treat every property — rental, estate,
              or family home — with the same care we would want on our own
              street. When St. Clair County needs junk gone, we answer the phone.
            </p>
            <p className="mt-4 text-muted">
              Looking for a company that shows up on time, prices upfront, and
              leaves the space broom-clean? That is the Junk Command standard.
              Call{" "}
              <a
                href={BRAND.phoneHref}
                className="font-semibold text-bright hover:text-white"
              >
                {BRAND.phone}
              </a>{" "}
              or book online in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-online" showArrow>
                Book Online
              </Button>
              <Button href="/veteran-owned" variant="secondary">
                Our Veteran Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="WORK WITH A LOCAL CREW"
        description="Free quotes. Real people. Port Huron junk removal done with pride."
      />
    </SiteShell>
  );
}
