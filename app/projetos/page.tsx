"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getLocalizedData } from "@/lib/localized-data";

export default function ProjectsPage() {
  const { locale, t } = useLanguage();
  const { projectCategories, projects } = getLocalizedData(locale);

  return (
    <Section eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projetos/${project.slug}`} className="group">
            <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-primary/60">
              <CardHeader>
                <Badge>{project.category}</Badge>
                <h2 className="text-2xl font-semibold">{project.name}</h2>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t.common.readCaseStudy} <ArrowRight className="h-4 w-4" />
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
