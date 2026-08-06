import Link from "next/link";
import {
  FaqAccordion,
  type FaqItem,
} from "@/components/shared/FaqAccordion";

export function LandingFaq({
  title = "FREQUENTLY ASKED QUESTIONS",
  items,
  idPrefix,
  relatedLinks,
}: {
  title?: string;
  items: FaqItem[];
  idPrefix: string;
  relatedLinks?: { label: string; href: string }[];
}) {
  return (
    <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={items} idPrefix={idPrefix} />
        </div>
        {relatedLinks && relatedLinks.length > 0 ? (
          <nav
            aria-label="Related pages"
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm"
          >
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-bright hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  );
}
