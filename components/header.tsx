"use client";

import { SITE } from "@/lib/config";
import { useLanguage } from "./language-provider";
import { ThemeToggle } from "./theme-toggle";
import { BrandLogo } from "./brand-logo";

export function Header() {
  const { locale, setLocale, dict } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between gap-3 md:h-16">
        <a href="#main" className="flex items-center gap-2 text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BrandLogo className="h-5 w-5" />
          </span>
          <span className="font-mono text-[13px] font-black tracking-[0.16em] lowercase">
            {SITE.name}
          </span>
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          <a className="mono-label hover:text-foreground" href="#inicio">
            {dict.nav.home}
          </a>
          <a className="mono-label hover:text-foreground" href="#congreso">
            {dict.nav.congress}
          </a>
          <a className="mono-label hover:text-foreground" href="#trabajos">
            {dict.nav.papers}
          </a>
          <a className="mono-label hover:text-foreground" href="#historia">
            {dict.nav.story}
          </a>
          <a className="mono-label hover:text-foreground" href="#donar">
            {dict.nav.donate}
          </a>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle toDark={dict.theme.toDark} toLight={dict.theme.toLight} />
          <div className="flex overflow-hidden rounded-full border border-border bg-card">
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`min-h-11 px-2.5 font-mono text-[10px] font-semibold tracking-[0.12em] ${
                  locale === code ? "bg-foreground text-background" : "text-muted-foreground"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#donar"
            className="hidden min-h-9 items-center rounded-full bg-foreground px-4 font-mono text-[10px] font-semibold tracking-[0.1em] text-background sm:inline-flex"
          >
            {dict.nav.support}
          </a>
        </div>
      </div>
    </header>
  );
}
