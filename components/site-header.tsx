"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CommandMenu } from "@/components/command-menu";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = [
    [t.nav.about, "/sobre"],
    [t.nav.projects, "/projetos"],
    [t.nav.experience, "/experiencia"],
    [t.nav.skills, "/skills"],
    [t.nav.blog, "/blog"]
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-normal" onClick={() => setMobileOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm text-primary-foreground">PR</span>
          <span>Pedro Reis</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CommandMenu />
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contacto">{t.nav.contact}</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {mobileOpen ? (
        <div className="border-t border-border/70 bg-background/95 px-4 py-4 shadow-glow lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            <CommandMenu buttonClassName="flex h-10 w-full justify-start md:flex" />
            <nav className="grid gap-1">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
              >
                {t.nav.contact}
              </Link>
            </nav>
            <div className="flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs text-muted-foreground">Preferencias</span>
              <div className="flex items-center gap-1">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
