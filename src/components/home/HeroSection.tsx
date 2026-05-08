"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.08] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-800/70 via-navy-700/50 to-navy-800/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            {t("title")}
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href="/#map" size="lg">
            {t("cta")}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-10 text-white/50" fill="none" viewBox="0 0 24 40" stroke="currentColor">
          <rect x="1" y="1" width="22" height="38" rx="11" strokeWidth="2" />
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            animate={{ cy: [10, 26, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
