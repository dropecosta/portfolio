import { BlogClient } from "@/app/blog/blog-client";
import { getAllLocalizedArticles } from "@/lib/blog-content";

export default function BlogPage() {
  return <BlogClient articlesByLocale={getAllLocalizedArticles()} />;
}
