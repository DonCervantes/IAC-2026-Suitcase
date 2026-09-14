export const PLACE_IDS = ["mex", "mad", "ayt"] as const;

export type PlaceId = (typeof PLACE_IDS)[number];

export const PLACES: Record<PlaceId, { lat: number; lng: number }> = {
  mex: { lat: 19.4326, lng: -99.1332 },
  mad: { lat: 40.4168, lng: -3.7038 },
  ayt: { lat: 36.8969, lng: 30.7133 },
};

/** México → Europa → Antalya (IAC 2026) → México */
export const ROUTE_VISITS: PlaceId[] = ["mex", "mad", "ayt", "mex"];

export const OUTBOUND_HOPS = 2;

export type RoutePoint = {
  id: PlaceId;
  lat: number;
  lng: number;
};

export type RouteArc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  outbound: boolean;
  index: number;
};

export const ROUTE_POINTS: RoutePoint[] = PLACE_IDS.map((id) => ({
  id,
  ...PLACES[id],
}));

export const ROUTE_ARCS: RouteArc[] = ROUTE_VISITS.slice(0, -1).map((from, index) => {
  const to = ROUTE_VISITS[index + 1];
  return {
    startLat: PLACES[from].lat,
    startLng: PLACES[from].lng,
    endLat: PLACES[to].lat,
    endLng: PLACES[to].lng,
    outbound: index < OUTBOUND_HOPS,
    index,
  };
});

export function padStop(index: number) {
  return String(index + 1).padStart(2, "0");
}
