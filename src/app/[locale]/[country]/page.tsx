import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { countries, getCountryById } from "@/data/countries";
import { getLocationsByCountry } from "@/data/locations";
import { routing } from "@/i18n/routing";
import CountryPageContent from "./CountryPageContent";

export function generateStaticParams() {
  const params: { locale: string; country: string }[] = [];
  for (const locale of routing.locales) {
    for (const country of countries) {
      params.push({ locale, country: country.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country: countryId } = await params;
  const country = getCountryById(countryId);
  if (!country) return {};

  const t = await getTranslations({ locale });
  return {
    title: `${t(country.nameKey)} - iTour.asia`,
    description: t(country.descriptionKey),
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country: countryId } = await params;
  const country = getCountryById(countryId);

  if (!country) {
    notFound();
  }

  setRequestLocale(locale);
  const locations = getLocationsByCountry(countryId);

  return <CountryPageContent country={country} locations={locations} />;
}
