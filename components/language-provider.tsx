"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary, normalizeLocale, type Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionary)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = normalizeLocale(window.localStorage.getItem("locale"));
    const browser = window.navigator.languages
      .map((language) => normalizeLocale(language))
      .find(Boolean);
    setLocaleState(stored || browser || "pt");
  }, []);

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem("locale", nextLocale);
    document.documentElement.lang = nextLocale === "pt" ? "pt-PT" : "en";
    setLocaleState(nextLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t: dictionary[locale] }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
