import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { MediaImage } from "@/components/ui/MediaImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Junk Removal Guides | Port Huron Tips | Junk Command",
  description:
    "Practical junk removal guides from Junk Command in Port Huron — pricing, same-day scheduling, furniture and appliance haul-away, cleanouts, and Blue Water Area service.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
  ];

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Junk Removal Guides
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            ANSWERS FROM THE BLUE WATER CREW
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Straightforward guides on pricing, scheduling, what we haul, and how
            to prepare — written by Junk Command for Port Huron and nearby
            communities.
          </p>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card transition-colors hover:border-bright"
                >
                  <div className="relative aspect-[16/10] bg-secondary">
                    <MediaImage
                      src={guide.image}
                      alt={guide.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-bright">
                      {guide.readTime}
                    </p>
                    <h2 className="mt-2 font-heading text-xl text-white group-hover:text-bright">
                      {guide.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {guide.excerpt}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-bright">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="NEED A QUOTE INSTEAD?"
        description="Text photos to 810-242-0429 or book online — Junk Command will handle the rest."
      />
    </SiteShell>
  );
}
