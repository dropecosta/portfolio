import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Senior Software Engineer`,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} - Senior Software Engineer`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
    locale: "pt_PT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Senior Software Engineer`,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Senior Software Engineer",
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsAbout: ["React", "Next.js", "TypeScript", "Accessibility", "SEO", "Web Performance"]
  };

  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </LanguageProvider>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
