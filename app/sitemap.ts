import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/blog-content";
import { projects, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/projetos", "/experiencia", "/skills", "/blog", "/contacto"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/projetos/${project.slug}`, lastModified: new Date() })),
    ...getArticles("pt").map((article) => ({ url: `${siteConfig.url}/blog/${article.slug}`, lastModified: new Date(article.date) }))
  ];
}
