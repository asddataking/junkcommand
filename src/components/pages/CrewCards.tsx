"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";

const CREW = [
  {
    name: "Dan",
    role: "Owner / Operator",
    image: "/images/crew/dan.webp",
    alt: "Dan, veteran Owner and Operator of Junk Command junk removal in Port Huron",
    bio: "Dan founded Junk Command to bring military-grade reliability to local junk removal. He handles quotes, routing, and on-site leadership so every customer gets clear pricing and a crew that finishes the mission.",
    highlights: [
      "Veteran-owned leadership",
      "Upfront volume quotes",
      "Port Huron based operations",
    ],
  },
  {
    name: "Gage",
    role: "Crew Lead",
    image: "/images/crew/gage.webp",
    alt: "Gage, Crew Lead at Junk Command hauling junk in Southeast Michigan",
    bio: "Gage runs the load plan from driveway to disposal. Stairs, tight hallways, hot tubs, and packed garages are everyday work — executed carefully so floors, doors, and landscaping stay protected.",
    highlights: [
      "Heavy lifting specialist",
      "Efficient truck packing",
      "Broom-clean finishes",
    ],
  },
  {
    name: "Luna",
    role: "Chief Cleanup Officer",
    image: "/images/crew/luna.webp",
    alt: "Luna, Blue Heeler and Chief Cleanup Officer for Junk Command",
    bio: "Luna is our Blue Heeler mascot and unofficial quality control. She keeps morale high, reminds the crew that every job deserves a tidy finish, and represents the family heart of Junk Command.",
    highlights: [
      "Blue Heeler pride",
      "Morale & brand ambassador",
      "K-9 Cleanup Unit",
    ],
  },
] as const;

export function CrewCards() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {CREW.map((member, index) => (
        <motion.article
          key={member.name}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.4,
            delay: reduceMotion ? 0 : index * 0.08,
          }}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -6,
                  transition: { duration: 0.2 },
                }
          }
          className="group overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card glow-border"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <MediaImage
              src={member.image}
              alt={member.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bright">
                {member.role}
              </p>
              <h2 className="mt-1 font-display text-4xl tracking-[0.08em] text-white">
                {member.name.toUpperCase()}
              </h2>
            </div>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
            <ul className="space-y-2">
              {member.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  <span
                    className="size-1.5 rounded-full bg-bright shadow-[0_0_8px_rgba(24,160,255,0.7)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
