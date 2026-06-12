import { readingTime } from "@/lib/utils";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  body: string;
};

export const articles: Article[] = [
  {
    slug: "arquitetura-frontend-escalavel",
    title: "Como pensar arquitetura frontend escalável",
    description: "Princípios práticos para criar aplicações React e Next.js que continuam simples à medida que crescem.",
    date: "2026-05-20",
    category: "Arquitetura",
    tags: ["React", "Next.js", "TypeScript", "DX"],
    body: `
Arquitetura frontend escalável começa com clareza de fronteiras. Componentes devem representar intenção de produto, enquanto detalhes técnicos ficam próximos do domínio que servem.

Uma boa base combina design tokens, contratos de dados previsíveis, testes nos fluxos críticos e uma estratégia de rendering que respeita a experiência do utilizador.

O objetivo não é criar abstrações perfeitas. É tornar a mudança mais barata, a revisão mais objetiva e o onboarding mais rápido.
`
  },
  {
    slug: "core-web-vitals-produto",
    title: "Core Web Vitals como ferramenta de produto",
    description: "Performance não é apenas uma métrica técnica: é uma conversa sobre receita, retenção e confiança.",
    date: "2026-04-12",
    category: "Performance",
    tags: ["Performance", "SEO", "Analytics"],
    body: `
Core Web Vitals ajudam equipas a falar sobre experiência com dados concretos. LCP, INP e CLS mostram onde a interface falha antes mesmo de o utilizador conseguir explicar o problema.

O trabalho mais eficaz começa por páginas de maior impacto, define budgets e mede regressões no pipeline. Performance passa a ser uma propriedade do sistema.

Quando a equipa olha para velocidade como qualidade de produto, as decisões de arquitetura ficam mais maduras.
`
  },
  {
    slug: "acessibilidade-em-equipas-react",
    title: "Acessibilidade em equipas React maduras",
    description: "Como transformar acessibilidade num hábito de engenharia e não num checkpoint tardio.",
    date: "2026-03-04",
    category: "Accessibility",
    tags: ["Accessibility", "React", "Design Systems"],
    body: `
Acessibilidade melhora quando deixa de depender de heroísmo individual. Componentes base devem carregar semântica, estados de foco, contraste e interações por teclado desde o início.

Em React, isto significa testar fluxos reais, usar HTML nativo sempre que possível e tratar componentes complexos com o mesmo rigor de uma API pública.

O resultado é uma experiência mais inclusiva, mas também uma base mais previsível para todos os utilizadores.
`
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articleReadingTime(article: Article) {
  return readingTime(article.body);
}

export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null
  };
}
