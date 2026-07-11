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
      "Desenvolvimento e evolucao continua dos produtos digitais da Vodafone, criando aplicacoes frontend de nivel enterprise com React, TypeScript, Vite e arquitetura de microfrontends baseada em Module Federation.",
    technologies: ["React", "TypeScript", "JavaScript", "Vite", "Module Federation", "Contentful", "Accessibility"],
    challenge:
      "Entregar jornadas digitais complexas para assinatura de contratos, garantindo escalabilidade, manutenibilidade, internacionalizacao, desempenho e integracao fluida entre aplicacoes frontend distribuidas.",
    solution:
      "Desenvolvimento e evolucao de microfrontends utilizando Vite e Module Federation, implementacao de jornadas multilingues para assinatura digital de contratos, integracao de conteudo atraves do Headless CMS Contentful, criacao de componentes reutilizaveis, validacao de documentos dos utilizadores e colaboracao proxima com equipas de produto, UX/UI e backend.",
    results: [
      "Arquitetura de microfrontends com Vite e Module Federation",
      "Jornadas completas para assinatura digital de contratos",
      "Integracao com Headless CMS (Contentful)",
      "Aplicacao internacionalizada com suporte multilingue",
      "Arquitetura de componentes reutilizaveis e escalaveis",
      "Melhorias de desempenho, acessibilidade e manutenibilidade"
    ],
    demo: "#",
    github: null,
    "vodafone-digital-products": {
      description:
        "Desenvolvimento e evolução contínua dos produtos digitais da Vodafone, criando aplicações frontend de nível enterprise com React, TypeScript, Vite e arquitetura de microfrontends baseada em Module Federation.",
      challenge:
        "Entregar jornadas digitais complexas para assinatura de contratos, garantindo escalabilidade, manutenibilidade, internacionalização, desempenho e integração fluida entre aplicações frontend distribuídas.",
      solution:
        "Desenvolvimento e evolução de microfrontends utilizando Vite e Module Federation, implementação de jornadas multilíngues para assinatura digital de contratos, integração de conteúdo através do Headless CMS Contentful, criação de componentes reutilizáveis, validação de documentos dos utilizadores e colaboração próxima com equipas de Produto, UX/UI e Backend para entregar soluções escaláveis em ambiente enterprise.",
      results: [
        "Arquitetura de microfrontends com Vite e Module Federation",
        "Jornadas completas para assinatura digital de contratos",
        "Integração com Headless CMS (Contentful)",
        "Aplicação internacionalizada com suporte multilíngue",
        "Arquitetura de componentes reutilizáveis e escaláveis",
        "Melhorias de desempenho, acessibilidade e manutenibilidade"
      ]
    },
  },
  {
    slug: "comboios-de-portugal-pwa",
    name: "Comboios de Portugal PWA",
    category: "Frontend",
    description:
      "Desenvolvimento da nova aplicacao da Comboios de Portugal, uma Progressive Web App em React desenhada para tornar horarios, bilhetica e servicos de mobilidade mais rapidos, acessiveis e fiaveis.",
    technologies: ["React", "PWA", "JavaScript", "Accessibility", "Real-time APIs"],
    challenge:
      "Criar uma experiencia mobile-first rapida e eficiente para consulta de horarios, compra de bilhetes e acesso continuo a informacao critica, mesmo em contexto de mobilidade.",
    solution:
      "Implementacao de capacidades PWA, desenvolvimento React com integracao de APIs em tempo real, suporte offline, otimização mobile-first e melhorias de acessibilidade e performance.",
    results: [
      "Experiencia mobile mais rapida e estavel",
      "Acesso offline via PWA",
      "Informacao de horarios e bilhetes mais atualizada",
      "Melhor usabilidade para utilizadores em movimento"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "radio-popular-ecommerce",
    name: "Radio Popular E-commerce",
    category: "E-commerce",
    description:
      "Desenvolvimento e otimizacao da plataforma e-commerce da Radio Popular, com foco em descoberta de produto, performance frontend e experiencia de compra para uma das maiores retalhistas portuguesas de eletronica e eletrodomesticos.",
    technologies: ["Vanilla JavaScript", "PHP", "HTML", "CSS", "Performance"],
    challenge:
      "Melhorar uma plataforma de comercio eletronico com catalogo amplo, reforcando responsividade, pesquisa, filtros inteligentes, SEO e experiencia de compra em diferentes dispositivos.",
    solution:
      "Implementacao de funcionalidades dinamicas, pesquisa avancada, smart filters, otimizações de performance e colaboracao proxima com UI/UX para reduzir friccao na navegacao e descoberta de produtos.",
    results: [
      "Experiencia de compra mais fluida",
      "Pesquisa e filtros mais eficientes",
      "Melhores tempos de carregamento e navegacao",
      "Interface mais intuitiva e acessivel"
    ],
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
      "Evoluir uma plataforma governamental de grande visibilidade, garantindo acessibilidade, performance, qualidade tecnica e uma experiencia clara para cidadaos em multiplos contextos de utilizacao.",
    solution:
      "Desenvolvimento frontend com Next.js, TypeScript e ES6+, trabalho agil com Jira, otimizacao de performance e acessibilidade e criacao de testes unitarios para reforcar estabilidade e confianca na entrega.",
    results: [
      "Servicos publicos digitais mais acessiveis",
      "Melhor performance e experiencia de utilizador",
      "Maior estabilidade atraves de testes unitarios",
      "Base frontend mais moderna e manutenivel"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "ama-public-services-ignit",
    name: "AMA Public Digital Services",
    category: "Government",
    description:
      "Colaboracao com a AMA atraves da IGNIT em servicos digitais publicos, com foco na construcao de interfaces modernas, acessiveis e sustentaveis com React, Next.js e TypeScript.",
    technologies: ["Next.js", "TypeScript", "Storybook", "Tailwind", "BEM", "Jira"],
    challenge:
      "Construir interfaces publicas modernas e inclusivas mantendo qualidade, consistencia visual, performance e capacidade de evolucao em ambiente de entrega agil.",
    solution:
      "Criacao de componentes responsivos e manuteniveis, uso de Storybook, Tailwind e BEM, testes unitarios e praticas ageis para reforcar qualidade, reutilizacao e performance.",
    results: [
      "Interfaces publicas mais acessiveis",
      "Componentes frontend mais consistentes",
      "Maior qualidade e fiabilidade de entrega",
      "Melhor base para evolucao continua do produto"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "contentful-saas-platform",
    name: "Contentful SaaS Platform",
    category: "Frontend",
    description:
      "Desenvolvimento de funcionalidades e arquitetura frontend para a plataforma SaaS global da Contentful, contribuindo para uma experiencia de produto mais escalavel, usavel e consistente.",
    technologies: ["React.js", "TypeScript", "Redux Toolkit", "Jest", "React Testing Library"],
    challenge:
      "Evoluir uma plataforma global de headless CMS com requisitos elevados de escalabilidade, usabilidade, performance e alinhamento entre engenharia, UX e produto.",
    solution:
      "Implementacao de novas funcionalidades em React e TypeScript, definicao de standards tecnicos, melhoria de performance, reforco de testes e colaboracao com equipas multidisciplinares.",
    results: [
      "Arquitetura frontend mais escalavel",
      "Melhorias de usabilidade e performance",
      "Entrega mais consistente em ambiente SaaS global",
      "Evolucao de produto usado por empresas globais"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "alelo-benefits-dashboard",
    name: "Alelo Benefits Dashboard",
    category: "Full Stack",
    description:
      "Desenvolvimento de interfaces ricas e dashboards para monitorizacao de receitas, frequencia de consumo, vendas e metricas de negocio na Alelo Benefits, com forte foco em dados e tomada de decisao.",
    technologies: ["React.js", "Styled Components", "SASS", "Node.js", "Jest", "React Testing Library"],
    challenge:
      "Melhorar a visualizacao de dados e a gestao de indicadores criticos para clientes em ambiente de beneficios e servicos financeiros, mantendo qualidade tecnica e confiabilidade.",
    solution:
      "Entrega de novas funcionalidades, definicao de arquitetura frontend, boas praticas, testes automatizados, CI/CD e colaboracao constante com UX, produto e backend.",
    results: [
      "Dashboards mais interativos e escalaveis",
      "Melhor tomada de decisao para clientes",
      "Maior qualidade tecnica e estabilidade",
      "Base mais preparada para evolucao de indicadores"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "ativa-investimentos-onboarding",
    name: "Ativa Investimentos Onboarding",
    category: "Full Stack",
    description:
      "Criacao de uma experiencia de cadastro simples e sem friccao para clientes de uma corretora de investimentos, reduzindo barreiras no onboarding financeiro.",
    technologies: ["Vue.js", "Vuex", "JavaScript", "SASS", "Node.js", "Jest"],
    challenge:
      "Simplificar o onboarding financeiro desde o registo ate a ativacao da conta, preservando performance, acessibilidade e alinhamento entre UX e engenharia.",
    solution:
      "Melhoria de arquitetura frontend, desenvolvimento de novas funcionalidades em Vue.js, mentoria tecnica e integracao entre frontend e backend para reduzir friccao no cadastro.",
    results: [
      "Fluxo de cadastro mais intuitivo",
      "Melhor performance no onboarding",
      "Maior alinhamento entre UX e engenharia",
      "Experiencia de ativacao mais fluida"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "oi-fibra-hotsite",
    name: "Oi Fibra Hotsite",
    category: "Frontend",
    description:
      "Desenvolvimento do hotsite Oi Fibra com React, Next.js e Atomic Design para uma grande plataforma de telecomunicacoes no Brasil, com foco em performance, SEO e reutilizacao de componentes.",
    technologies: ["React", "Next.js", "Atomic Design", "JavaScript", "SASS"],
    challenge:
      "Criar uma base modular e reutilizavel com boa performance, SEO, SSR e manutencao para uma plataforma de alto alcance e forte visibilidade digital.",
    solution:
      "Arquitetura frontend modular, SSR com Next.js, documentacao de codigo, componentes orientados por Atomic Design e colaboracao agil com stakeholders.",
    results: [
      "Melhor performance e SEO",
      "Arquitetura de componentes mais escalavel",
      "Experiencia digital mais robusta para telecomunicacoes"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "globoplay-smart-tv",
    name: "Globoplay Smart TV",
    category: "Frontend",
    description:
      "Desenvolvimento de funcionalidades para a aplicacao Smart TV do Globoplay, com foco em experiencia de streaming fluida e compatibilidade entre diferentes fabricantes e modelos.",
    technologies: ["React.js", "JavaScript", "Redux", "Storybook", "GraphQL", "Apollo Client"],
    challenge:
      "Melhorar a experiencia de visualizacao em diferentes modelos de Smart TV, garantindo compatibilidade, fluidez de navegacao e estabilidade em dispositivos reais.",
    solution:
      "Desenvolvimento de novas funcionalidades, testes funcionais em dispositivos reais e integracao com GraphQL e Apollo Client para suportar uma experiencia mais consistente.",
    results: [
      "Experiencia de streaming mais fluida",
      "Maior compatibilidade entre dispositivos",
      "Interface otimizada para Smart TVs"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "petrobras-drilling-dashboard",
    name: "Petrobras Drilling Dashboard",
    category: "Full Stack",
    description:
      "Solucoes para planeamento de pocos, operacoes de perfuracao e gestao de producao da Petrobras atraves do GTEP/PUC-RJ, transformando fluxos tecnicos complexos em experiencia web orientada por dados.",
    technologies: ["Angular", "TypeScript", "RxJS", "Recharts", "D3.js"],
    challenge:
      "Transformar uma aplicacao desktop em solucao web rica com dashboards em tempo real para operacoes criticas de engenharia e equipas multidisciplinares.",
    solution:
      "Desenvolvimento de aplicacao web com Angular e TypeScript para monitorizacao, relatorios, acompanhamento de bugs e visualizacao de dados operacionais em tempo real.",
    results: [
      "Dados operacionais em tempo real",
      "Melhor eficiencia em operacoes de perfuracao",
      "Comunicacao mais clara entre equipas de engenharia"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "oi-consumer-account-platform",
    name: "Oi Consumer Account Platform",
    category: "Frontend",
    description:
      "Desenvolvimento de aplicacao publica para consumidores Oi gerirem perfis, contas e configuracoes com uma interface clara, intuitiva e preparada para alto volume de utilizadores.",
    technologies: ["ReactJS", "Redux", "Storybook", "Angular", "Ionic", "Atomic Design"],
    challenge:
      "Criar uma experiencia cross-platform acessivel e reutilizavel para milhoes de utilizadores, equilibrando consistencia de interface e evolucao de produto.",
    solution:
      "Desenvolvimento de componentes React, uso de Angular, Ionic, Storybook e padroes Atomic Design para escalar a UI e suportar jornadas self-service.",
    results: [
      "Gestao de conta mais simples",
      "Componentes reutilizaveis",
      "Experiencia acessivel e cross-platform",
      "Base mais consistente para evolucao da aplicacao"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "bradesco-seguros-web-platforms",
    name: "Bradesco Seguros Web Platforms",
    category: "Frontend",
    description:
      "Desenvolvimento e otimizacao de intranets e aplicacoes web customer-facing para Bradesco Seguros, com foco em performance, consistencia visual e manutencao de longo prazo.",
    technologies: ["Vanilla JavaScript", "HTML5", "CSS3"],
    challenge:
      "Melhorar performance, manutencao e consistencia visual de plataformas internas e externas no setor segurador, garantindo solidez em ambientes legados e operacionais.",
    solution:
      "Criacao de interfaces pixel-perfect, otimizacao de aplicacoes JavaScript, manutencao continua e aplicacao de standards web para estabilidade e melhor experiencia de uso.",
    results: [
      "Melhor performance web",
      "Experiencia visual consistente",
      "Maior acessibilidade e manutencao"
    ],
    demo: "#",
    github: null
  },
  {
    slug: "corporate-communication-digital-products",
    name: "Corporate Communication Digital Products",
    category: "Frontend",
    description:
      "Desenvolvimento de websites, newsletters, email marketing e motion graphics para clientes de comunicacao corporativa e publicidade, unindo design visual e implementacao frontend.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Adobe Suite"],
    challenge:
      "Traduzir design, branding e objetivos de comunicacao em experiencias digitais funcionais, responsivas e visualmente consistentes.",
    solution:
      "Implementacao de layouts responsivos, campanhas digitais, motion graphics e websites com foco em design, funcionalidade e experiencia de utilizador.",
    results: [
      "Experiencias digitais visualmente consistentes",
      "Maior impacto em comunicacao corporativa",
      "Base solida entre design e frontend"
    ],
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
