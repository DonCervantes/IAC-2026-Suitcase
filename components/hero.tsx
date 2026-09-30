"use client";

import { useLanguage } from "./language-provider";
import { AnimatedLetters } from "./animated-letters";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section id="inicio" className="hero-blueprint">
      <div className="shell grid items-center gap-10 pb-10 pt-8 md:grid-cols-2 lg:gap-12 lg:pb-16 lg:pt-12">
        <div className="text-left">
          <p className="anim-fade-up mono-label text-primary">{dict.hero.kicker}</p>
          <h1 className="headline mt-4 max-w-[16ch] text-[clamp(40px,9vw,72px)] font-semibold leading-[0.92] tracking-[-0.055em]">
            <AnimatedLetters
              parts={[
                { text: dict.hero.titleA },
                { text: dict.hero.titleB },
                { text: dict.hero.titleAccent, accent: true },
              ]}
            />
          </h1>
          <p
            className="anim-fade-up mt-5 max-w-[28ch] text-[18px] font-medium leading-snug md:text-[22px]"
            style={{ animationDelay: "160ms" }}
          >
            {dict.hero.lede}
          </p>
          <p
            className="anim-fade-up mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted-foreground md:text-[18px]"
            style={{ animationDelay: "220ms" }}
          >
            {dict.hero.subtitle}
          </p>
          <p className="anim-fade-up mt-5 font-mono text-[11px] font-semibold tracking-[0.08em] text-primary">
            {dict.hero.dates}
          </p>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row">
            <a
              href="#donar"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 font-mono text-[11px] font-semibold tracking-[0.1em] text-background"
            >
              {dict.hero.cta}
            </a>
            <a
              href="#trabajos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 font-mono text-[11px] font-semibold tracking-[0.1em]"
            >
              {dict.hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-border bg-card md:min-h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt={dict.story.photoAlt}
            width={853}
            height={852}
            className="absolute inset-0 h-full w-full object-cover object-[center_18%] grayscale contrast-[1.05]"
          />
        </div>
      </div>
    </section>
  );
}
