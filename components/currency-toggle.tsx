"use client";

import { useCurrency } from "./currency-provider";
import { useLanguage } from "./language-provider";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();
  const { dict } = useLanguage();

  return (
    <div
      role="group"
      aria-label={dict.currency.label}
      className="flex overflow-hidden rounded-full border border-border bg-card"
    >
      {(
        [
          { id: "usd", short: "$", label: dict.currency.usd },
          { id: "mxn", short: "MX$", label: dict.currency.mxn },
        ] as const
      ).map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setCurrency(option.id)}
          aria-pressed={currency === option.id}
          aria-label={option.id === "usd" ? dict.currency.usdName : dict.currency.mxnName}
          title={option.id === "usd" ? dict.currency.usdName : dict.currency.mxnName}
          className={`min-h-11 px-2.5 font-mono text-[10px] font-semibold tracking-[0.12em] ${
            currency === option.id ? "bg-foreground text-background" : "text-muted-foreground"
          }`}
        >
          <span className="sm:hidden">{option.short}</span>
          <span className="hidden sm:inline">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
