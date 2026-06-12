import { HomeClient } from "@/app/home-client";
import { getAllLocalizedArticles } from "@/lib/blog-content";

export default function HomePage() {
  return <HomeClient articlesByLocale={getAllLocalizedArticles()} />;
}
