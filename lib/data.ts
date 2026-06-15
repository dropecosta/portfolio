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
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.linkedin.com/in/dropecosta/",
  email: "dropecosta@gmail.com",
  links: {
    github: "https://github.com/dropecosta",
    linkedin: "https://www.linkedin.com/in/dropecosta",
    cv: "/cv/pedro-reis-cv.pdf"
  }
};

export const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "10+", label: "projetos entregues" },
  { value: "10+", label: "clientes e empresas" }
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
    slug: "vodafone-digital-products",
    name: "Vodafone Digital Products",
    category: "Frontend",
    description:
      "Desenvolvimento e evolucao continua de solucoes frontend para produtos digitais Vodafone, em colaboracao com a Celfocus na GBL Tech.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Accessibility"],
    challenge:
      "Evoluir interfaces customer-facing em ambiente enterprise, garantindo escalabilidade, manutencao, performance e consistencia da experiencia.",
    solution:
      "Entrega de novas funcionalidades, otimizacao de jornadas digitais, estruturacao de arquitetura frontend e criacao de componentes reutilizaveis.",
    results: ["Jornadas digitais mais fluidas", "Padroes UI reutilizaveis e escalaveis", "Melhorias de performance, responsividade e acessibilidade"],
    demo: "#",
    github: null
  },
  {
    slug: "comboios-de-portugal-pwa",
    name: "Comboios de Portugal PWA",
    category: "Frontend",
    description:
      "Desenvolvimento da nova aplicacao da Comboios de Portugal, uma Progressive Web App em React para melhorar servicos digitais de mobilidade.",
    technologies: ["React", "PWA", "JavaScript", "Accessibility", "Real-time APIs"],
    challenge:
      "Criar uma experiencia rapida, eficiente e fiavel para consulta de horarios, bilhetica e utilizacao mobile-first.",
    solution:
      "Implementacao PWA, desenvolvimento React, integracao de APIs em tempo real, otimizacao para acesso offline e carregamento rapido.",
    results: ["Experiencia mobile mais rapida", "Acesso offline via PWA", "Informacao de horarios e bilhetes mais atualizada", "Maior foco em acessibilidade"],
    demo: "#",
    github: null
  },
  {
    slug: "radio-popular-ecommerce",
    name: "Radio Popular E-commerce",
    category: "E-commerce",
    description:
      "Desenvolvimento e otimizacao da plataforma e-commerce da Radio Popular, uma das principais retalhistas portuguesas de eletronica e eletrodomesticos.",
    technologies: ["Vanilla JavaScript", "PHP", "HTML", "CSS", "Performance"],
    challenge:
      "Melhorar uma plataforma de comercio eletronico com foco em responsividade, pesquisa, filtros inteligentes e experiencia de compra.",
    solution:
      "Implementacao de funcionalidades dinamicas, pesquisa avancada, smart filters, otimizacoes de performance e colaboracao proxima com UI/UX.",
    results: ["Experiencia de compra mais fluida", "Pesquisa e filtros mais eficientes", "Melhores tempos de carregamento", "Interface mais intuitiva e acessivel"],
    demo: "#",
    github: null
  },
  {
    slug: "citizen-services-platform",
    name: "Portal Unico - E-Portugal",
    category: "Government",
    description:
      "Contribuicao para a nova versao do Portal Unico - E-Portugal, uma plataforma publica essencial para modernizar e simplificar o acesso a servicos digitais em Portugal.",
    technologies: ["Next.js", "React", "TypeScript", "ES6+", "Accessibility", "Jira"],
    challenge:
      "Evoluir uma plataforma governamental de grande visibilidade, garantindo acessibilidade, performance, qualidade tecnica e uma experiencia clara para cidadaos.",
    solution:
      "Desenvolvimento frontend com Next.js, TypeScript e ES6+, metodologias ageis com Jira, otimizacao de performance e acessibilidade, e testes unitarios.",
    results: ["Servicos publicos digitais mais acessiveis", "Melhor performance e experiencia de utilizador", "Maior estabilidade atraves de testes unitarios"],
    demo: "#",
    github: null
  },
  {
    slug: "ama-public-services-ignit",
    name: "AMA Public Digital Services",
    category: "Government",
    description:
      "Colaboracao com a AMA atraves da IGNIT em servicos digitais publicos, com foco em React, Next.js, acessibilidade, performance e experiencia de utilizador.",
    technologies: ["Next.js", "TypeScript", "Storybook", "Tailwind", "BEM", "Jira"],
    challenge:
      "Construir interfaces publicas modernas e inclusivas mantendo qualidade, consistencia visual e capacidade de evolucao.",
    solution:
      "Criacao de componentes responsivos e manuteniveis, uso de Storybook, praticas ageis, otimizacao de performance e testes unitarios.",
    results: ["Interfaces publicas mais acessiveis", "Componentes frontend mais consistentes", "Maior qualidade e fiabilidade de entrega"],
    demo: "#",
    github: null
  },
  {
    slug: "contentful-saas-platform",
    name: "Contentful SaaS Platform",
    category: "Frontend",
    description:
      "Desenvolvimento de funcionalidades e arquitetura frontend para a plataforma SaaS global da Contentful durante a colaboracao com a Capgemini Engineering.",
    technologies: ["React.js", "TypeScript", "Redux Toolkit", "Jest", "React Testing Library"],
    challenge:
      "Evoluir uma plataforma global de headless CMS com requisitos fortes de escalabilidade, usabilidade e alinhamento com UX.",
    solution:
      "Implementacao de novas funcionalidades, definicao de standards tecnicos, otimizacao de performance e colaboracao com equipas multidisciplinares.",
    results: ["Arquitetura frontend mais escalavel", "Melhorias de usabilidade e performance", "Evolucao de produto SaaS usado por empresas globais"],
    demo: "#",
    github: null
  },
  {
    slug: "alelo-benefits-dashboard",
    name: "Alelo Benefits Dashboard",
    category: "Full Stack",
    description:
      "Desenvolvimento de interfaces ricas e dashboards para monitorizacao de receitas, frequencia de consumo, vendas e metricas de negocio na Alelo Benefits.",
    technologies: ["React.js", "Styled Components", "SASS", "Node.js", "Jest", "React Testing Library"],
    challenge:
      "Melhorar a visualizacao de dados e a gestao de indicadores criticos para clientes em ambiente financeiro/beneficios.",
    solution:
      "Entrega de novas funcionalidades, arquitetura frontend, boas praticas, testes automatizados, CI/CD e colaboracao com UX, produto e backend.",
    results: ["Dashboards mais interativos", "Melhor tomada de decisao para clientes", "Mais manutencao, escalabilidade e qualidade tecnica"],
    demo: "#",
    github: null
  },
  {
    slug: "ativa-investimentos-onboarding",
    name: "Ativa Investimentos Onboarding",
    category: "Full Stack",
    description:
      "Criacao de uma experiencia de cadastro simples e sem friccao para clientes de uma corretora de investimentos.",
    technologies: ["Vue.js", "Vuex", "JavaScript", "SASS", "Node.js", "Jest"],
    challenge:
      "Simplificar o onboarding financeiro desde o registo ate a ativacao da conta, mantendo performance e acessibilidade.",
    solution:
      "Melhoria de arquitetura frontend, desenvolvimento de novas funcionalidades, mentoria tecnica e integracao entre frontend e backend.",
    results: ["Fluxo de cadastro mais intuitivo", "Melhor performance no onboarding", "Maior alinhamento entre UX e engenharia"],
    demo: "#",
    github: null
  },
  {
    slug: "oi-fibra-hotsite",
    name: "Oi Fibra Hotsite",
    category: "Frontend",
    description:
      "Desenvolvimento do hotsite Oi Fibra com React, Next.js e Atomic Design para uma grande plataforma de telecomunicacoes no Brasil.",
    technologies: ["React", "Next.js", "Atomic Design", "JavaScript", "SASS"],
    challenge:
      "Criar uma base modular e reutilizavel com boa performance, SEO e manutencao para uma plataforma de alto alcance.",
    solution:
      "Arquitetura frontend modular, SSR com Next.js, documentacao de codigo e colaboracao agil com stakeholders.",
    results: ["Melhor performance e SEO", "Arquitetura de componentes mais escalavel", "Experiencia digital mais robusta para telecomunicacoes"],
    demo: "#",
    github: null
  },
  {
    slug: "globoplay-smart-tv",
    name: "Globoplay Smart TV",
    category: "Frontend",
    description:
      "Desenvolvimento de funcionalidades para a aplicacao Smart TV do Globoplay, uma das principais plataformas de streaming on-demand do Brasil.",
    technologies: ["React.js", "JavaScript", "Redux", "Storybook", "GraphQL", "Apollo Client"],
    challenge:
      "Melhorar a experiencia de visualizacao em diferentes modelos de Smart TV, garantindo compatibilidade e fluidez.",
    solution:
      "Desenvolvimento de novas funcionalidades, testes funcionais em dispositivos TV e integracao com GraphQL/Apollo Client.",
    results: ["Experiencia de streaming mais fluida", "Maior compatibilidade entre dispositivos", "Interface otimizada para Smart TVs"],
    demo: "#",
    github: null
  },
  {
    slug: "petrobras-drilling-dashboard",
    name: "Petrobras Drilling Dashboard",
    category: "Full Stack",
    description:
      "Solucoes para planeamento de pocos, operacoes de perfuracao e gestao de producao da Petrobras atraves do GTEP/PUC-RJ.",
    technologies: ["Angular", "TypeScript", "RxJS", "Recharts", "D3.js"],
    challenge:
      "Transformar uma aplicacao desktop em solucao web rica com dashboards em tempo real para operacoes criticas de engenharia.",
    solution:
      "Desenvolvimento de aplicacao web para monitorizacao, envio de relatorios, acompanhamento de bugs e visualizacao de dados operacionais.",
    results: ["Dados operacionais em tempo real", "Melhor eficiencia em operacoes de perfuracao", "Comunicacao mais clara entre equipas de engenharia"],
    demo: "#",
    github: null
  },
  {
    slug: "oi-consumer-account-platform",
    name: "Oi Consumer Account Platform",
    category: "Frontend",
    description:
      "Desenvolvimento de aplicacao publica para consumidores Oi gerirem perfis, contas e configuracoes com uma interface clara e intuitiva.",
    technologies: ["ReactJS", "Redux", "Storybook", "Angular", "Ionic", "Atomic Design"],
    challenge:
      "Criar uma experiencia cross-platform acessivel e reutilizavel para milhoes de utilizadores.",
    solution:
      "Desenvolvimento de componentes React, uso de Angular/Ionic, Storybook e padroes Atomic Design para escalar a UI.",
    results: ["Gestao de conta mais simples", "Componentes reutilizaveis", "Experiencia acessivel e cross-platform"],
    demo: "#",
    github: null
  },
  {
    slug: "bradesco-seguros-web-platforms",
    name: "Bradesco Seguros Web Platforms",
    category: "Frontend",
    description:
      "Desenvolvimento e otimizacao de intranets e aplicacoes web customer-facing para Bradesco Seguros durante a experiencia na Ebix.",
    technologies: ["Vanilla JavaScript", "HTML5", "CSS3"],
    challenge:
      "Melhorar performance, manutencao e consistencia visual de plataformas internas e externas no setor segurador.",
    solution:
      "Interfaces pixel-perfect, otimizacao de aplicacoes JavaScript, manutencao continua e aplicacao de standards web.",
    results: ["Melhor performance web", "Experiencia visual consistente", "Maior acessibilidade e manutencao"],
    demo: "#",
    github: null
  },
  {
    slug: "corporate-communication-digital-products",
    name: "Corporate Communication Digital Products",
    category: "Frontend",
    description:
      "Desenvolvimento de websites, newsletters, email marketing e motion graphics para clientes de comunicacao corporativa e publicidade.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Adobe Suite"],
    challenge:
      "Traduzir design, branding e objetivos de comunicacao em experiencias digitais funcionais e visualmente consistentes.",
    solution:
      "Implementacao de layouts responsivos, campanhas digitais, motion graphics e websites com foco em design, funcionalidade e experiencia.",
    results: ["Experiencias digitais visualmente consistentes", "Maior impacto em comunicacao corporativa", "Base solida entre design e frontend"],
    demo: "#",
    github: null
  }
];

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Design Systems"], level: 98 },
  { category: "Performance & SEO", items: ["Core Web Vitals", "Image Optimization", "Caching", "SEO"], level: 96 },
  { category: "Accessibility", items: ["WCAG", "Keyboard Navigation", "Semantic HTML", "Screen Readers"], level: 95 },
  { category: "Testing & Quality", items: ["Jest", "Vitest", "React Testing Library", "Playwright"], level: 90 },
  { category: "Backend & APIs", items: ["Node.js", "REST", "GraphQL"], level: 82 },
  { category: "DevOps", items: ["CI/CD", "Vercel", "Docker", "GitHub Actions"], level: 80 }
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
