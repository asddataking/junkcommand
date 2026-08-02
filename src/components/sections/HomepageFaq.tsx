import Link from "next/link";
import { getHomepageFaqs } from "@/data/faqs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { BlurFade } from "@/components/magicui/blur-fade";

export function HomepageFaq() {
  const faqs = getHomepageFaqs();

  return (
    <section
      id="homepage-faq"
      aria-labelledby="homepage-faq-heading"
      className="scroll-mt-24 border-t border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Common Questions
          </p>
          <h2
            id="homepage-faq-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            JUNK REMOVAL FAQS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Straight answers about Port Huron junk hauling, pricing, and what we
            take — from a local crew that shows up ready.
          </p>
        </BlurFade>

        <BlurFade delay={0.08} className="mt-10">
          <FaqAccordion items={faqs} idPrefix="home-faq" />
        </BlurFade>

        <p className="mt-6 text-center text-sm text-muted">
          Want more detail? Browse our{" "}
          <Link href="/guides" className="font-semibold text-bright hover:text-white">
            junk removal guides
          </Link>{" "}
          or see the{" "}
          <Link href="/faqs" className="font-semibold text-bright hover:text-white">
            full FAQ list
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
