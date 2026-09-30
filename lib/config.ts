export const SITE = {
  name: "elias",
  publicName: "Elias Cervantes",
  creator: "Daniel Adrian Elias Cruz Cervantes",
  affiliation: "Ingeniería Aeroespacial · Facultad de Ingeniería, UNAM",
  handle: "DonCervantes",
  x: "",
  xUrl: "",
  linkedinUrl: "",
  instagramUrl: "",
  email: "",
  telegram: "",
  telegramUrl: "",
  phone: "",
  phoneDisplay: "",
  whatsappUrl: "",
} as const;

export const CAMPAIGN = {
  goalMxn: 14999,
  goalLabel: "$14,999 MXN",
  congress: {
    name: "77th International Astronautical Congress — IAC 2026",
    dates: "5–9 de octubre de 2026",
    datesEn: "5–9 October 2026",
    city: "Antalya, Türkiye",
    venue: "NEST Congress & Exhibition Center, Belek, Antalya",
    organizer: "International Astronautical Federation (IAF)",
    motto: "The World Needs More Space",
    url: "https://www.iac2026.org/",
  },
  gofundme:
    "https://www.gofundme.com/f/de-mexico-al-international-astronautical-congress-2026",
  updated: "2026-09-30",
} as const;

export const DONATIONS = {
  speiClabe: "710969000247143106",
  solana: "9oa2hMvftuEvJ7Fx2GSXsJCkTe73dxyRiwvR1it9yqPo",
  stellar: "GCQRIRNBBXZ6PCX7EGX5NDZBHS6X22TSHR5ANU77LBLQHAPPQS4X7GIG",
  stellarMemo: "2771",
  evm: "0xc1d5c3f7dec3362ebec85b46723a86d9de36b4f0",
  evmEnabled: false,
} as const;

export const PAPERS = [
  {
    id: "societal",
    title: "The Societal Impact of Commercial Spaceflight",
    subtitle:
      "A Critical Review of Technology Transfer, Satellite Services, and University Education.",
    authors: "Diego Hernández y Elias Cervantes",
    authorsEn: "Diego Hernández and Elias Cervantes",
    affiliation: "Facultad de Ingeniería, Universidad Nacional Autónoma de México",
    code: "IAC-26,E5,IP,13,x116987",
    abstractUrl: "",
  },
  {
    id: "honeycomb",
    title: "Vibration Attenuation in Honeycombs Structures",
    subtitle:
      "IAF Materials and Structures Symposium (C2) · Interactive Presentations (IP)",
    authors: "Diego Hernández y Elias Cervantes",
    authorsEn: "Diego Hernández and Elias Cervantes",
    affiliation: "Facultad de Ingeniería, Universidad Nacional Autónoma de México",
    code: "IAC-26,C2,IP,64,x116963",
    abstractUrl: "",
  },
] as const;

export const PAYMENT_DEFAULTS = {
  sinpePhone: DONATIONS.speiClabe,
  evm: DONATIONS.evm,
  stellar: DONATIONS.stellar,
} as const;

export function getWallets() {
  return {
    sinpe: DONATIONS.speiClabe,
    evm: DONATIONS.evm,
    base: DONATIONS.evm,
    stellar: DONATIONS.stellar,
    solana: DONATIONS.solana,
    isDemo: false,
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
