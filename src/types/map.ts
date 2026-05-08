export type DrillLevel = "continent" | "country";

export interface MapState {
  level: DrillLevel;
  selectedCountryId: string | null;
  hoveredCountryId: string | null;
}
