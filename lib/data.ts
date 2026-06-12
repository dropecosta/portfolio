import {
  Accessibility,
  Activity,
  Blocks,
  BrainCircuit,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from "lucide-react";

export const siteConfig = {
  name: "Pedro Reis",
  title: "Senior Software Engineer | Frontend Specialist | Full Stack Developer",
  description:
    "Senior Software Engineer com mais de 10 anos de experiência em Frontend, Full Stack, performance, SEO, acessibilidade e arquitetura de produto.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pedroreis.dev",
  email: "hello@pedroreis.dev",
  links: {
    github: "https://github.com/pedroreis",
    linkedin: "https://www.linkedin.com/in/pedroreis",
    cv: "/cv/pedro-reis-cv.pdf"
  }
};

export const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "50+", label: "projetos entregues" },
  { value: "20+", label: "clientes e empresas" }
];

export const companies = ["AMA", "Comboios de Portugal", "Rádio Popular", "Capgemini", "CI&T", "Fintech", "Media"];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind",
  "Design Systems",
  "Performance",
  "SEO",
  "Accessibility"
];

export const specialties = [
  { title: "Frontend Architecture", icon: Layers3, text: "Arquiteturas escaláveis, componentização, design systems e decisões técnicas que reduzem custo de mudança." },
  { title: "React & Next.js", icon: Blocks, text: "Produtos web modernos com App Router, Server Components, rendering híbrido e experiência de desenvolvimento forte." },
  { title: "Performance Web", icon: Gauge, text: "Core Web Vitals, budgets, otimização de imagens, caching e métricas que melhoram conversão e SEO." },
  { title: "Accessibility AA+", icon: Accessibility, text: "Interfaces inclusivas, semântica robusta, navegação por teclado e qualidade auditável." },
  { title: "Full Stack Delivery", icon: TerminalSquare, text: "APIs, integrações, autenticação, automação e pipelines preparados para produção." },
  { title: "Technical Leadership", icon: BrainCircuit, text: "Mentoria, discovery técnico, alinhamento com produto e standards de engenharia pragmáticos." }
];

export const values = ["Qualidade", "Simplicidade", "Escalabilidade", "Performance", "Experiência do utilizador"];

export const timeline = [
  {
    year: "2013",
    title: "Início em engenharia web",
    text: "Primeiros produtos digitais com foco em JavaScript, interfaces ricas e entrega próxima das equipas de negócio."
  },
  {
    year: "2016",
    title: "Especialização em Frontend",
    text: "Adoção profunda de React, padrões de componentização, testes e colaboração com design e produto."
  },
  {
    year: "2019",
    title: "Projetos enterprise e setores regulados",
    text: "Entrega para governo, transportes, telecomunicações, e-commerce, fintech e media com rigor operacional."
  },
  {
    year: "2022",
    title: "Arquitetura e liderança técnica",
    text: "Definição de foundations, mentoring, revisão de qualidade, performance e evolução de plataformas."
  },
  {
    year: "Hoje",
    title: "Senior Software Engineer",
    text: "Consultoria e desenvolvimento de plataformas modernas, rápidas, acessíveis e preparadas para escalar."
  }
];

export const experiences = [
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
];

export const projectCategories = ["All", "Frontend", "Full Stack", "E-commerce", "Government", "Open Source"] as const;

export const projects = [
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
];

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand"], level: 96 },
  { category: "Backend", items: ["Node.js", "Express", "NestJS"], level: 82 },
  { category: "Styling", items: ["Tailwind", "CSS", "SCSS"], level: 92 },
  { category: "Testing", items: ["Jest", "Vitest", "Cypress", "Playwright"], level: 86 },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Vercel"], level: 78 },
  { category: "Performance", items: ["Core Web Vitals", "SEO", "Accessibility"], level: 94 }
];

export const testimonials = [
  {
    quote:
      "Pedro combina profundidade técnica com clareza de produto. A sua capacidade de simplificar sistemas complexos é rara.",
    author: "Engineering Manager",
    role: "Enterprise Product Team"
  },
  {
    quote:
      "Trouxe rigor, velocidade e uma cultura de qualidade que elevou a equipa inteira.",
    author: "Product Lead",
    role: "Digital Platforms"
  }
];

export const serviceHighlights = [
  { title: "Auditorias Frontend", icon: Activity },
  { title: "Arquitetura Next.js", icon: Rocket },
  { title: "SEO Técnico", icon: Globe2 },
  { title: "Design Systems", icon: Sparkles },
  { title: "Developer Experience", icon: GitBranch },
  { title: "Acessibilidade", icon: ShieldCheck }
];
