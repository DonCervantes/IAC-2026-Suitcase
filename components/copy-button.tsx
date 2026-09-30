"use client";

import { useState } from "react";
import { useLanguage } from "./language-provider";

export function CopyButton({
  value,
  label,
  disabled = false,
}: {
  value: string;
  label: string;
  disabled?: boolean;
}) {
  const { dict } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (disabled) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      disabled={disabled}
      className="inline-flex min-h-10 items-center rounded-full bg-foreground px-4 font-mono text-[10px] font-semibold tracking-[0.1em] text-background disabled:cursor-not-allowed disabled:opacity-40"
    >
      {copied ? dict.donate.copied : label}
    </button>
  );
}
