import { MediaImage } from "@/components/ui/MediaImage";

export function CaptionedFigure({
  src,
  alt,
  caption,
  className = "",
  aspectClassName = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 100vw, 640px",
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  aspectClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card ${className}`}
    >
      <div className={`relative ${aspectClassName}`}>
        <MediaImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-[rgba(0,135,255,0.2)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-bright">
        {caption}
      </figcaption>
    </figure>
  );
}
