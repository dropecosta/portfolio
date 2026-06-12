import type { Locale } from "@/lib/i18n";

export type BlogArticle = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
  body: string;
  readingMinutes: number;
};

export type LocalizedArticles = Record<Locale, BlogArticle[]>;
