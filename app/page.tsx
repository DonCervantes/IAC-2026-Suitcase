import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { StickyCta } from "@/components/sticky-cta";
import { Closing, Congress, Donate, Footer, Papers, Story } from "@/components/campaign-sections";
import { RouteMap } from "@/components/route-map";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <Congress />
        <section className="shell py-16 md:py-24">
          <RouteMap />
        </section>
        <Papers />
        <Story />
        <Donate />
        <Closing />
      </main>
      <Footer />
      <StickyCta />
    </LanguageProvider>
  );
}
