import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleClient } from "@/app/blog/[slug]/article-client";
import { getAllLocalizedArticles, getArticle, getArticleSlugs } from "@/lib/blog-content";
import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("pt", slug) || getArticle("en", slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: absoluteUrl(`/blog/${article.slug}`),
      publishedTime: article.date,
      authors: [siteConfig.name]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("pt", slug) || getArticle("en", slug);
  if (!article) notFound();

  return <ArticleClient slug={slug} articlesByLocale={getAllLocalizedArticles()} />;
}
