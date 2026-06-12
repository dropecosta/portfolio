import fs from "node:fs";
import path from "node:path";

const [, , rawSlug, ...titleParts] = process.argv;

if (!rawSlug) {
  console.error("Usage: npm.cmd run new:article -- article-slug Optional title");
  process.exit(1);
}

const slug = rawSlug
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const title = titleParts.join(" ") || slug.replace(/-/g, " ");
const date = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), "content", "blog", slug);

if (fs.existsSync(dir)) {
  console.error(`Article already exists: content/blog/${slug}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const files = {
  "pt.mdx": `---\ntitle: ${title}\ndescription: Resumo curto para SEO, cards e partilhas sociais.\ndate: ${date}\ncategory: Categoria\ntags: [React, Next.js]\npublished: false\n---\n\nEscreva aqui a versao portuguesa do artigo.\n`,
  "en.mdx": `---\ntitle: ${title}\ndescription: Short summary for SEO, cards and social sharing.\ndate: ${date}\ncategory: Category\ntags: [React, Next.js]\npublished: false\n---\n\nWrite the English version of the article here.\n`
};

for (const [fileName, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, fileName), content, "utf8");
}

console.log(`Created content/blog/${slug}`);
console.log("Edit pt.mdx and en.mdx, then set published: true when ready.");
