"use client";

import { useTranslations } from "next-intl";
import { getFeaturedCountries } from "@/data/countries";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedCountries() {
  const t = useTranslations();
  const featured = getFeaturedCountries();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={t("home.featured.title")}
          subtitle={t("home.featured.subtitle")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((country, i) => (
            <FadeIn key={country.id} delay={i * 0.1}>
              <Card
                title={t(country.nameKey)}
                description={t(country.descriptionKey)}
                image={country.coverImage}
                href={`/${country.id}`}
                flag={country.flagEmoji}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
