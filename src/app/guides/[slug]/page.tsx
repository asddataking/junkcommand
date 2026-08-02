import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  getRelatedGuides,
} from "@/data/guides";
import { buildPageMetadata } from "@/lib/seo";
import {
  getArticleSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { MediaImage } from "@/components/ui/MediaImage";
import { BRAND } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    image: guide.image,
    imageAlt: guide.imageAlt,
    type: "article",
  });
}

export const revalidate = 86400;

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: guide.title, href: `/guides/${guide.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getArticleSchema({
            title: guide.title,
            description: guide.metaDescription,
            path: `/guides/${guide.slug}`,
            image: guide.image,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
            authorName: guide.author,
          }),
          getFaqSchema(guide.faqs),
          getBreadcrumbSchema(crumbs),
        ]}
      />

      <article>
        <header className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Breadcrumbs items={crumbs} />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Guide · {guide.readTime}
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
              {guide.title}
            </h1>
            <p className="mt-4 text-muted">{guide.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              By <span className="text-white">{guide.author}</span>
              {" · "}
              {new Date(guide.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </header>

        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden border-b border-[rgba(0,135,255,0.2)] bg-secondary">
          <MediaImage
            src={guide.image}
            alt={guide.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8 lg:py-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bright">
              On This Page
            </p>
            <nav aria-label="Table of contents" className="mt-4">
              <ol className="space-y-2 border-l border-[rgba(0,135,255,0.3)] pl-4">
                <li>
                  <a
                    href="#introduction"
                    className="text-sm text-muted transition-colors hover:text-bright"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#quick-answer"
                    className="text-sm text-muted transition-colors hover:text-bright"
                  >
                    Quick Answer
                  </a>
                </li>
                {guide.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted transition-colors hover:text-bright"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#guide-faq"
                    className="text-sm text-muted transition-colors hover:text-bright"
                  >
                    FAQ
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-12">
            <section id="introduction" className="scroll-mt-28">
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                INTRODUCTION
              </h2>
              <div className="mt-5 space-y-4">
                {guide.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <aside
              id="quick-answer"
              className="scroll-mt-28 rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bright">
                Quick Answer
              </p>
              <p className="mt-3 text-base leading-relaxed text-white sm:text-lg">
                {guide.quickAnswer}
              </p>
            </aside>

            {guide.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <aside className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bright">
                Author
              </p>
              <h2 className="mt-2 font-heading text-2xl text-white">
                {guide.author}
              </h2>
              <p className="mt-1 text-sm text-muted">{guide.authorRole}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Dan leads Junk Command, a veteran-owned junk removal crew based
                in Port Huron serving St. Clair County and the Blue Water Area.
                Questions about a cleanout? Call or text{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-bright hover:text-white"
                >
                  {BRAND.phone}
                </a>
                .
              </p>
            </aside>

            <section id="guide-faq" className="scroll-mt-28">
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="mt-6">
                <FaqAccordion
                  items={guide.faqs}
                  idPrefix={`guide-${guide.slug}`}
                />
              </div>
            </section>

            {related.length > 0 ? (
              <section>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  RELATED GUIDES
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/guides/${item.slug}`}
                        className="block h-full rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-4 transition-colors hover:border-bright"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-bright">
                          {item.readTime}
                        </p>
                        <p className="mt-2 font-heading text-lg text-white">
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <p className="text-sm text-muted">
              Explore{" "}
              <Link href="/service-areas" className="text-bright hover:text-white">
                service areas
              </Link>
              ,{" "}
              <Link href="/services" className="text-bright hover:text-white">
                services
              </Link>
              ,{" "}
              <Link href="/pricing" className="text-bright hover:text-white">
                pricing
              </Link>
              , or return to the{" "}
              <Link href="/" className="text-bright hover:text-white">
                homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <CtaBanner
        title="READY TO CLEAR THE CLUTTER?"
        description="Get an upfront quote from Junk Command — Port Huron's veteran-owned junk removal crew."
      />
    </SiteShell>
  );
}
