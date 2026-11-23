import { MediaImage } from "@/components/ui/MediaImage";
import type { DeliveryGalleryImage } from "@/data/delivery";
import { BlurFade } from "@/components/magicui/blur-fade";

export function LandingPhotoGallery({
  title = "ALONG THE TRAIL",
  intro = "From Lexington Beach on Lake Huron to the coastal road along M-25 — the Thumb Yard Sale Trail runs through some of the Blue Water Area's best summer scenery.",
  images,
}: {
  title?: string;
  intro?: string;
  images: DeliveryGalleryImage[];
}) {
  if (!images.length) return null;

  return (
    <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-3 max-w-2xl text-muted">{intro}</p> : null}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <BlurFade delay={0.05 * index}>
                <figure className="overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card">
                  <div className="relative aspect-[4/3]">
                    <MediaImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="border-t border-[rgba(0,135,255,0.2)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-bright">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
