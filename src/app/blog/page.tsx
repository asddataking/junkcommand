import type { Metadata } from "next";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/data/blog";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { MediaImage } from "@/components/ui/MediaImage";

type Props = { searchParams: Promise<{ category?: string }> };

export const metadata: Metadata = buildPageMetadata({
  title: "Junk Removal Blog | Tips & Guides | Junk Command",
  description:
    "Practical junk removal, decluttering, and Michigan home tips from Junk Command in Port Huron. Garage cleanouts, estate advice, hot tub disposal, and more.",
  path: "/blog",
});

function isCategory(value: string | undefined): value is BlogCategory {
  return Boolean(value && (BLOG_CATEGORIES as string[]).includes(value));
}

export default async function BlogIndexPage({ searchParams }: Props) {
  const params = await searchParams;
  const active = isCategory(params.category) ? params.category : "All";
  const posts =
    active === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === active);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <section className="border-b border-[rgba(0,135,255,0.2)] bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.12),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Resources
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            JUNK COMMAND BLOG
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Field-tested guides on junk removal, decluttering, and Michigan home
            projects from our Port Huron crew.
          </p>
          <div className="mt-8">
            <BlogCategoryFilter active={active} />
          </div>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted">No posts in this category yet.</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card transition-colors hover:border-bright"
                  >
                    <div className="relative aspect-[16/10] bg-secondary">
                      <MediaImage
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bright">
                        {post.category} · {post.readTime}
                      </p>
                      <h2 className="mt-2 font-heading text-xl leading-snug text-white group-hover:text-bright">
                        {post.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 text-sm text-muted">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto pt-4 text-sm font-semibold text-bright">
                        Read article →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner
        title="NEED JUNK GONE TODAY?"
        description="Text photos to 810-336-5865 for a fast Port Huron area quote."
      />
    </SiteShell>
  );
}
