import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "De México al IAC 2026 | Elias Cervantes",
  description:
    "Ayuda a Elias Cervantes, estudiante de Ingeniería Aeroespacial en la UNAM, a participar en el International Astronautical Congress 2026 en Antalya.",
  openGraph: {
    title: "De México al IAC 2026",
    description:
      "Recaudación para participar en el IAC 2026 en Antalya. Meta $14,999 MXN. SPEI, Solana o Stellar.",
    type: "website",
    locale: "es_MX",
    siteName: "Elias Cervantes · IAC 2026",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "De México al IAC 2026",
    description: "Apoya la participación de Elias Cervantes en el IAC 2026. Meta $14,999 MXN.",
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
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
