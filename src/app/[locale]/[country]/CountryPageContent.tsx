"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import type { Country, Location } from "@/types/country";
import FadeIn from "@/components/ui/FadeIn";

interface Props {
  country: Country;
  locations: Location[];
}

export default function CountryPageContent({ country, locations }: Props) {
  const t = useTranslations();

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
            src={country.coverImage}
            alt={t(country.nameKey)}
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
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-gold-300 transition-colors text-sm mb-4"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("nav.home")}
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{country.flagEmoji}</span>
              <h1 className="font-heading text-4xl md:text-6xl text-white">
                {t(country.nameKey)}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-lg text-navy-500 leading-relaxed">
              {t(country.descriptionKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-0.5 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl text-navy-700">
              {t("home.featured.title")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <FadeIn key={loc.id} delay={i * 0.1}>
                <Link href={`/${country.id}/${loc.id}`}>
                  <motion.div
                    className="group relative rounded-card overflow-hidden bg-white shadow-luxury cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={loc.coverImage}
                        alt={t(loc.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl text-white group-hover:text-gold-300 transition-colors">
                          {t(loc.nameKey)}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-navy-400 text-sm leading-relaxed line-clamp-2">
                        {t(loc.descriptionKey)}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {loc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-navy-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
