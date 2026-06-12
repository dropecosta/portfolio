"use client";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getLocalizedData } from "@/lib/localized-data";

export default function ExperiencePage() {
  const { locale, t } = useLanguage();
  const { experiences } = getLocalizedData(locale);

  return (
    <Section eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="space-y-5">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.period}`} className="p-6">
            <div className="grid gap-6 md:grid-cols-[0.32fr_1fr]">
              <div>
                <Badge>{experience.period}</Badge>
                <h2 className="mt-4 text-2xl font-semibold">{experience.company}</h2>
                <p className="mt-2 text-muted-foreground">{experience.role}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <h3 className="font-medium">{t.experience.responsibilities}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {experience.responsibilities.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">{t.experience.technologies}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.tech.map((item) => <Badge key={item}>{item}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{t.experience.results}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {experience.results.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
