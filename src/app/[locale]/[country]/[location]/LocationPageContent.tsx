"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import type { Country, Location } from "@/types/country";
import FadeIn from "@/components/ui/FadeIn";

interface Props {
  country: Country;
  location: Location;
}

export default function LocationPageContent({ country, location }: Props) {
  const t = useTranslations();

  // Get guide data from translations
  const guideBestTime = t(`${location.guideKey}.bestTime`);
  const guideGettingThere = t(`${location.guideKey}.gettingThere`);
  const guideHighlights = t.raw(`${location.guideKey}.highlights`) as string[];

  // Generate sample photo URLs based on location
  const photos = Array.from({ length: 6 }, (_, i) => ({
    id: `${location.id}-${i}`,
    src: `https://picsum.photos/seed/${location.id}${i}/800/600`,
    alt: `${t(location.nameKey)} photo ${i + 1}`,
  }));

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img
            src={location.coverImage}
            alt={t(location.nameKey)}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-800/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-300 mb-4">
              <Link href="/" className="hover:text-gold-300 transition-colors">
                {t("nav.home")}
              </Link>
              <span>/</span>
              <Link
                href={`/${country.id}`}
                className="hover:text-gold-300 transition-colors"
              >
                {country.flagEmoji} {t(country.nameKey)}
              </Link>
              <span>/</span>
              <span className="text-white">{t(location.nameKey)}</span>
            </nav>

            <h1 className="font-heading text-4xl md:text-6xl text-white mb-3">
              {t(location.nameKey)}
            </h1>
            <div className="flex flex-wrap gap-2">
              {location.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white/20 text-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-lg text-navy-500 leading-relaxed">
              {t(location.descriptionKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Travel Guide */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-0.5 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl text-navy-700">
              {t("common.gettingThere")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-card bg-white shadow-luxury">
                <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-navy-700 mb-2">
                  {t("common.bestTime")}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed">
                  {guideBestTime}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 rounded-card bg-white shadow-luxury">
                <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-navy-700 mb-2">
                  {t("common.gettingThere")}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed">
                  {guideGettingThere}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 rounded-card bg-white shadow-luxury">
                <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-navy-700 mb-2">
                  {t("common.highlights")}
                </h3>
                <ul className="text-navy-400 text-sm space-y-1.5">
                  {guideHighlights?.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-0.5 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl text-navy-700">
              {t("gallery.viewAll")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <FadeIn key={photo.id} delay={i * 0.08}>
                <motion.div
                  className="group relative rounded-card overflow-hidden cursor-pointer aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/30 transition-colors duration-300" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
