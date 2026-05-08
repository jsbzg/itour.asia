"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const AsiaMap = dynamic(() => import("@/components/map/AsiaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-stone-100 rounded-card">
      <div className="text-navy-400 animate-pulse">Loading map...</div>
    </div>
  ),
});

export default function MapSection() {
  const t = useTranslations("home.map");

  return (
    <section id="map" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <FadeIn delay={0.2}>
          <AsiaMap />
        </FadeIn>
      </div>
    </section>
  );
}
