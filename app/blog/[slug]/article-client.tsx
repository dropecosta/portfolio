"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LocalizedArticles } from "@/lib/blog-types";
import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/utils";

export function ArticleClient({ slug, articlesByLocale }: { slug: string; articlesByLocale: LocalizedArticles }) {
  const { locale, t } = useLanguage();
  const articles = articlesByLocale[locale];
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;

  const index = articles.findIndex((item) => item.slug === slug);
  const adjacent = {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null
  };
  const headings = locale === "pt" ? ["Contexto", "Principios", "Aplicacao pratica"] : ["Context", "Principles", "Practical application"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`)
  };

  return (
    <Section eyebrow={article.category} title={article.title}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{t.blog.author}</span>
            <time dateTime={article.date}>{new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en").format(new Date(article.date))}</time>
            <span>
              {article.readingMinutes} {t.common.readingTime}
            </span>
          </div>
          <div className="prose-custom max-w-3xl text-lg">
            {article.body
              .trim()
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </div>
          <Card className="mt-10 p-6">
            <h2 className="text-xl font-semibold">{t.blog.newsletterTitle}</h2>
            <p className="mt-3 text-muted-foreground">{t.blog.newsletterText}</p>
            <Button className="mt-5">
              <Send className="h-4 w-4" />
              {t.blog.subscribe}
            </Button>
          </Card>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
            {adjacent.previous ? (
              <Button asChild variant="secondary">
                <Link href={`/blog/${adjacent.previous.slug}`}>
                  <ArrowLeft className="h-4 w-4" />
                  {t.common.previous}
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {adjacent.next ? (
              <Button asChild variant="secondary">
                <Link href={`/blog/${adjacent.next.slug}`}>
                  {t.common.next}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </article>
        <aside className="h-fit rounded-lg border border-border bg-surface p-5">
          <h2 className="font-semibold">{t.blog.toc}</h2>
          <div className="mt-4 grid gap-2">
            {headings.map((heading) => (
              <a key={heading} href="#" className="text-sm text-muted-foreground hover:text-foreground">
                {heading}
              </a>
            ))}
          </div>
          <h2 className="mt-8 font-semibold">{t.blog.tags}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-6 w-full">
            <Link href={siteConfig.links.linkedin}>
              <Linkedin className="h-4 w-4" />
              {t.common.share}
            </Link>
          </Button>
        </aside>
      </div>
    </Section>
  );
}
