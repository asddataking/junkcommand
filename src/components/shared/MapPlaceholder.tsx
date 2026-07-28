import { MapPin } from "lucide-react";

export function MapPlaceholder({
  label = "Southeast Michigan Service Area",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-64 items-center justify-center overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] ${className}`}
      role="img"
      aria-label={`Map placeholder: ${label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(7,135,255,0.2),transparent_55%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(24,160,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(24,160,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <MapPin className="size-8 text-bright drop-shadow-[0_0_12px_rgba(24,160,255,0.5)]" aria-hidden />
        <p className="font-display text-2xl tracking-[0.08em] text-white">{label}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Interactive map coming soon
        </p>
      </div>
    </div>
  );
}
