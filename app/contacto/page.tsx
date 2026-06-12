"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">{t.contact.channels}</h2>
          <div className="mt-6 grid gap-3">
            <Link className="flex items-center gap-3 rounded-md border border-border p-3 text-muted-foreground hover:text-foreground" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </Link>
            <Link className="flex items-center gap-3 rounded-md border border-border p-3 text-muted-foreground hover:text-foreground" href={siteConfig.links.linkedin}>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link className="flex items-center gap-3 rounded-md border border-border p-3 text-muted-foreground hover:text-foreground" href={siteConfig.links.github}>
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </Card>
        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
