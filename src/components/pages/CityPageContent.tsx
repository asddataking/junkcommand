import type { LocationPage } from "@/data/locations/types";
import { TrustBar } from "@/components/sections/TrustBar";
import { SidebarCta } from "@/components/shared/SidebarCta";
import {
  LocationCleanouts,
  LocationFaqs,
  LocationFinalCta,
  LocationHeroEditorial,
  LocationHeroGallery,
  LocationHeroSplit,
  LocationIntro,
  LocationMap,
  LocationMidCta,
  LocationNearby,
  LocationReviews,
  LocationServices,
} from "@/components/locations/LocationSections";
import Link from "next/link";

function Sidebar({ location }: { location: LocationPage }) {
  return (
    <div className="space-y-6">
      <SidebarCta
        title={`${location.name} Pickup`}
        locationSlug={location.slug}
        pageType="location_page"
      />
      <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
        <h2 className="font-display text-xl tracking-[0.08em] text-white">
          NEARBY AREAS
        </h2>
        <div className="mt-4">
          <LocationNearby location={location} compact heading={false} />
        </div>
        <div className="mt-4 space-y-2 border-t border-[rgba(0,135,255,0.15)] pt-4">
          <Link href="/" className="block text-sm text-bright hover:text-white">
            Homepage →
          </Link>
          <Link
            href="/services"
            className="block text-sm text-bright hover:text-white"
          >
            All services →
          </Link>
          <Link
            href="/service-areas"
            className="block text-sm text-bright hover:text-white"
          >
            Areas we serve →
          </Link>
        </div>
      </div>
    </div>
  );
}

function EditorialLayout({ location }: { location: LocationPage }) {
  return (
    <>
      <LocationHeroEditorial location={location} />
      <TrustBar />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            <LocationIntro location={location} />
            <LocationServices location={location} />
            <LocationMidCta location={location} />
            <LocationCleanouts location={location} split />
            <LocationNearby location={location} />
            <LocationMap location={location} />
            <LocationReviews location={location} />
            <LocationFaqs location={location} />
          </div>
          <Sidebar location={location} />
        </div>
      </section>
      <LocationFinalCta location={location} />
    </>
  );
}

function SplitLayout({ location }: { location: LocationPage }) {
  return (
    <>
      <LocationHeroSplit location={location} />
      <TrustBar />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            <LocationIntro location={location} split withImage={false} />
            <LocationMidCta location={location} />
            <LocationServices location={location} compact />
            <LocationCleanouts location={location} />
            <div className="grid gap-10 lg:grid-cols-2">
              <LocationNearby location={location} />
              <LocationMap location={location} />
            </div>
            <LocationReviews location={location} />
            <LocationFaqs location={location} />
          </div>
          <Sidebar location={location} />
        </div>
      </section>
      <LocationFinalCta location={location} />
    </>
  );
}

function GalleryLayout({ location }: { location: LocationPage }) {
  return (
    <>
      <LocationHeroGallery location={location} />
      <TrustBar />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-12">
            <LocationIntro location={location} withImage={false} />
            <LocationServices location={location} visual />
            <LocationMidCta location={location} />
            <LocationCleanouts location={location} band />
            <LocationNearby location={location} compact />
            <LocationMap location={location} />
            <LocationReviews location={location} />
            <LocationFaqs location={location} narrow />
          </div>
          <Sidebar location={location} />
        </div>
      </section>
      <LocationFinalCta location={location} />
    </>
  );
}

export function CityPageContent({
  location,
}: {
  location: LocationPage;
}) {
  if (location.layout === "split") {
    return <SplitLayout location={location} />;
  }
  if (location.layout === "gallery") {
    return <GalleryLayout location={location} />;
  }
  return <EditorialLayout location={location} />;
}
