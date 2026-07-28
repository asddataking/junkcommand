import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
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
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    type: "article",
  });
}

export const revalidate = 86400;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          getArticleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            image: post.image,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: post.author,
          }),
          getFaqSchema(post.faqs),
          getBreadcrumbSchema(crumbs),
        ]}
      />

      <article>
        <header className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Breadcrumbs items={crumbs} />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              {post.category} · {post.readTime}
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-muted">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              By{" "}
              <span className="text-white">{post.author}</span>
              {" · "}
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </header>

        <div className="relative mx-auto mt-0 aspect-[21/9] max-w-5xl overflow-hidden border-b border-[rgba(0,135,255,0.2)] bg-secondary sm:mt-0">
          <MediaImage
            src={post.image}
            alt={post.imageAlt}
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
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted transition-colors hover:text-bright"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-12">
            {post.sections.map((section) => (
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
                {post.author}
              </h2>
              <p className="mt-1 text-sm text-muted">{post.authorRole}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Dan leads Junk Command, a veteran-owned junk removal crew based
                in Port Huron serving St. Clair County and nearby communities.
                Questions about a cleanout? Call or text{" "}
                <a href={BRAND.phoneHref} className="text-bright hover:text-white">
                  {BRAND.phone}
                </a>
                .
              </p>
            </aside>

            <section>
              <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="mt-6">
                <FaqAccordion items={post.faqs} idPrefix={`blog-${post.slug}`} />
              </div>
            </section>

            {related.length > 0 ? (
              <section>
                <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
                  RELATED ARTICLES
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="block h-full rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-4 transition-colors hover:border-bright"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-bright">
                          {item.category}
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
