"use client";

import Link from "next/link";
import { CrewCards } from "@/components/pages/CrewCards";
import { BlurFade } from "@/components/magicui/blur-fade";

export function MeetTheCrewHome() {
  return (
    <section
      id="meet-the-crew"
      aria-labelledby="meet-crew-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Local Crew
          </p>
          <h2
            id="meet-crew-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            MEET THE CREW
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Veteran-owned, family-operated junk removal from Port Huron — Dan,
            Gage, and Luna the Blue Heeler.
          </p>
        </BlurFade>

        <div className="mt-10">
          <CrewCards />
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/meet-the-crew" className="text-bright hover:text-white">
            Learn more about the crew →
          </Link>
        </p>
      </div>
    </section>
  );
}
