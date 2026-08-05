type GoogleMapsEmbedProps = {
  query: string;
  label: string;
  className?: string;
  zoom?: number;
};

export function GoogleMapsEmbed({
  query,
  label,
  className = "",
  zoom = 11,
}: GoogleMapsEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;

  return (
    <div
      className={`overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] ${className}`}
    >
      <iframe
        title={label}
        src={src}
        className="h-72 w-full min-h-64 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
