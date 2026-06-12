import { getArticles } from "@/lib/blog-content";
import { siteConfig } from "@/lib/data";

export function GET() {
  const items = getArticles("pt")
    .map(
      (article) => `
        <item>
          <title><![CDATA[${article.title}]]></title>
          <description><![CDATA[${article.description}]]></description>
          <link>${siteConfig.url}/blog/${article.slug}</link>
          <guid>${siteConfig.url}/blog/${article.slug}</guid>
          <pubDate>${new Date(article.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <description>${siteConfig.description}</description>
        <link>${siteConfig.url}</link>
        ${items}
      </channel>
    </rss>`,
    { headers: { "Content-Type": "application/rss+xml" } }
  );
}
