"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const next = locale === "pt" ? "en" : "pt";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={t.nav.switchLanguage}
      title={`${t.nav.switchLanguage}: ${next.toUpperCase()}`}
      onClick={() => setLocale(next)}
    >
      <Languages className="h-4 w-4" />
      <span className="sr-only">{t.nav.switchLanguage}</span>
    </Button>
  );
}
