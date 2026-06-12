"use client";

import { Command } from "cmdk";
import { Briefcase, FileText, Home, Mail, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const items = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/sobre", label: t.nav.about, icon: UserRound },
    { href: "/projetos", label: t.nav.projects, icon: Briefcase },
    { href: "/experiencia", label: t.nav.experience, icon: Briefcase },
    { href: "/skills", label: t.nav.skills, icon: Search },
    { href: "/blog", label: t.nav.blog, icon: FileText },
    { href: "/contacto", label: t.nav.contact, icon: Mail }
  ];

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-muted-foreground transition hover:text-foreground md:inline-flex"
      >
        <Search className="h-4 w-4" />
        {t.nav.search}
        <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</kbd>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-background/70 p-4 backdrop-blur" onClick={() => setOpen(false)}>
          <Command
            className="mx-auto mt-24 max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-glow"
            onClick={(event) => event.stopPropagation()}
          >
            <Command.Input
              autoFocus
              placeholder={t.nav.searchPlaceholder}
              className="h-14 w-full border-b border-border bg-transparent px-4 text-sm outline-none"
            />
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="p-4 text-sm text-muted-foreground">{t.nav.noResults}</Command.Empty>
              <Command.Group heading={t.nav.navigation} className="text-xs text-muted-foreground">
                {items.map((item) => (
                  <Command.Item key={item.href} value={item.label} asChild>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm text-foreground aria-selected:bg-surface-strong"
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {item.label}
                    </Link>
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      ) : null}
    </>
  );
}
