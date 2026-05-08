"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { countries } from "@/data/countries";
import { getLocationsByCountry } from "@/data/locations";
import { cn } from "@/lib/utils";

interface MapState {
  level: "continent" | "country";
  selectedCountryId: string | null;
  hoveredCountryId: string | null;
}

export default function AsiaMap() {
  const t = useTranslations();
  const router = useRouter();
  const [mapState, setMapState] = useState<MapState>({
    level: "continent",
    selectedCountryId: null,
    hoveredCountryId: null,
  });

  const selectedCountry = useMemo(
    () => countries.find((c) => c.id === mapState.selectedCountryId),
    [mapState.selectedCountryId]
  );

  const selectedLocations = useMemo(
    () =>
      mapState.selectedCountryId
        ? getLocationsByCountry(mapState.selectedCountryId)
        : [],
    [mapState.selectedCountryId]
  );

  const handleCountryClick = useCallback((countryId: string) => {
    setMapState({
      level: "country",
      selectedCountryId: countryId,
      hoveredCountryId: null,
    });
  }, []);

  const handleBack = useCallback(() => {
    setMapState({
      level: "continent",
      selectedCountryId: null,
      hoveredCountryId: null,
    });
  }, []);

  const handleLocationClick = useCallback(
    (countryId: string, locationId: string) => {
      router.push(`/${countryId}/${locationId}`);
    },
    [router]
  );

  return (
    <div className="relative">
      {/* Breadcrumb / Back button */}
      <AnimatePresence>
        {mapState.level === "country" && selectedCountry && (
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-navy-400 hover:text-gold-500 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("home.map.backToAsia")}
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-navy-600 font-medium flex items-center gap-2">
              <span>{selectedCountry.flagEmoji}</span>
              {t(selectedCountry.nameKey)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map container */}
      <div className="relative rounded-card overflow-hidden bg-stone-100 shadow-luxury">
        <AnimatePresence mode="wait">
          {mapState.level === "continent" ? (
            <motion.div
              key="continent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-6"
            >
              {countries.map((country, i) => (
                <motion.button
                  key={country.id}
                  className={cn(
                    "group relative p-4 rounded-card text-left transition-all duration-300",
                    "bg-white hover:bg-gold-50 border border-stone-200 hover:border-gold-300",
                    "hover:shadow-luxury-hover"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                  onClick={() => handleCountryClick(country.id)}
                  onMouseEnter={() =>
                    setMapState((prev) => ({
                      ...prev,
                      hoveredCountryId: country.id,
                    }))
                  }
                  onMouseLeave={() =>
                    setMapState((prev) => ({
                      ...prev,
                      hoveredCountryId: null,
                    }))
                  }
                >
                  <span className="text-3xl mb-2 block">{country.flagEmoji}</span>
                  <span className="font-heading text-navy-700 group-hover:text-gold-600 transition-colors block">
                    {t(country.nameKey)}
                  </span>
                  <span className="text-xs text-navy-300 mt-1 block">
                    {getLocationsByCountry(country.id).length} destinations
                  </span>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="country"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-6"
            >
              {/* Country header */}
              {selectedCountry && (
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-4xl">{selectedCountry.flagEmoji}</span>
                  <div>
                    <h3 className="font-heading text-2xl text-navy-700">
                      {t(selectedCountry.nameKey)}
                    </h3>
                    <p className="text-navy-400 text-sm mt-1 max-w-xl">
                      {t(selectedCountry.descriptionKey)}
                    </p>
                  </div>
                </div>
              )}

              {/* Location cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedLocations.map((loc, i) => (
                  <motion.button
                    key={loc.id}
                    className="group relative rounded-card overflow-hidden text-left cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                    onClick={() =>
                      handleLocationClick(loc.countryId, loc.id)
                    }
                  >
                    <div className="relative h-48">
                      <img
                        src={loc.coverImage}
                        alt={t(loc.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="font-heading text-lg text-white group-hover:text-gold-300 transition-colors">
                          {t(loc.nameKey)}
                        </h4>
                        <div className="flex gap-2 mt-2">
                          {loc.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-stone-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* View country page link */}
              {selectedCountry && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => router.push(`/${selectedCountry.id}`)}
                    className="text-gold-500 hover:text-gold-400 font-medium transition-colors inline-flex items-center gap-2"
                  >
                    {t("common.readMore")} {t(selectedCountry.nameKey)}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
