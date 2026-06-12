# Blog Publishing

The blog is content-driven and internationalized.

Each article lives in:

```text
content/blog/article-slug/
  pt.mdx
  en.mdx
```

Both files share the same slug and can have localized title, description, category, tags and body.

## Create A New Article

```bash
npm.cmd run new:article -- meu-novo-artigo "Meu novo artigo"
```

This creates:

```text
content/blog/meu-novo-artigo/pt.mdx
content/blog/meu-novo-artigo/en.mdx
```

New articles start with `published: false`, so they do not appear in the site yet.

## Publish

Edit both language files and change:

```yaml
published: true
```

Then run:

```bash
npm.cmd run build
```

## Frontmatter

```yaml
---
title: Article title
description: Short SEO summary
date: 2026-06-12
category: React
tags: [React, Next.js, TypeScript]
published: true
---
```

The site automatically uses the browser language preference and then the visitor preference saved by the language switcher.
