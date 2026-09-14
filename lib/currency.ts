import type { Currency } from "./types";

/** Display rate for MXN. Catalog prices stay in USD. */
export const USD_MXN_RATE = 18.5;
export const MXN_ROUND = 10;

export function usdToMxn(usd: number) {
  const raw = usd * USD_MXN_RATE;
  return Math.round(raw / MXN_ROUND) * MXN_ROUND;
}

export function formatMoney(usd: number, currency: Currency) {
  if (currency === "usd") return `$${usd}`;
  const mxn = String(usdToMxn(usd));
  const grouped = mxn.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `MX$${grouped}`;
}
