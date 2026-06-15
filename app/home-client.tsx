"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LocalizedArticles } from "@/lib/blog-types";
import { getLocalizedData } from "@/lib/localized-data";

export function HomeClient({ articlesByLocale }: { articlesByLocale: LocalizedArticles }) {
  const { locale, t } = useLanguage();
  const { companies, serviceHighlights, siteConfig, stack, stats, testimonials } = getLocalizedData(locale);
  const articles = articlesByLocale[locale].slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-35" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.08fr_0.92fr]">
          <FadeIn>
            <Badge className="mb-5">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary" />
              {t.home.availability}
            </Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-normal md:text-7xl">Pedro Reis</h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground md:text-2xl">{siteConfig.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{t.home.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projetos">
                  {t.common.viewProjects} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={siteConfig.links.cv}>
                  <Download className="h-4 w-4" />
                  {t.common.downloadCv}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/contacto">
                  <Mail className="h-4 w-4" />
                  {t.common.contact}
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-surface/70 p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn className="relative">
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-glow">
              <div className="flex h-full flex-col justify-between p-8">
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.home.profileLabel}</span>
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div> */}
                <div>
                  <div className="grid h-28 w-28 place-items-center rounded-2xl bg-primary text-4xl font-semibold text-primary-foreground">
                    PR
                  </div>
                  <p className="mt-8 max-w-sm text-2xl font-semibold leading-tight">{t.home.profileLine}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {serviceHighlights.slice(0, 4).map((item) => (
                    <div key={item.title} className="rounded-lg border border-border bg-background/60 p-3 text-sm">
                      <item.icon className="mb-3 h-4 w-4 text-primary" />
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section eyebrow={t.home.stackEyebrow} title={t.home.stackTitle}>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {companies.map((company) => (
            <div key={company} className="rounded-lg border border-border bg-surface/75 p-4 text-sm text-muted-foreground">
              {company}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={t.home.trustEyebrow} title={t.home.trustTitle}>
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.author}>
              <CardHeader>
                <p className="text-lg leading-8">&quot;{item.quote}&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={t.home.latestEyebrow} title={t.home.latestTitle}>
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-primary/60">
                <CardHeader>
                  <Badge>{article.category}</Badge>
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{article.description}</p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {article.readingMinutes} {t.common.readingTime}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
