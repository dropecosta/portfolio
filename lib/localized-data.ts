import { articleReadingTime } from "@/lib/articles";
import {
  companies,
  projectCategories,
  serviceHighlights,
  siteConfig,
  skills,
  specialties as baseSpecialties,
  stack,
  stats
} from "@/lib/data";
import type { Locale } from "@/lib/i18n";

const pt = {
  siteConfig,
  stats,
  companies,
  stack,
  serviceHighlights,
  projectCategories,
  skills,
  values: ["Qualidade", "Simplicidade", "Escalabilidade", "Performance", "Experiência do utilizador"],
  timeline: [
    ["2013", "Início em engenharia web", "Primeiros produtos digitais com foco em JavaScript, interfaces ricas e entrega próxima das equipas de negócio."],
    ["2016", "Especialização em Frontend", "Adoção profunda de React, padrões de componentização, testes e colaboração com design e produto."],
    ["2019", "Projetos enterprise e setores regulados", "Entrega para governo, transportes, telecomunicações, e-commerce, fintech e media com rigor operacional."],
    ["2022", "Arquitetura e liderança técnica", "Definição de foundations, mentoring, revisão de qualidade, performance e evolução de plataformas."],
    ["Hoje", "Senior Software Engineer", "Consultoria e desenvolvimento de plataformas modernas, rápidas, acessíveis e preparadas para escalar."]
  ].map(([year, title, text]) => ({ year, title, text })),
  specialties: [
    ["Frontend Architecture", "Arquiteturas escaláveis, componentização, design systems e decisões técnicas que reduzem custo de mudança."],
    ["React & Next.js", "Produtos web modernos com App Router, Server Components, rendering híbrido e experiência de desenvolvimento forte."],
    ["Performance Web", "Core Web Vitals, budgets, otimização de imagens, caching e métricas que melhoram conversão e SEO."],
    ["Accessibility AA+", "Interfaces inclusivas, semântica robusta, navegação por teclado e qualidade auditável."],
    ["Full Stack Delivery", "APIs, integrações, autenticação, automação e pipelines preparados para produção."],
    ["Technical Leadership", "Mentoria, discovery técnico, alinhamento com produto e standards de engenharia pragmáticos."]
  ].map(([title, text], index) => ({ title, text, icon: baseSpecialties[index].icon })),
  testimonials: [
    ["Pedro combina profundidade técnica com clareza de produto. A sua capacidade de simplificar sistemas complexos é rara.", "Engineering Manager", "Enterprise Product Team"],
    ["Trouxe rigor, velocidade e uma cultura de qualidade que elevou a equipa inteira.", "Product Lead", "Digital Platforms"]
  ].map(([quote, author, role]) => ({ quote, author, role })),
  experiences: [
    {
      company: "CI&T",
      role: "Senior Frontend Engineer",
      period: "2024 - Presente",
      tech: ["React", "Next.js", "TypeScript", "Design Systems", "Testing"],
      responsibilities: ["Arquitetura frontend", "Mentoria técnica", "Acessibilidade e performance", "Colaboração com equipas globais"],
      results: ["Melhoria de consistência UI", "Redução de dívida técnica", "Entrega previsível em ambientes enterprise"]
    },
    {
      company: "Capgemini",
      role: "Frontend / Full Stack Developer",
      period: "2021 - 2024",
      tech: ["React", "Node.js", "TypeScript", "Azure", "CI/CD"],
      responsibilities: ["Desenvolvimento de produto", "Integrações API", "Code review", "Qualidade e testes"],
      results: ["Modernização de aplicações", "Melhorias em performance", "Aumento de cobertura funcional"]
    },
    {
      company: "Rádio Popular",
      role: "Frontend Engineer",
      period: "2019 - 2021",
      tech: ["JavaScript", "React", "E-commerce", "SEO", "Analytics"],
      responsibilities: ["Experiência de compra", "Otimização SEO", "Componentes reutilizáveis", "Observabilidade"],
      results: ["Fluxos mais rápidos", "Melhor indexação", "Base UI mais consistente"]
    },
    {
      company: "AMA / Comboios de Portugal",
      role: "Software Developer",
      period: "2016 - 2019",
      tech: ["JavaScript", "HTML", "CSS", "Accessibility", "APIs"],
      responsibilities: ["Interfaces públicas", "Acessibilidade", "Integração de serviços", "Suporte evolutivo"],
      results: ["Serviços digitais robustos", "Experiência mobile melhorada", "Maior fiabilidade em produção"]
    }
  ],
  projects: [
    {
      slug: "citizen-services-platform",
      name: "Citizen Services Platform",
      category: "Government",
      description: "Modernização de serviços públicos digitais com foco em acessibilidade, performance e clareza de fluxos.",
      technologies: ["React", "TypeScript", "Accessibility", "Design Systems"],
      challenge: "Unificar experiências complexas para públicos diversos sem comprometer conformidade e usabilidade.",
      solution: "Arquitetura de componentes acessíveis, padrões de formulário reutilizáveis e revisão de performance por fluxo.",
      results: ["AA-ready UI", "Menos fricção em formulários", "Base escalável para novas jornadas"],
      demo: "#",
      github: null
    },
    {
      slug: "commerce-performance-system",
      name: "Commerce Performance System",
      category: "E-commerce",
      description: "Sistema de experiência e performance para loja online com forte dependência de SEO e conversão.",
      technologies: ["Next.js", "React", "SEO", "Analytics", "Core Web Vitals"],
      challenge: "Melhorar descoberta orgânica e velocidade percebida em páginas com catálogo extenso.",
      solution: "Rendering híbrido, lazy loading inteligente, otimização de imagens e instrumentação de métricas.",
      results: ["Melhores Core Web Vitals", "Experiência mobile mais fluida", "Base SEO mais robusta"],
      demo: "#",
      github: null
    },
    {
      slug: "frontend-foundation-kit",
      name: "Frontend Foundation Kit",
      category: "Open Source",
      description: "Kit de arquitetura para equipas React com linting, testes, tokens, CI e documentação.",
      technologies: ["React", "TypeScript", "Vitest", "Playwright", "GitHub Actions"],
      challenge: "Acelerar novos projetos mantendo standards de qualidade e DX.",
      solution: "Templates opinativos, componentes base, pipelines e documentação de decisões técnicas.",
      results: ["Onboarding mais rápido", "Menos variação acidental", "Qualidade repetível"],
      demo: "#",
      github: "https://github.com/pedroreis"
    },
    {
      slug: "media-content-platform",
      name: "Media Content Platform",
      category: "Full Stack",
      description: "Plataforma editorial para publicação, pesquisa e distribuição de conteúdo técnico e media.",
      technologies: ["Next.js", "Node.js", "MDX", "PostgreSQL", "Vercel"],
      challenge: "Criar um sistema editorial rápido, pesquisável e preparado para crescimento orgânico.",
      solution: "Arquitetura App Router, conteúdo estruturado, metadados dinâmicos e automações de sitemap/RSS.",
      results: ["Publicação simples", "SEO técnico completo", "Base preparada para newsletter"],
      demo: "#",
      github: null
    }
  ],
  articles: [
    {
      slug: "arquitetura-frontend-escalavel",
      title: "Como pensar arquitetura frontend escalável",
      description: "Princípios práticos para criar aplicações React e Next.js que continuam simples à medida que crescem.",
      date: "2026-05-20",
      category: "Arquitetura",
      tags: ["React", "Next.js", "TypeScript", "DX"],
      body: [
        "Arquitetura frontend escalável começa com clareza de fronteiras. Componentes devem representar intenção de produto, enquanto detalhes técnicos ficam próximos do domínio que servem.",
        "Uma boa base combina design tokens, contratos de dados previsíveis, testes nos fluxos críticos e uma estratégia de rendering que respeita a experiência do utilizador.",
        "O objetivo não é criar abstrações perfeitas. É tornar a mudança mais barata, a revisão mais objetiva e o onboarding mais rápido."
      ].join("\n\n")
    },
    {
      slug: "core-web-vitals-produto",
      title: "Core Web Vitals como ferramenta de produto",
      description: "Performance não é apenas uma métrica técnica: é uma conversa sobre receita, retenção e confiança.",
      date: "2026-04-12",
      category: "Performance",
      tags: ["Performance", "SEO", "Analytics"],
      body: [
        "Core Web Vitals ajudam equipas a falar sobre experiência com dados concretos. LCP, INP e CLS mostram onde a interface falha antes mesmo de o utilizador conseguir explicar o problema.",
        "O trabalho mais eficaz começa por páginas de maior impacto, define budgets e mede regressões no pipeline. Performance passa a ser uma propriedade do sistema.",
        "Quando a equipa olha para velocidade como qualidade de produto, as decisões de arquitetura ficam mais maduras."
      ].join("\n\n")
    },
    {
      slug: "acessibilidade-em-equipas-react",
      title: "Acessibilidade em equipas React maduras",
      description: "Como transformar acessibilidade num hábito de engenharia e não num checkpoint tardio.",
      date: "2026-03-04",
      category: "Accessibility",
      tags: ["Accessibility", "React", "Design Systems"],
      body: [
        "Acessibilidade melhora quando deixa de depender de heroísmo individual. Componentes base devem carregar semântica, estados de foco, contraste e interações por teclado desde o início.",
        "Em React, isto significa testar fluxos reais, usar HTML nativo sempre que possível e tratar componentes complexos com o mesmo rigor de uma API pública.",
        "O resultado é uma experiência mais inclusiva, mas também uma base mais previsível para todos os utilizadores."
      ].join("\n\n")
    }
  ]
};

