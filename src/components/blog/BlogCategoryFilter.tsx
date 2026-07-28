import Link from "next/link";
import type { BlogCategory } from "@/data/blog";
import { BLOG_CATEGORIES } from "@/data/blog";

export function BlogCategoryFilter({
  active,
}: {
  active?: BlogCategory | "All";
}) {
  const current = active ?? "All";
  const cats: Array<BlogCategory | "All"> = ["All", ...BLOG_CATEGORIES];

  return (
    <div className="flex flex-wrap gap-2">
      {cats.map((cat) => {
        const href = cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`;
        const selected = current === cat;
        return (
          <Link
            key={cat}
            href={href}
            className={`rounded-[2px] border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
              selected
                ? "border-bright bg-[rgba(7,135,255,0.15)] text-white"
                : "border-[rgba(0,135,255,0.3)] text-muted hover:border-bright hover:text-white"
            }`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
