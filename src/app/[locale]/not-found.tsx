"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="flex-1 flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <h1 className="font-heading text-6xl text-navy-700 mb-4">404</h1>
        <p className="text-navy-400 text-lg mb-8">
          {t("home.hero.subtitle")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-800 px-6 py-3 rounded-button font-semibold transition-colors"
        >
          {t("common.back")} {t("nav.home")}
        </Link>
      </div>
    </main>
  );
}
