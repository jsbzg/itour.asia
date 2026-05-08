export interface Country {
  id: string;
  nameKey: string;
  descriptionKey: string;
  svgPathId: string;
  geoCoordinates: { lat: number; lng: number };
  coverImage: string;
  flagEmoji: string;
  featured: boolean;
  locations: string[];
}

export interface Location {
  id: string;
  countryId: string;
  nameKey: string;
  descriptionKey: string;
  guideKey: string;
  coverImage: string;
  coordinates: { lat: number; lng: number };
  tags: string[];
  featured: boolean;
}

export interface PhotoRef {
  id: string;
  src: string;
  altKey: string;
  captionKey: string;
  width: number;
  height: number;
  category: "landscape" | "culture" | "food" | "architecture" | "nature";
}
