"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const features = ["curated", "photography", "guides"] as const;

const icons: Record<string, React.ReactElement> = {
  curated: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  photography: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  guides: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

export default function WhyITour() {
  const t = useTranslations("home.why");

  return (
    <section className="py-24 px-6 bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          className="[&_h2]:text-white [&_p]:text-stone-400 [&_.bg-gold-400]:bg-gold-300"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((key, i) => (
            <FadeIn key={key} delay={i * 0.15}>
              <div className="text-center p-8 rounded-card bg-navy-600/50 border border-navy-500/30">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 mb-6">
                  {icons[key]}
                </div>
                <h3 className="font-heading text-xl mb-3">{t(`${key}.title`)}</h3>
                <p className="text-stone-400 leading-relaxed">{t(`${key}.description`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
