import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { BagPhotoWarmup } from "@/components/bag-photo-warmup";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const THEME_BOOTSTRAP = `(function(){try{var s=localStorage.getItem("iac-theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:43147"),
  title: "Tu marca, rumbo al IAC 2026 | Daniel Cruz Cervantes",
  description:
    "22 posiciones en el equipaje de Daniel Adrian Elias Cruz Cervantes rumbo al International Astronautical Congress 2026 en Antalya, Turquía. México → Europa → IAC. Meta $14,999 MXN.",
  openGraph: {
    title: "Tu marca viaja conmigo al IAC 2026",
    description:
      "Patrocina un espacio en mi maleta hacia el IAC 2026 en Antalya. México → Europa → Turquía. SPEI o USDC.",
    type: "website",
    locale: "es_MX",
    siteName: "IAC 2026 Suitcase",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu marca, rumbo al IAC 2026",
    description: "22 spots en mi equipaje hacia Antalya. SPEI o USDC. Meta $14,999 MXN.",
    creator: "@tu-usuario",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <link rel="preload" as="image" href="/suitcase-front.png" type="image/png" fetchPriority="high" />
        <link rel="preload" as="image" href="/suitcase-side.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BagPhotoWarmup />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
