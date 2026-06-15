"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LocalizedArticles } from "@/lib/blog-types";

export function BlogClient({ articlesByLocale }: { articlesByLocale: LocalizedArticles }) {
  const { locale, t } = useLanguage();
  const articles = articlesByLocale[locale];
  const categories = [...new Set(articles.map((article) => article.category))];

  return (
    <Section eyebrow={t.blog.eyebrow} title={t.blog.title}>
      {/* <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="flex h-11 items-center gap-3 rounded-md border border-border bg-surface px-3 text-muted-foreground">
          <Search className="h-4 w-4" />
          <span className="text-sm">{t.blog.searchHint}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
      </div> */}
      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
            <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-primary/60">
              <CardHeader>
                <Badge>{article.category}</Badge>
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{article.description}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <time dateTime={article.date}>{new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en").format(new Date(article.date))}</time>
                  <span>
                    {article.readingMinutes} {t.common.readingTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
