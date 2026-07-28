"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { MediaImage } from "@/components/ui/MediaImage";

type Filter = "All" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  const filters: Filter[] = ["All", ...GALLERY_CATEGORIES];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((cat) => {
          const selected = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-[2px] border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                selected
                  ? "border-bright bg-[rgba(7,135,255,0.15)] text-white"
                  : "border-[rgba(0,135,255,0.3)] text-muted hover:border-bright hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group w-full overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card text-left transition-colors hover:border-bright"
            >
              <div className="grid grid-cols-2 gap-px bg-[rgba(0,135,255,0.2)]">
                <div className="relative aspect-[4/3] bg-secondary">
                  <MediaImage
                    src={item.beforeImage}
                    alt={item.beforeAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <span className="absolute left-2 top-2 bg-[#020305]/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] bg-secondary">
                  <MediaImage
                    src={item.afterImage}
                    alt={item.afterAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <span className="absolute left-2 top-2 bg-primary/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    After
                  </span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bright">
                  {item.category} · {item.location}
                </p>
                <h3 className="mt-1 font-heading text-lg text-white group-hover:text-bright">
                  {item.title}
                </h3>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} before and after`}
          onClick={() => setActive(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActive(null);
          }}
        >
          <div
            className="relative w-full max-w-5xl rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-[2px] border border-[rgba(0,135,255,0.4)] p-2 text-white hover:border-bright hover:text-bright"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.16em] text-bright">
              {active.category} · {active.location}
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
              {active.title}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-secondary">
                <MediaImage
                  src={active.beforeImage}
                  alt={active.beforeAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <span className="absolute left-3 top-3 bg-[#020305]/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-secondary">
                <MediaImage
                  src={active.afterImage}
                  alt={active.afterAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <span className="absolute left-3 top-3 bg-primary/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
