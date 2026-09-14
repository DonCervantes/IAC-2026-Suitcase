export const SITE = {
  name: "iac2026",
  creator: "Daniel Adrian Elias Cruz Cervantes",
  handle: "DonCervantes",
  x: "tu-usuario",
  xUrl: "https://x.com/",
  linkedinUrl: "https://www.linkedin.com/",
  instagramUrl: "https://www.instagram.com/",
  email: "tu-email@example.com",
  telegram: "tu-telegram",
  telegramUrl: "https://t.me/",
  phone: "",
  phoneDisplay: "próximamente",
  whatsappUrl: "https://wa.me/",
} as const;

export const PAYMENT_DEFAULTS = {
  sinpePhone: "",
  evm: "",
  stellar: "",
} as const;

export function getWallets() {
  const solana = process.env.NEXT_PUBLIC_USDC_SOLANA_ADDRESS?.trim() || "";
  const evm = process.env.NEXT_PUBLIC_USDC_BASE_ADDRESS?.trim() || PAYMENT_DEFAULTS.evm;
  const stellar =
    process.env.NEXT_PUBLIC_USDC_STELLAR_ADDRESS?.trim() || PAYMENT_DEFAULTS.stellar;
  const sinpe = process.env.NEXT_PUBLIC_SINPE_PHONE?.trim() || PAYMENT_DEFAULTS.sinpePhone;

  return {
    sinpe,
    evm,
    base: evm,
    stellar,
    solana,
    isDemo: !sinpe && !evm && !stellar,
  };
}

export function getPaymentVerifyMode(): "stub" | "indexer" {
  return process.env.PAYMENT_VERIFY_MODE === "indexer" ? "indexer" : "stub";
}

export function getHelioPayUrl() {
  return process.env.NEXT_PUBLIC_HELIO_PAY_URL?.trim() || "";
}

export const RESERVATION_MINUTES = 60;
export const SINPE_HOLD_HOURS = 48;
export const ARTWORK_MAX_BYTES = 2 * 1024 * 1024;
export const ARTWORK_ACCEPT =
  "image/png,image/webp,image/svg+xml,image/jpeg,.png,.webp,.svg,.jpg,.jpeg";
