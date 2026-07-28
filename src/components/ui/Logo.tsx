import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
      aria-label="Junk Command home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.55)] bg-[#080B0F] font-display text-xl text-bright shadow-[0_0_18px_rgba(7,135,255,0.25)] transition-colors group-hover:border-bright">
        JC
      </span>
      {!compact ? (
        <span className="flex flex-col leading-none">
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
