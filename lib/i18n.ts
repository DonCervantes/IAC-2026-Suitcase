import type { Face, Locale } from "./types";
import { copy as legacyCopy } from "./i18n-legacy";

const campaign = {
  es: {
    metaTitle: "De México al IAC 2026 | Elias Cervantes",
    metaDescription:
      "Ayuda a Elias Cervantes, estudiante de Ingeniería Aeroespacial en la UNAM, a participar en el International Astronautical Congress 2026 en Antalya.",
    nav: {
      home: "INICIO",
      congress: "CONGRESO",
      papers: "TRABAJOS",
      story: "MI HISTORIA",
      donate: "DONAR",
      support: "APOYAR",
    },
    theme: {
      toDark: "Noche",
      toLight: "Día",
    },
    hero: {
      kicker: "IAC 2026 · ANTALYA · 5–9 OCT",
      titleA: "De México",
      titleB: "al",
      titleAccent: "IAC 2026",
      lede: "Ayúdame a llegar al IAC.",
      subtitle:
        "Soy Elias Cervantes, estudiante de Ingeniería Aeroespacial en la UNAM. Estoy recaudando fondos para participar en el International Astronautical Congress 2026 y compartir nuestro trabajo con la comunidad espacial internacional.",
      dates: "Antalya, Turquía · 5–9 de octubre de 2026",
      cta: "Apoyar mi viaje",
      secondary: "Conocer los trabajos",
    },
    congress: {
      kicker: "el congreso",
      title: "77th International Astronautical Congress",
      intro:
        "El congreso reúne a estudiantes, investigadores, ingenieros, empresas y agencias espaciales para compartir avances y discutir el futuro del sector espacial.",
      official: "Sitio oficial del IAC 2026",
      items: [
        { n: "01", title: "Fechas", body: "Del 5 al 9 de octubre de 2026." },
        { n: "02", title: "Ciudad", body: "Antalya, Türkiye (Turquía)." },
        { n: "03", title: "Sede", body: "NEST Congress & Exhibition Center, Belek, Antalya." },
        { n: "04", title: "Organizador", body: "International Astronautical Federation (IAF)." },
        { n: "05", title: "Lema", body: "The World Needs More Space." },
      ],
      note: "Esta campaña es independiente. La UNAM y el IAC no son patrocinadores.",
    },
    papers: {
      kicker: "trabajos académicos",
      title: "Qué vamos a presentar",
      affiliation: "Afiliación",
      code: "Código",
      abstract: "Ver abstract en el directorio del IAC",
      keywords: "Palabras clave",
      bodies: {
        societal:
          "El trabajo examina la evidencia sobre los efectos sociales del vuelo espacial comercial mediante casos de reutilización de vehículos, materiales, servicios satelitales y educación universitaria. Analiza tanto sus aplicaciones como las limitaciones para demostrar beneficios sociales y atribuirlos a estas actividades.",
        honeycomb:
          "Las cargas dinámicas del lanzamiento y las microvibraciones en órbita afectan la precisión de instrumentos sensibles, como sistemas ópticos y sensores. El trabajo evalúa paneles sándwich de panal (honeycomb) como plataformas de aislamiento pasivo, comparando núcleos hexagonales, de densidad gradual y auxéticos mediante diseño CAD paramétrico y análisis por elementos finitos (modal y armónico). Los resultados preliminares indican que las topologías de densidad variable y auxéticas reducen los picos de transmisibilidad y absorben más energía sin sacrificar la relación resistencia-peso.",
      },
      keywordLists: {
        societal: "",
        honeycomb:
          "Microdinámica, atenuación de vibraciones, estructuras honeycomb, análisis modal, cargas útiles de naves espaciales",
      },
    },
    story: {
      kicker: "mi historia",
      title: "De las aulas al Congreso",
      photoAlt: "Elias Cervantes, Ingeniería Aeroespacial UNAM",
      p1: "Mi formación combina mecánica orbital, sistemas satelitales, simulación y programación aplicada a la ingeniería. Me interesa desarrollar herramientas que acerquen el análisis de misiones espaciales a más estudiantes.",
      p2: "Participar en el IAC es una oportunidad para presentar nuestro trabajo, recibir retroalimentación y aprender de personas que desarrollan proyectos espaciales en distintas partes del mundo.",
    },
    donate: {
      kicker: "meta $14,999 MXN",
      title: "Cómo apoyar",
      intro:
        "Las aportaciones apoyarán los gastos de participación, principalmente el traslado y la inscripción al congreso. La meta representa una contribución al costo del viaje.",
      gofundme: "Apoyar en GoFundMe",
      direct: "Donar directamente",
      speiTitle: "Pesos mexicanos — SPEI",
      speiHint: "Moneda: MXN.",
      speiCopy: "Copiar CLABE",
      solanaTitle: "Solana — USDC / USDT",
      solanaHint: "Red: Solana. Activos indicados: USDC y USDT.",
      solanaCopy: "Copiar dirección Solana",
      stellarTitle: "Stellar — USDC",
      stellarHint: "Red: Stellar. Activo: USDC.",
      stellarMemoNote: "Incluye el memo 2771 al realizar tu transferencia.",
      stellarCopy: "Copiar dirección Stellar",
      memoCopy: "Copiar memo",
      evmTitle: "Activos EVM",
      evmHint: "Redes y activos admitidos: pendientes de confirmar. Esta opción no está activa para donaciones.",
      evmCopy: "Copiar dirección EVM",
      copied: "Copiado",
      inactive: "No activa",
    },
    cta: {
      kicker: "cierre",
      title: "Tu apoyo también forma parte de este viaje.",
      body: "Cualquier aportación ayuda. También puedes apoyar compartiendo esta campaña con personas interesadas en ciencia, ingeniería y educación.",
      thanks: "Gracias por acompañarme en este paso de mi formación profesional.",
      sign: "Elias Cervantes",
      role: "Ingeniería Aeroespacial · Facultad de Ingeniería, UNAM",
      support: "APOYAR MI VIAJE",
    },
    footer: {
      trip: "México → IAC 2026",
    },
    route: {
      kicker: "el recorrido",
      title: "México, Europa, Antalya",
      body: "El globo muestra el arco del viaje: Ciudad de México, una escala en Europa y el IAC 2026 en Antalya.",
      hint: "Arrastra · zoom con la rueda · toca una parada",
      zoomIn: "Acercar el mundo",
      zoomOut: "Alejar el mundo",
      play: "RECORRER RUTA",
      pause: "PAUSAR",
      stops: [
        { city: "Ciudad de México", region: "México", note: "Salida" },
        { city: "Madrid", region: "España", note: "Escala Europa" },
        { city: "Antalya", region: "Turquía", note: "IAC 2026" },
        { city: "Ciudad de México", region: "México", note: "Vuelta" },
      ],
    },
  },
  en: {
    metaTitle: "From Mexico to IAC 2026 | Elias Cervantes",
    metaDescription:
      "Help Elias Cervantes, an Aerospace Engineering student at UNAM, take part in the International Astronautical Congress 2026 in Antalya.",
    nav: {
      home: "HOME",
      congress: "CONGRESS",
      papers: "PAPERS",
      story: "MY STORY",
      donate: "DONATE",
      support: "SUPPORT",
    },
    theme: {
      toDark: "Night",
      toLight: "Day",
    },
    hero: {
      kicker: "IAC 2026 · ANTALYA · 5–9 OCT",
      titleA: "From Mexico",
      titleB: "to",
      titleAccent: "IAC 2026",
      lede: "Help me get to the IAC.",
      subtitle:
        "I'm Elias Cervantes, an Aerospace Engineering student at UNAM. I am raising funds to take part in the International Astronautical Congress 2026 and share our work with the international space community.",
      dates: "Antalya, Turkey · 5–9 October 2026",
      cta: "Support my trip",
      secondary: "See the papers",
    },
    congress: {
      kicker: "the congress",
      title: "77th International Astronautical Congress",
      intro:
        "The congress brings together students, researchers, engineers, companies and space agencies to share progress and discuss the future of the space sector.",
      official: "Official IAC 2026 website",
      items: [
        { n: "01", title: "Dates", body: "5–9 October 2026." },
        { n: "02", title: "City", body: "Antalya, Türkiye (Turkey)." },
        { n: "03", title: "Venue", body: "NEST Congress & Exhibition Center, Belek, Antalya." },
        { n: "04", title: "Organizer", body: "International Astronautical Federation (IAF)." },
        { n: "05", title: "Motto", body: "The World Needs More Space." },
      ],
      note: "This campaign is independent. UNAM and IAC are not sponsors.",
    },
    papers: {
      kicker: "academic work",
      title: "What we will present",
      affiliation: "Affiliation",
      code: "Code",
      abstract: "View abstract in the IAC directory",
      keywords: "Keywords",
      bodies: {
        societal:
          "The paper examines evidence on the social effects of commercial spaceflight through cases of vehicle reuse, materials, satellite services and university education. It analyzes both applications and the limits of demonstrating social benefits and attributing them to these activities.",
        honeycomb:
          "Launch loads and on-orbit micro-vibrations degrade the precision of sensitive payloads such as optical systems and sensors. The paper evaluates honeycomb sandwich panels as passive isolation platforms, comparing hexagonal, gradient-density and auxetic cores through parametric CAD design and finite element analysis (modal and harmonic). Preliminary results suggest that variable-density and auxetic topologies reduce transmissibility peaks and absorb more energy without compromising the strength-to-weight ratio.",
      },
      keywordLists: {
        societal: "",
        honeycomb:
          "Microdynamics, Vibration Attenuation, Honeycomb Structures, Modal Analysis, Spacecraft Payloads",
      },
    },
    story: {
      kicker: "my story",
      title: "From the classroom to the Congress",
      photoAlt: "Elias Cervantes, UNAM Aerospace Engineering",
      p1: "My training combines orbital mechanics, satellite systems, simulation and programming applied to engineering. I want to build tools that bring mission analysis closer to more students.",
      p2: "Taking part in the IAC is a chance to present our work, receive feedback and learn from people developing space projects around the world.",
    },
    donate: {
      kicker: "goal $14,999 MXN",
      title: "How to support",
      intro:
        "Contributions will help cover participation costs, mainly travel and congress registration. The goal is a contribution toward the cost of the trip.",
      gofundme: "Support on GoFundMe",
      direct: "Donate directly",
      speiTitle: "Mexican pesos — SPEI",
      speiHint: "Currency: MXN.",
      speiCopy: "Copy CLABE",
      solanaTitle: "Solana — USDC / USDT",
      solanaHint: "Network: Solana. Indicated assets: USDC and USDT.",
      solanaCopy: "Copy Solana address",
      stellarTitle: "Stellar — USDC",
      stellarHint: "Network: Stellar. Asset: USDC.",
      stellarMemoNote: "Include memo 2771 when you send the transfer.",
      stellarCopy: "Copy Stellar address",
      memoCopy: "Copy memo",
      evmTitle: "EVM assets",
      evmHint: "Accepted networks and assets are still to be confirmed. This option is not active for donations.",
      evmCopy: "Copy EVM address",
      copied: "Copied",
      inactive: "Inactive",
    },
    cta: {
      kicker: "closing",
      title: "Your support is also part of this trip.",
      body: "Any contribution helps. You can also support by sharing this campaign with people interested in science, engineering and education.",
      thanks: "Thank you for walking with me in this step of my professional training.",
      sign: "Elias Cervantes",
      role: "Aerospace Engineering · School of Engineering, UNAM",
      support: "SUPPORT MY TRIP",
    },
    footer: {
      trip: "Mexico → IAC 2026",
    },
    route: {
      kicker: "the route",
      title: "Mexico, Europe, Antalya",
      body: "The globe shows the trip arc: Mexico City, a Europe stopover and IAC 2026 in Antalya.",
      hint: "Drag · scroll to zoom · tap a stop",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      play: "PLAY ROUTE",
      pause: "PAUSE",
      stops: [
        { city: "Mexico City", region: "Mexico", note: "Departure" },
        { city: "Madrid", region: "Spain", note: "Europe stopover" },
        { city: "Antalya", region: "Turkey", note: "IAC 2026" },
        { city: "Mexico City", region: "Mexico", note: "Return" },
      ],
    },
  },
} as const;

function mergeLocale(locale: Locale) {
  const base = legacyCopy[locale];
  const extra = campaign[locale];
  return {
    ...base,
    ...extra,
    nav: { ...base.nav, ...extra.nav },
    hero: { ...base.hero, ...extra.hero },
    cta: { ...base.cta, ...extra.cta },
    footer: { ...base.footer, ...extra.footer },
  };
}

export const copy = {
  es: mergeLocale("es"),
  en: mergeLocale("en"),
};

export function t(locale: Locale) {
  return copy[locale];
}

export function faceLabel(locale: Locale, face: Face, preview = false) {
  const dict = legacyCopy[locale].faces;
  if (face === "back" && preview) return dict.backPreview;
  return dict[face];
}
