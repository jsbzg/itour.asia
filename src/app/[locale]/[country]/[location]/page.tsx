import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { countries, getCountryById } from "@/data/countries";
import { locations, getLocationById, getLocationsByCountry } from "@/data/locations";
import { routing } from "@/i18n/routing";
import LocationPageContent from "./LocationPageContent";

export function generateStaticParams() {
  const params: { locale: string; country: string; location: string }[] = [];
  for (const locale of routing.locales) {
    for (const location of locations) {
      params.push({
        locale,
        country: location.countryId,
        location: location.id,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string; location: string }>;
}) {
  const { locale, country: countryId, location: locationId } = await params;
  const location = getLocationById(locationId);
  const country = getCountryById(countryId);
  if (!location || !country) return {};

  const t = await getTranslations({ locale });
  return {
    title: `${t(location.nameKey)}, ${t(country.nameKey)} - iTour.asia`,
    description: t(location.descriptionKey),
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; country: string; location: string }>;
}) {
  const { locale, country: countryId, location: locationId } = await params;
  const country = getCountryById(countryId);
  const location = getLocationById(locationId);

  if (!country || !location || location.countryId !== countryId) {
    notFound();
  }

  setRequestLocale(locale);

  return <LocationPageContent country={country} location={location} />;
}
