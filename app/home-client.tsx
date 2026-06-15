"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 900], [0, 110]);
  const circuitY = useTransform(scrollY, [0, 900], [0, -80]);
  const streamY = useTransform(scrollY, [0, 900], [0, 150]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24, mass: 0.4 });
  const layerOneX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const layerOneY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const layerTwoX = useTransform(smoothX, [-0.5, 0.5], [42, -42]);
  const layerTwoY = useTransform(smoothY, [-0.5, 0.5], [30, -30]);
  const layerThreeX = useTransform(smoothX, [-0.5, 0.5], [-70, 70]);
  const layerThreeY = useTransform(smoothY, [-0.5, 0.5], [46, -46]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-border"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--surface))_48%,hsl(var(--background))_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ y: gridY }}
          className="absolute inset-x-[-12%] top-[-18%] h-[120%] bg-hero-grid bg-[size:44px_44px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        />
        <motion.div
          aria-hidden="true"
          style={{ y: circuitY }}
          className="absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        >
          <div className="absolute left-[6%] top-[18%] h-px w-[38rem] bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
          <div className="absolute left-[18%] top-[18%] h-28 w-px bg-gradient-to-b from-primary/55 to-transparent" />
          <div className="absolute right-[8%] top-[28%] h-px w-[30rem] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="absolute right-[24%] top-[28%] h-36 w-px bg-gradient-to-b from-accent/50 to-transparent" />
          <div className="absolute bottom-[22%] left-[28%] h-px w-[46rem] bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          <div className="absolute bottom-[22%] left-[52%] h-24 w-px bg-gradient-to-t from-primary/35 to-transparent" />
        </motion.div>
        <motion.div aria-hidden="true" style={{ x: layerOneX, y: layerOneY }} className="absolute inset-0 opacity-70">
          {[
            ["12%", "22%", "3px", "bg-primary/70"],
            ["15%", "38%", "1.5px", "bg-foreground/35"],
            ["20%", "62%", "2px", "bg-accent/65"],
            ["24%", "30%", "2px", "bg-primary/45"],
            ["28%", "78%", "1.5px", "bg-accent/40"],
            ["34%", "18%", "4px", "bg-primary/55"],
            ["38%", "48%", "2px", "bg-primary/50"],
            ["46%", "70%", "2px", "bg-foreground/35"],
            ["52%", "16%", "1.5px", "bg-accent/45"],
            ["56%", "52%", "3px", "bg-primary/50"],
            ["62%", "26%", "3px", "bg-accent/60"],
            ["68%", "76%", "1.5px", "bg-foreground/30"],
            ["72%", "42%", "2px", "bg-primary/45"],
            ["78%", "58%", "4px", "bg-primary/50"],
            ["84%", "34%", "1.5px", "bg-accent/45"],
            ["88%", "20%", "2px", "bg-foreground/30"],
            ["92%", "66%", "2px", "bg-primary/40"]
          ].map(([left, top, size, color], index) => (
            <span
              key={index}
              className={`absolute rounded-full ${color} shadow-[0_0_22px_currentColor]`}
              style={{ left, top, width: size, height: size }}
            />
          ))}
        </motion.div>
        <motion.div aria-hidden="true" style={{ x: layerTwoX, y: layerTwoY }} className="absolute inset-0 opacity-45">
          {[
            ["10%", "70%", "1.5px", "bg-primary/35"],
            ["18%", "12%", "2px", "bg-accent/40"],
            ["30%", "58%", "1px", "bg-foreground/30"],
            ["42%", "34%", "2px", "bg-primary/35"],
            ["50%", "84%", "1.5px", "bg-accent/35"],
            ["64%", "12%", "1px", "bg-foreground/25"],
            ["74%", "70%", "2px", "bg-accent/35"],
            ["82%", "48%", "1.5px", "bg-primary/35"],
            ["94%", "28%", "1px", "bg-foreground/25"]
          ].map(([left, top, size, color], index) => (
            <span
              key={`far-${index}`}
              className={`absolute rounded-full ${color} shadow-[0_0_18px_currentColor]`}
              style={{ left, top, width: size, height: size }}
            />
          ))}
          {[
            ["18%", "28%", "22rem", "rotate-[18deg]", "from-transparent via-primary/35 to-transparent"],
            ["54%", "34%", "26rem", "-rotate-[22deg]", "from-transparent via-accent/30 to-transparent"],
            ["30%", "72%", "34rem", "rotate-[8deg]", "from-transparent via-foreground/18 to-transparent"],
            ["74%", "18%", "18rem", "rotate-[42deg]", "from-transparent via-primary/28 to-transparent"]
          ].map(([left, top, width, rotate, gradient], index) => (
            <span
              key={index}
              className={`absolute h-px ${rotate} bg-gradient-to-r ${gradient}`}
              style={{ left, top, width }}
            />
          ))}
        </motion.div>
        <motion.div aria-hidden="true" style={{ x: layerThreeX, y: layerThreeY }} className="absolute inset-0 opacity-55 blur-[0.2px]">
          {[
            ["8%", "44%", "180px", "180px", "border-primary/20"],
            ["70%", "12%", "260px", "260px", "border-accent/20"],
            ["58%", "64%", "220px", "220px", "border-primary/15"]
          ].map(([left, top, width, height, border], index) => (
            <span
              key={index}
              className={`absolute rounded-full border ${border}`}
              style={{ left, top, width, height }}
            />
          ))}
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={{ y: streamY }}
          className="absolute inset-0 opacity-30 [mask-image:linear-gradient(110deg,transparent_10%,black_38%,black_58%,transparent_86%)]"
        >
          <div className="absolute left-[-10%] top-[10%] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
          <div className="absolute left-[18%] top-[-10%] h-[135%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-accent/55 to-transparent" />
          <div className="absolute left-[48%] top-[-8%] h-[130%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-primary/45 to-transparent" />
          <div className="absolute right-[10%] top-[-12%] h-[145%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_52%),linear-gradient(90deg,hsl(var(--background)/0.92),transparent_35%,transparent_65%,hsl(var(--background)/0.9))]" />
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
