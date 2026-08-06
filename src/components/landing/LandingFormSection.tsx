import { type ReactNode } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function LandingFormSection({
  title,
  description,
  children,
  id = "quote",
}: {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-y border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <DotPattern
        width={20}
        height={20}
        cr={0.8}
        className="pointer-events-none opacity-20 [mask-image:linear-gradient(to_right,white,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 lg:px-8">
        <BlurFade>
          <h2 className="font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-muted">{description}</p>
        </BlurFade>
        <BlurFade delay={0.1}>{children}</BlurFade>
      </div>
    </section>
  );
}
