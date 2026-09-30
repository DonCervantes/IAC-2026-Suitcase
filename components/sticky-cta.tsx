"use client";

import { CAMPAIGN } from "@/lib/config";
import { useLanguage } from "./language-provider";

export function StickyCta() {
  const { dict } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="mono-label">{CAMPAIGN.goalLabel}</p>
          <p className="truncate text-sm font-medium">{dict.hero.dates}</p>
        </div>
        <a
          href="#donar"
          className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-foreground px-5 font-mono text-[11px] font-semibold tracking-[0.1em] text-background"
        >
          {dict.nav.support}
        </a>
      </div>
    </div>
  );
}
