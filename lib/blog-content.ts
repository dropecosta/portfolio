import fs from "node:fs";
import path from "node:path";
import type { BlogArticle, LocalizedArticles } from "@/lib/blog-types";
import { locales, type Locale } from "@/lib/i18n";
import { readingTime } from "@/lib/utils";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: source.trim() };
  }

  const data = match[1].split(/\r?\n/).reduce<Record<string, string>>((acc, line) => {
    const [key, ...parts] = line.split(":");
    if (!key || parts.length === 0) return acc;
    acc[key.trim()] = parts.join(":").trim();
    return acc;
  }, {});

  return { data, body: match[2].trim() };
}

function parseTags(value = "") {
  return value
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function readArticleFile(slug: string, locale: Locale): BlogArticle | null {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(source);
  const published = data.published !== "false";

  return {
    slug,
    locale,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString().slice(0, 10),
    category: data.category || "Engineering",
    tags: parseTags(data.tags),
    published,
    body,
    readingMinutes: readingTime(body)
  };
}

export function getArticles(locale: Locale): BlogArticle[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => readArticleFile(entry.name, locale))
    .filter((article): article is BlogArticle => Boolean(article?.published))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getAllLocalizedArticles(): LocalizedArticles {
  return {
    pt: getArticles("pt"),
    en: getArticles("en")
  };
}

export function getArticle(locale: Locale, slug: string) {
  return getArticles(locale).find((article) => article.slug === slug) || null;
}

export function getArticleSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name);
}

export function getAdjacentArticles(articles: BlogArticle[], slug: string) {
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null
  };
}

export function getAvailableLocalesForArticle(slug: string) {
  return locales.filter((locale) => Boolean(readArticleFile(slug, locale)));
}
