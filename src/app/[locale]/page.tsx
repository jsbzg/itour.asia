import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import MapSection from "@/components/home/MapSection";
import FeaturedCountries from "@/components/home/FeaturedCountries";
import WhyITour from "@/components/home/WhyITour";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedCountries />
      <MapSection />
      <WhyITour />
    </main>
  );
}
