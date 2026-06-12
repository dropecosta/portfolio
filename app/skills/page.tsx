"use client";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getLocalizedData } from "@/lib/localized-data";

export default function SkillsPage() {
  const { locale, t } = useLanguage();
  const { skills } = getLocalizedData(locale);

  return (
    <Section eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skill) => (
          <Card key={skill.category} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">{skill.category}</h2>
              <span className="font-mono text-sm text-primary">{skill.level}%</span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
