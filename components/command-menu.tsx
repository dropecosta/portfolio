"use client";

import { Briefcase, FileText, Home, Mail, Search, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { getLocalizedData } from "@/lib/localized-data";
import { cn } from "@/lib/utils";

type SearchItem = {
  href: string;
  label: string;
  description: string;
  group: string;
  icon: typeof Search;
  keywords: string;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function CommandMenu({ buttonClassName }: { buttonClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { locale, t } = useLanguage();
  const { projects, articles } = getLocalizedData(locale);

  const items = useMemo<SearchItem[]>(() => {
    const navigation: SearchItem[] = [
      { href: "/", label: t.nav.home, description: "Pedro Reis", group: t.nav.navigation, icon: Home, keywords: "home inicio principal" },
      { href: "/sobre", label: t.nav.about, description: t.about.title, group: t.nav.navigation, icon: UserRound, keywords: "about sobre historia perfil" },
      { href: "/projetos", label: t.nav.projects, description: t.projects.title, group: t.nav.navigation, icon: Briefcase, keywords: "projects projetos portfolio cases" },
      { href: "/experiencia", label: t.nav.experience, description: t.experience.title, group: t.nav.navigation, icon: Briefcase, keywords: "experience experiencia carreira timeline" },
      { href: "/skills", label: t.nav.skills, description: t.skills.title, group: t.nav.navigation, icon: Search, keywords: "skills competencias tecnologias" },
      { href: "/blog", label: t.nav.blog, description: t.blog.title, group: t.nav.navigation, icon: FileText, keywords: "blog artigos posts" },
      { href: "/contacto", label: t.nav.contact, description: t.contact.title, group: t.nav.navigation, icon: Mail, keywords: "contact contacto email mensagem" }
    ];

    const projectItems: SearchItem[] = projects.map((project) => ({
      href: `/projetos/${project.slug}`,
      label: project.name,
      description: project.description,
      group: t.nav.projects,
      icon: Briefcase,
      keywords: [project.category, project.technologies.join(" "), project.challenge, project.solution].join(" ")
    }));

    const articleItems: SearchItem[] = articles.map((article) => ({
      href: `/blog/${article.slug}`,
      label: article.title,
      description: article.description,
      group: t.nav.blog,
      icon: FileText,
      keywords: [article.category, article.tags.join(" "), article.body].join(" ")
    }));

    return [...navigation, ...projectItems, ...articleItems];
  }, [articles, projects, t]);

  const results = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return items.slice(0, 10);

    return items
      .map((item) => {
        const haystack = normalize(`${item.label} ${item.description} ${item.group} ${item.keywords}`);
        const label = normalize(item.label);
        const score = label.includes(normalizedQuery) ? 2 : haystack.includes(normalizedQuery) ? 1 : 0;
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
      .map(({ item }) => item)
      .slice(0, 12);
  }, [items, query]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "hidden h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-muted-foreground transition hover:text-foreground md:inline-flex",
          buttonClassName
        )}
      >
        <Search className="h-4 w-4" />
        {t.nav.search}
        <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">Ctrl K</kbd>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-background/75 p-4 backdrop-blur" onMouseDown={() => setOpen(false)}>
          <div
            className="mx-auto mt-24 max-w-2xl overflow-hidden rounded-lg border border-border bg-surface shadow-glow"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex h-14 items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.nav.searchPlaceholder}
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
              <Button type="button" variant="ghost" size="icon" aria-label="Fechar pesquisa" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="max-h-[28rem] overflow-y-auto p-2">
              {results.length ? (
                results.map((item) => (
                  <Link
                    key={`${item.group}-${item.href}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-3 rounded-md px-3 py-3 transition hover:bg-surface-strong"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-foreground">{item.label}</span>
                        <span className="shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          {item.group}
                        </span>
                      </span>
                      <span className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{item.description}</span>
                    </span>
                  </Link>
                ))
              ) : (
                <p className="p-4 text-sm text-muted-foreground">{t.nav.noResults}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
