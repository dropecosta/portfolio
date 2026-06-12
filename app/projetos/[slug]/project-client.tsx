"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLocalizedData } from "@/lib/localized-data";

export function ProjectClient({ slug }: { slug: string }) {
  const { locale, t } = useLanguage();
  const project = getLocalizedData(locale).projects.find((item) => item.slug === slug);
  if (!project) return null;

  return (
    <Section eyebrow={project.category} title={project.name}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
        <article>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.description}</p>
          <div className="mt-8 grid gap-5">
            {[
              [t.projects.challenge, project.challenge],
              [t.projects.solution, project.solution],
              [t.projects.results, project.results.join(" · ")]
            ].map(([title, text]) => (
              <Card key={title} className="p-6">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 aspect-[16/9] rounded-lg border border-border bg-hero-grid bg-[size:32px_32px] p-8">
            <div className="flex h-full items-end rounded-lg border border-border bg-surface/80 p-6">
              <p className="max-w-md text-2xl font-semibold">{t.projects.screenshot}</p>
            </div>
          </div>
        </article>
        <aside className="h-fit rounded-lg border border-border bg-surface p-5">
          <h2 className="font-semibold">{t.common.technologies}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            <Button asChild variant="secondary">
              <Link href={project.demo}>
                <ExternalLink className="h-4 w-4" />
                {t.common.demo}
              </Link>
            </Button>
            {project.github ? (
              <Button asChild variant="ghost">
                <Link href={project.github}>
                  <Github className="h-4 w-4" />
                  {t.common.github}
                </Link>
              </Button>
            ) : null}
          </div>
        </aside>
      </div>
    </Section>
  );
}