const en: typeof pt = {
  ...pt,
  values: ["Quality", "Simplicity", "Scalability", "Performance", "User experience"],
  timeline: [
    ["2013", "Started in web engineering", "Early digital products focused on JavaScript, rich interfaces and close collaboration with business teams."],
    ["2016", "Frontend specialization", "Deep adoption of React, component patterns, testing and collaboration with design and product."],
    ["2019", "Enterprise and regulated sectors", "Delivery for government, transport, telecom, e-commerce, fintech and media with operational rigor."],
    ["2022", "Architecture and technical leadership", "Frontend foundations, mentoring, quality reviews, performance work and platform evolution."],
    ["Today", "Senior Software Engineer", "Consulting and development of modern, fast, accessible platforms designed to scale."]
  ].map(([year, title, text]) => ({ year, title, text })),
  specialties: [
    ["Frontend Architecture", "Scalable architecture, component systems, design systems and technical decisions that reduce the cost of change."],
    ["React & Next.js", "Modern web products with App Router, Server Components, hybrid rendering and strong developer experience."],
    ["Web Performance", "Core Web Vitals, budgets, image optimization, caching and metrics that improve conversion and SEO."],
    ["Accessibility AA+", "Inclusive interfaces, strong semantics, keyboard navigation and auditable quality."],
    ["Full Stack Delivery", "APIs, integrations, authentication, automation and production-ready pipelines."],
    ["Technical Leadership", "Mentoring, technical discovery, product alignment and pragmatic engineering standards."]
  ].map(([title, text], index) => ({ title, text, icon: baseSpecialties[index].icon })),
  testimonials: [
    ["Pedro combines technical depth with product clarity. His ability to simplify complex systems is rare.", "Engineering Manager", "Enterprise Product Team"],
    ["He brought rigor, pace and a quality culture that raised the whole team.", "Product Lead", "Digital Platforms"]
  ].map(([quote, author, role]) => ({ quote, author, role })),
  experiences: pt.experiences.map((experience) => ({
    ...experience,
    period: experience.period.replace("Presente", "Present"),
    responsibilities:
      experience.company === "CI&T"
        ? ["Frontend architecture", "Technical mentoring", "Accessibility and performance", "Collaboration with global teams"]
        : experience.company === "Capgemini"
          ? ["Product development", "API integrations", "Code review", "Quality and testing"]
          : experience.company === "Rádio Popular"
            ? ["Shopping experience", "SEO optimization", "Reusable components", "Observability"]
            : ["Public interfaces", "Accessibility", "Service integration", "Evolutionary support"],
    results:
      experience.company === "CI&T"
        ? ["Improved UI consistency", "Reduced technical debt", "Predictable delivery in enterprise environments"]
        : experience.company === "Capgemini"
          ? ["Application modernization", "Performance improvements", "Expanded functional coverage"]
          : experience.company === "Rádio Popular"
            ? ["Faster flows", "Better indexing", "More consistent UI foundation"]
            : ["Robust digital services", "Improved mobile experience", "Higher production reliability"]
  })),
  projects: pt.projects.map((project) => {
    const map = {
      "citizen-services-platform": {
        description: "Modernization of digital public services focused on accessibility, performance and clearer flows.",
        challenge: "Unify complex experiences for broad audiences without compromising compliance or usability.",
        solution: "Accessible component architecture, reusable form patterns and performance reviews per journey.",
        results: ["AA-ready UI", "Less form friction", "Scalable foundation for new journeys"]
      },
      "commerce-performance-system": {
        description: "Experience and performance system for an online store with strong SEO and conversion needs.",
        challenge: "Improve organic discovery and perceived speed across a large catalog.",
        solution: "Hybrid rendering, smart lazy loading, image optimization and metrics instrumentation.",
        results: ["Better Core Web Vitals", "Smoother mobile experience", "Stronger SEO foundation"]
      },
      "frontend-foundation-kit": {
        description: "Architecture kit for React teams with linting, tests, tokens, CI and documentation.",
        challenge: "Accelerate new projects while keeping quality and DX standards.",
        solution: "Opinionated templates, base components, pipelines and technical decision documentation.",
        results: ["Faster onboarding", "Less accidental variation", "Repeatable quality"]
      },
      "media-content-platform": {
        description: "Editorial platform for publishing, search and distribution of technical and media content.",
        challenge: "Create a fast, searchable editorial system ready for organic growth.",
        solution: "App Router architecture, structured content, dynamic metadata and sitemap/RSS automation.",
        results: ["Simple publishing", "Complete technical SEO", "Newsletter-ready foundation"]
      }
    }[project.slug];
    return { ...project, ...map };
  }),
  articles: [
    {
      slug: "arquitetura-frontend-escalavel",
      title: "How to think about scalable frontend architecture",
      description: "Practical principles for React and Next.js applications that stay simple as they grow.",
      date: "2026-05-20",
      category: "Architecture",
      tags: ["React", "Next.js", "TypeScript", "DX"],
      body: [
        "Scalable frontend architecture starts with clear boundaries. Components should express product intent, while technical details stay close to the domain they serve.",
        "A strong foundation combines design tokens, predictable data contracts, tests around critical flows and a rendering strategy that respects the user experience.",
        "The goal is not to create perfect abstractions. It is to make change cheaper, review more objective and onboarding faster."
      ].join("\n\n")
    },
    {
      slug: "core-web-vitals-produto",
      title: "Core Web Vitals as a product tool",
      description: "Performance is not only a technical metric: it is a conversation about revenue, retention and trust.",
      date: "2026-04-12",
      category: "Performance",
      tags: ["Performance", "SEO", "Analytics"],
      body: [
        "Core Web Vitals help teams talk about experience with concrete data. LCP, INP and CLS reveal where an interface fails before the user can explain the problem.",
        "The most effective work starts with high-impact pages, defines budgets and measures regressions in the pipeline. Performance becomes a property of the system.",
        "When a team treats speed as product quality, architecture decisions become more mature."
      ].join("\n\n")
    },
    {
      slug: "acessibilidade-em-equipas-react",
      title: "Accessibility in mature React teams",
      description: "How to turn accessibility into an engineering habit instead of a late checkpoint.",
      date: "2026-03-04",
      category: "Accessibility",
      tags: ["Accessibility", "React", "Design Systems"],
      body: [
        "Accessibility improves when it stops depending on individual heroics. Base components should carry semantics, focus states, contrast and keyboard interactions from the beginning.",
        "In React, this means testing real flows, using native HTML whenever possible and treating complex components with the same rigor as a public API.",
        "The result is a more inclusive experience and also a more predictable foundation for every user."
      ].join("\n\n")
    }
  ]
};

export type LocalizedData = typeof pt;

export function getLocalizedData(locale: Locale): LocalizedData {
  return locale === "en" ? en : pt;
}

export function getLocalizedArticle(locale: Locale, slug: string) {
  return getLocalizedData(locale).articles.find((article) => article.slug === slug);
}

export function getAdjacentLocalizedArticles(locale: Locale, slug: string) {
  const articles = getLocalizedData(locale).articles;
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null
  };
}

export function localizedReadingTime(article: { body: string }) {
  return articleReadingTime(article as never);
}
