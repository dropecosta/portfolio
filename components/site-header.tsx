"use client";

import Link from "next/link";
// import { CommandMenu } from "@/components/command-menu";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t } = useLanguage();
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
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-normal">
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
          {/* <CommandMenu /> */}
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/contacto">{t.nav.contact}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
