"use client";

import type { ReactNode } from "react";
import { CAMPAIGN, DONATIONS, PAPERS, SITE } from "@/lib/config";
import { useLanguage } from "./language-provider";
import { AnimatedLetters } from "./animated-letters";
import { BrandLogo } from "./brand-logo";
import { CopyButton } from "./copy-button";

export function Congress() {
  const { dict } = useLanguage();
  return (
    <section id="congreso" className="shell py-16 md:py-24">
      <p className="mono-label text-primary">{dict.congress.kicker}</p>
      <h2 className="mt-3 max-w-[22ch] text-[clamp(32px,8vw,56px)] font-semibold tracking-[-0.05em]">
        <AnimatedLetters text={dict.congress.title} />
      </h2>
      <p className="mt-4 max-w-[640px] text-muted-foreground">{dict.congress.intro}</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {dict.congress.items.map((item) => (
          <article key={item.n} className="rounded-2xl border border-border bg-card p-5">
            <span className="mono-label text-primary">{item.n}</span>
            <h3 className="mt-3 text-lg font-medium tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
      <a
        href={CAMPAIGN.congress.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-11 items-center rounded-full border border-border bg-card px-5 font-mono text-[10px] font-semibold tracking-[0.1em]"
      >
        {dict.congress.official}
      </a>
      <p className="mt-4 max-w-[52ch] text-sm text-muted-foreground">{dict.congress.note}</p>
    </section>
  );
}

export function Papers() {
  const { dict, locale } = useLanguage();
  return (
    <section id="trabajos" className="shell py-16 md:py-24">
      <p className="mono-label text-primary">{dict.papers.kicker}</p>
      <h2 className="mt-3 max-w-[16ch] text-[clamp(32px,8vw,56px)] font-semibold tracking-[-0.05em]">
        <AnimatedLetters text={dict.papers.title} />
      </h2>
      <div className="mt-8 grid gap-4">
        {PAPERS.map((paper) => {
          const keywords = dict.papers.keywordLists[paper.id];
          return (
            <article key={paper.id} className="rounded-[28px] border border-border bg-card p-6 md:p-10">
              <p className="mono-label text-primary">{paper.code}</p>
              <h3 className="mt-3 text-[clamp(24px,4vw,36px)] font-semibold tracking-tight">{paper.title}</h3>
              <p className="mt-3 max-w-[60ch] text-muted-foreground">{paper.subtitle}</p>
              <p className="mt-5 text-sm">{locale === "en" ? paper.authorsEn : paper.authors}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {dict.papers.affiliation}: {paper.affiliation}
              </p>
              <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-muted-foreground">
                {dict.papers.bodies[paper.id]}
              </p>
              {keywords ? (
                <p className="mt-4 max-w-[62ch] text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{dict.papers.keywords}:</span> {keywords}
                </p>
              ) : null}
              {paper.abstractUrl ? (
                <a
                  href={paper.abstractUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-5 font-mono text-[10px] font-semibold tracking-[0.1em] text-background"
                >
                  {dict.papers.abstract}
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Story() {
  const { dict } = useLanguage();
  return (
    <section id="historia" className="shell py-16 md:py-24">
      <div className="overflow-hidden rounded-[28px] border border-border bg-card md:grid md:grid-cols-[0.9fr_1.1fr]">
        <figure className="relative min-h-[340px] bg-muted md:min-h-[560px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt={dict.story.photoAlt}
            width={853}
            height={852}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%] grayscale contrast-[1.05]"
          />
        </figure>
        <div className="flex flex-col justify-center p-6 md:p-12">
          <p className="mono-label text-primary">{dict.story.kicker}</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(30px,7vw,48px)] font-semibold tracking-[-0.05em]">
            <AnimatedLetters text={dict.story.title} />
          </h2>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted-foreground">{dict.story.p1}</p>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted-foreground">{dict.story.p2}</p>
        </div>
      </div>
    </section>
  );
}

function AddressCard({
  title,
  hint,
  value,
  copyLabel,
  extra,
  inactive = false,
}: {
  title: string;
  hint: string;
  value: string;
  copyLabel: string;
  extra?: ReactNode;
  inactive?: boolean;
}) {
  const { dict } = useLanguage();
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        {inactive ? (
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
            {dict.donate.inactive}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{hint}</p>
      <p className="mt-4 break-all font-mono text-[13px] leading-relaxed">{value}</p>
      {extra}
      <div className="mt-5">
        <CopyButton value={value} label={copyLabel} />
      </div>
    </article>
  );
}

export function Donate() {
  const { dict } = useLanguage();
  return (
    <section id="donar" className="shell py-16 md:py-24">
      <p className="mono-label text-primary">{dict.donate.kicker}</p>
      <h2 className="mt-3 text-[clamp(32px,8vw,56px)] font-semibold tracking-[-0.05em]">
        <AnimatedLetters text={dict.donate.title} />
      </h2>
      <p className="mt-4 max-w-[640px] text-muted-foreground">{dict.donate.intro}</p>
      <a
        href={CAMPAIGN.gofundme}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-12 items-center rounded-full bg-foreground px-6 font-mono text-[11px] font-semibold tracking-[0.1em] text-background"
      >
        {dict.donate.gofundme}
      </a>

      <p className="mono-label mt-16 text-primary">{dict.donate.direct}</p>
      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <AddressCard
          title={dict.donate.speiTitle}
          hint={dict.donate.speiHint}
          value={DONATIONS.speiClabe}
          copyLabel={dict.donate.speiCopy}
        />
        <AddressCard
          title={dict.donate.solanaTitle}
          hint={dict.donate.solanaHint}
          value={DONATIONS.solana}
          copyLabel={dict.donate.solanaCopy}
        />
        <AddressCard
          title={dict.donate.stellarTitle}
          hint={dict.donate.stellarHint}
          value={DONATIONS.stellar}
          copyLabel={dict.donate.stellarCopy}
          extra={
            <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-4">
              <p className="font-medium text-foreground">{dict.donate.stellarMemoNote}</p>
              <p className="mt-2 font-mono text-2xl tracking-[0.12em] text-primary">{DONATIONS.stellarMemo}</p>
              <div className="mt-3">
                <CopyButton value={DONATIONS.stellarMemo} label={dict.donate.memoCopy} />
              </div>
            </div>
          }
        />
        <AddressCard
          title={dict.donate.evmTitle}
          hint={dict.donate.evmHint}
          value={DONATIONS.evm}
          copyLabel={dict.donate.evmCopy}
          inactive={!DONATIONS.evmEnabled}
        />
      </div>
    </section>
  );
}

export function Closing() {
  const { dict } = useLanguage();
  return (
    <section className="shell pb-28 pt-8 text-center md:pb-24 md:pt-12">
      <p className="mono-label text-primary">{dict.cta.kicker}</p>
      <h2 className="mx-auto mt-4 max-w-[18ch] text-[clamp(36px,9vw,64px)] font-semibold tracking-[-0.05em]">
        <AnimatedLetters text={dict.cta.title} />
      </h2>
      <p className="mx-auto mt-4 max-w-[52ch] text-muted-foreground">{dict.cta.body}</p>
      <p className="mx-auto mt-4 max-w-[52ch] text-muted-foreground">{dict.cta.thanks}</p>
      <p className="mt-8 font-medium">{dict.cta.sign}</p>
      <p className="mono-label mt-1">{dict.cta.role}</p>
      <a
        href="#donar"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 font-mono text-[11px] font-semibold tracking-[0.1em] text-background"
      >
        {dict.cta.support}
      </a>
    </section>
  );
}

export function Footer() {
  const { dict } = useLanguage();
  const links = [
    SITE.xUrl ? { href: SITE.xUrl, label: "X" } : null,
    SITE.instagramUrl ? { href: SITE.instagramUrl, label: "Instagram" } : null,
    SITE.linkedinUrl ? { href: SITE.linkedinUrl, label: "LinkedIn" } : null,
    SITE.email ? { href: `mailto:${SITE.email}`, label: "Email" } : null,
  ].filter((item): item is { href: string; label: string } => Boolean(item));

  return (
    <footer className="shell flex flex-wrap items-center justify-between gap-4 border-t border-border py-8 pb-28 font-mono text-[11px] text-muted-foreground md:pb-8">
      <span className="inline-flex items-center gap-2 tracking-[0.14em] text-foreground">
        <span className="inline-flex h-6 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <BrandLogo className="h-4 w-4" />
        </span>
        {SITE.publicName}
      </span>
      {links.length ? (
        <nav className="flex gap-5">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      ) : (
        <span>{SITE.affiliation}</span>
      )}
      <span>{dict.footer.trip}</span>
    </footer>
  );
}
