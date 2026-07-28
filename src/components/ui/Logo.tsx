import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO } from "@/lib/constants";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright sm:gap-3"
      aria-label="Junk Command home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
        <Image
          src={BRAND_LOGO}
          alt=""
          width={88}
          height={88}
          className="size-full object-contain drop-shadow-[0_0_14px_rgba(24,160,255,0.45)] transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </span>
      {!compact ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-xl tracking-[0.12em] text-white sm:text-2xl">
            JUNK COMMAND
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Junk Removal
          </span>
        </span>
      ) : null}
    </Link>
  );
}
