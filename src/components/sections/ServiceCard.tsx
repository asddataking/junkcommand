import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  image,
  slug,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative flex min-h-56 flex-col justify-end overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card transition-transform duration-300 hover:-translate-y-1 hover:border-bright glow-border sm:min-h-64"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,3,5,0.2) 0%, rgba(2,3,5,0.92) 72%), url('${image}'), linear-gradient(145deg, #0B1016, #041018)`,
        }}
        aria-hidden
      />
      <div className="relative z-10 space-y-2 p-4">
        <Icon
          className="size-6 text-bright drop-shadow-[0_0_10px_rgba(24,160,255,0.55)]"
          aria-hidden
        />
        <h3 className="font-display text-xl leading-none tracking-[0.08em] text-white sm:text-2xl">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
