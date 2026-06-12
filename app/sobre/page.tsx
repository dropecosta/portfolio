"use client";

import { FadeIn } from "@/components/animations";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getLocalizedData } from "@/lib/localized-data";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const { specialties, timeline, values } = getLocalizedData(locale);

  return (
    <Section eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <h3 className="text-2xl font-semibold">{t.about.story}</h3>
          <div className="mt-8 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative border-l border-border pl-6">
                <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full border border-border bg-background text-[10px] text-primary">
                  {item.year === "Hoje" ? "•" : ""}
                </span>
                <Badge>{item.year}</Badge>
                <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">{t.about.values}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {values.map((value) => (
                <Badge key={value}>{value}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
