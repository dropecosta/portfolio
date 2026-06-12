# Pedro Reis Portfolio

Premium personal portfolio and technical publishing platform for Pedro Reis, Senior Software Engineer focused on Frontend Architecture, Full Stack Development, Web Performance, SEO and Accessibility.

## Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS with shadcn/ui-inspired primitives
- Framer Motion
- MDX-ready blog content
- Vercel Analytics and Speed Insights
- Dynamic metadata, Open Graph, sitemap, robots.txt and RSS
- Resend-ready contact endpoint

## Getting Started

```bash
npm.cmd install
npm.cmd run dev
```

Create `.env.local` when enabling email delivery:

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=pedro@example.com
NEXT_PUBLIC_SITE_URL=https://pedroreis.dev
```

## Scripts

- `npm.cmd run dev` starts the development server.
- `npm.cmd run build` creates the production build.
- `npm.cmd run typecheck` validates TypeScript.

## Content

Core portfolio data lives in `lib/data.ts`. Blog articles live in `content/blog/<slug>/pt.mdx` and `content/blog/<slug>/en.mdx`.

Create a new article with:

```bash
npm.cmd run new:article -- article-slug "Article title"
```

See `BLOGGING.md` for the publishing workflow.

## Deploy

The project is ready for Vercel. Add the environment variables above and deploy from the repository.
