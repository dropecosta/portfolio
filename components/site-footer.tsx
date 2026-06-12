"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            {t.footer}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link aria-label="GitHub" className="rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground" href={siteConfig.links.github}>
            <Github className="h-4 w-4" />
          </Link>
          <Link aria-label="LinkedIn" className="rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground" href={siteConfig.links.linkedin}>
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link aria-label="Email" className="rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground" href={`mailto:${siteConfig.email}`}>
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
