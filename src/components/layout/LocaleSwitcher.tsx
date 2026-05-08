"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, { label: string; flag: string }> = {
  en: { label: "EN", flag: "🇬🇧" },
  "zh-CN": { label: "中文", flag: "🇨🇳" },
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-stone-200 hover:text-gold-300 transition-colors px-2 py-1.5 rounded-md hover:bg-white/10"
      >
        <span className="text-base">{localeLabels[locale]?.flag}</span>
        <span className="text-xs font-medium tracking-wide">{localeLabels[locale]?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50">
          <div className="rounded-lg overflow-hidden shadow-xl bg-white/95 backdrop-blur-md min-w-[120px]">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                  loc === locale
                    ? "text-gold-600 bg-gold-50"
                    : "text-navy-600 hover:text-gold-600 hover:bg-stone-50"
                }`}
              >
                <span className="text-base">{localeLabels[loc]?.flag}</span>
                <span className="font-medium">{localeLabels[loc]?.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
