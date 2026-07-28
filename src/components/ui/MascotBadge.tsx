type MascotBadgeProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  caption?: string;
};

const sizes = {
  sm: "h-16 w-16",
  md: "h-28 w-28",
  lg: "h-44 w-44",
};

export function MascotBadge({
  size = "md",
  className = "",
  caption,
}: MascotBadgeProps) {
  return (
    <figure className={`relative flex flex-col items-center ${className}`}>
      <div
        className={`relative overflow-hidden rounded-[4px] border border-[rgba(0,135,255,0.45)] bg-gradient-to-br from-[#0B1016] via-[#080B0F] to-[#041018] glow-border ${sizes[size]}`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(24,160,255,0.28), transparent 55%), url('/images/luna-mascot.webp'), linear-gradient(145deg, #0B1016, #041018)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Luna, Junk Command Blue Heeler mascot in a branded K-9 Cleanup Unit tactical vest"
      >
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <p className="text-center text-[9px] font-semibold uppercase tracking-wider text-bright">
            Luna · K-9 Cleanup Unit
          </p>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
