import { articleReadingTime } from "@/lib/articles";
import {
  companies,
  projects as baseProjects,
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
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Design Systems"], level: 98 },
    { category: "Performance & SEO", items: ["Core Web Vitals", "Otimização de Imagens", "Caching", "SEO"], level: 96 },
    { category: "Acessibilidade", items: ["WCAG", "Navegação por Teclado", "HTML Semântico", "Leitores de Tela"], level: 95 },
    { category: "Testes & Qualidade", items: ["Jest", "Vitest", "React Testing Library", "Playwright"], level: 90 },
    { category: "Backend & APIs", items: ["Node.js", "REST", "GraphQL"], level: 82 },
    { category: "DevOps", items: ["CI/CD", "Vercel", "Docker", "GitHub Actions"], level: 80 }
  ],
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
      company: "GBL Tech",
      role: "Senior Frontend Developer",
      period: "Out 2025 - Presente",
      tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Accessibility"],
      responsibilities: [
        "Desenvolvimento e evolução de soluções frontend para Vodafone",
        "Entrega de novas funcionalidades e otimização de jornadas digitais",
        "Estruturação da arquitetura frontend em ambiente enterprise",
        "Colaboração com produto, design e backend",
        "Foco em performance, responsividade e acessibilidade",
        "Aprimoramento de qualidade e manutenção de código"
      ],
      results: [
        "Interfaces de cliente escaláveis e confiáveis",
        "Melhoria da experiência do utilizador",
        "Arquitetura mais sustentável",
        "Entrega consistente em produto telecom"
      ]
    },
    {
      company: "Inetum",
      role: "Senior Frontend Developer",
      period: "Jan 2024 - Abr 2025",
      tech: ["React", "PWA", "TypeScript", "JavaScript", "Accessibility", "Real-time APIs"],
      responsibilities: [
        "Desenvolvimento da nova aplicação PWA da Comboios de Portugal",
        "Implementação de funcionalidades React interativas",
        "Integração de APIs em tempo real",
        "Otimização mobile-first e suporte offline",
        "Garantia de acessibilidade e experiência do utilizador"
      ],
      results: [
        "Aplicação mais rápida e confiável",
        "Acesso offline via PWA",
        "Informação de horários e bilhetes sempre atualizada",
        "Experiência móvel mais fluida"
      ]
    },
    {
      company: "IGNIT",
      role: "Senior Frontend Developer",
      period: "Set 2023 - Jan 2024",
      tech: ["Next.js", "TypeScript", "React", "Storybook", "Tailwind", "BEM"],
      responsibilities: [
        "Desenvolvimento de interfaces para a AMA",
        "Uso de Next.js e TypeScript para soluções escaláveis",
        "Criação de componentes responsivos e manuteníveis",
        "Trabalho em metodologia ágil com Jira",
        "Testes unitários e garantia de qualidade",
        "Foco em performance e acessibilidade"
      ],
      results: [
        "Serviços públicos mais acessíveis",
        "Componentes frontend mais consistentes",
        "Entrega de alta qualidade em prazos curtos"
      ]
    },
    {
      company: "Capgemini Engineering",
      role: "Senior Software Engineering Consultant",
      period: "Jun 2022 - Jun 2023",
      tech: ["React", "TypeScript", "Redux Toolkit", "Jest", "React Testing Library", "ES6+"],
      responsibilities: [
        "Desenvolvimento de novas funcionalidades para Contentful",
        "Definição de arquitetura frontend e padrões técnicos",
        "Colaboração com UX, produto e equipes multidisciplinares",
        "Otimização de performance e usabilidade",
        "Liderança técnica em discussões de solução"
      ],
      results: [
        "Arquitetura de frontend mais escalável",
        "Plataforma mais estável e fácil de evoluir",
        "Melhorias diretas na experiência do usuário"
      ]
    },
    {
      company: "CI&T",
      role: "Frontend Developer",
      period: "Out 2020 - Abr 2022",
      tech: ["React", "Styled Components", "SASS", "Node.js", "Jest", "React Testing Library"],
      responsibilities: [
        "Desenvolvimento de dashboards e interfaces ricas",
        "Definição de arquitetura frontend e boas práticas",
        "Implementação de testes automatizados e CI/CD",
        "Colaboração com UX/UI, produto e backend",
        "Foco em performance, acessibilidade e manutenibilidade"
      ],
      results: [
        "Dashboards mais interativos e escaláveis",
        "Melhor tomada de decisão para clientes",
        "Maior qualidade técnica e estabilidade"
      ]
    },
    {
      company: "Ativa Investimentos",
      role: "Senior Frontend Developer",
      period: "Fev 2020 - Jun 2020",
      tech: ["Vue.js", "Vuex", "JavaScript", "SASS", "Node.js", "Jest"],
      responsibilities: [
        "Criação de onboarding financeiro simples e sem atrito",
        "Melhoria da arquitetura frontend e do fluxo de cadastro",
        "Colaboração entre UX e engenharia",
        "Mentoria técnica e suporte ao time",
        "Otimização de performance e acessibilidade"
      ],
      results: [
        "Onboarding mais intuitivo",
        "Experiência de cadastro mais rápida",
        "Integração mais fluida entre frontend e backend"
      ]
    },
    {
      company: "Accenture",
      role: "IT Consultant",
      period: "Set 2019 - Dez 2019",
      tech: ["React", "Next.js", "Atomic Design", "JavaScript", "SASS"],
      responsibilities: [
        "Desenvolvimento do hotsite Oi Fibra",
        "Arquitetura de componentes reutilizáveis",
        "Uso de Next.js para SSR e SEO",
        "Colaboração ágil com stakeholders",
        "Documentação de código e boas práticas"
      ],
      results: [
        "Melhor performance e SEO",
        "Interface escalável e modular",
        "Experiência digital mais robusta"
      ]
    },
    {
      company: "Altran",
      role: "Senior Application Developer",
      period: "Mai 2019 - Ago 2019",
      tech: ["React", "JavaScript", "Redux", "Storybook", "GraphQL", "Apollo Client"],
      responsibilities: [
        "Desenvolvimento da aplicação Globoplay Smart TV",
        "Otimização da interface para múltiplos modelos de TV",
        "Testes funcionais em dispositivos reais",
        "Colaboração com equipes cross-funcionais"
      ],
      results: [
        "Experiência de streaming mais fluida",
        "Maior compatibilidade entre TVs",
        "Interface otimizada para Smart TVs"
      ]
    },
    {
      company: "PUC-RJ / GTEP",
      role: "Senior Frontend Developer",
      period: "Set 2018 - Mai 2019",
      tech: ["Angular", "TypeScript", "RxJS", "Recharts", "D3.js"],
      responsibilities: [
        "Desenvolvimento de dashboard para operações de perfuração",
        "Transformação de aplicação desktop em solução web",
        "Integração de visualizações de dados em tempo real",
        "Colaboração com engenheiros de petróleo e software"
      ],
      results: [
        "Dados operacionais em tempo real",
        "Melhor eficiência em perfuração",
        "Comunicação mais clara entre equipes"
      ]
    },
    {
      company: "Oi S.A.",
      role: "Frontend Developer",
      period: "Jul 2017 - Ago 2018",
      tech: ["React", "Redux", "Storybook", "Angular", "Ionic", "Atomic Design"],
      responsibilities: [
        "Desenvolvimento de aplicação de conta para consumidores",
        "Criação de componentes escaláveis e reutilizáveis",
        "Garantia de interface acessível e cross-platform",
        "Alinhamento entre metas técnicas e de negócio"
      ],
      results: [
        "Gestão de contas mais simples",
        "Experiência acessível e intuitiva",
        "Componentes frontend mais consistentes"
      ]
    },
    {
      company: "Ebix",
      role: "Frontend Developer",
      period: "Jun 2014 - Fev 2017",
      tech: ["Vanilla JavaScript", "HTML5", "CSS3"],
      responsibilities: [
        "Desenvolvimento e otimização de intranets e apps web para Bradesco Seguros",
        "Uso de padrões web para performance e acessibilidade",
        "Análise contínua e manutenção de aplicações"
      ],
      results: [
        "Melhor performance web",
        "Experiência visual mais consistente",
        "Maior acessibilidade e manutenção"
      ]
    },
    {
      company: "Nós da Comunicação",
      role: "UI/UX Designer | Frontend Developer",
      period: "Fev 2011 - Fev 2014",
      tech: ["HTML5", "CSS3", "JavaScript", "Adobe Suite"],
      responsibilities: [
        "Criação de sites, newsletters e motion graphics",
        "Implementação digital com foco em design e experiência",
        "Desenvolvimento de campanhas e ativos de comunicação"
      ],
      results: [
        "Experiências digitais consistentes",
        "Comunicação visual mais impactante",
        "Soluções digitais alinhadas à marca"
      ]
    },
    {
      company: "Barata Publicidade",
      role: "Designer Web",
      period: "Jul 2009 - Fev 2011",
      tech: ["HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Criação de layouts responsivos e pixel-perfect",
        "Tradução de mockups em websites",
        "Prototipagem de interfaces"
      ],
      results: [
        "Websites funcionais e visualmente fiéis",
        "Implementação precisa de design",
        "Experiência digital consistente"
      ]
    },
    {
      company: "Outras Letras",
      role: "Designer Web",
      period: "Jan 2007 - Jun 2009",
      tech: ["HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Design editorial e desenvolvimento web",
        "Criação de identidade visual coesa",
        "Produção de peças para mídias impressas e digitais"
      ],
      results: [
        "Identidade visual consistente",
        "Produção de materiais atraentes",
        "Web e editorial integrados"
      ]
    }
  ],
  projects: [
    {
      slug: "inetum-digital-platforms",
      name: "Inetum Digital Platforms",
      category: "Frontend",
      description:
        "Entrega frontend senior na Inetum para produtos digitais em transportes, e-commerce e servicos publicos, incluindo Comboios de Portugal, Radio Popular e Portal Unico - E-Portugal.",
      technologies: ["React", "PWA", "Next.js", "TypeScript", "ES6+", "JavaScript", "PHP", "Accessibility", "Jira"],
      challenge:
        "Contribuir para plataformas de setores distintos com requisitos exigentes de performance, acessibilidade, fiabilidade, mobile-first e experiencia de utilizador consistente.",
      solution:
        "Desenvolvimento de interfaces React e Next.js, implementacao PWA, integracao de APIs em tempo real, otimizacao mobile-first, melhorias de performance, componentes reutilizaveis e testes unitarios.",
      results: [
        "Aplicacao PWA mais rapida e fiavel para a Comboios de Portugal",
        "Experiencia de compra mais fluida na plataforma e-commerce da Radio Popular",
        "Portal Unico - E-Portugal mais acessivel, performante e estavel",
        "Melhor consistencia frontend em produtos digitais de alto impacto"
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
        "Evoluir uma plataforma governamental de grande visibilidade, garantindo acessibilidade, performance, qualidade tecnica e uma experiencia clara para cidadaos em diferentes contextos de utilizacao.",
      solution:
        "Desenvolvimento de interfaces frontend com Next.js, TypeScript e ES6+, aplicacao de praticas ageis com Jira, otimizacao de performance e acessibilidade, e criacao de testes unitarios para aumentar estabilidade e confianca na entrega.",
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
        "Arquitetura frontend escalável começa por definir fronteiras claras entre domínio de produto e infra-estrutura técnica. Componentes devem expressar intenção de produto — o que o utilizador espera — enquanto a complexidade técnica fica encapsulada e próxima do domínio que a necessita.",
        "Princípios essenciais incluem design tokens para consistência visual, contratos de dados previsíveis entre camadas e convenções de componentes que favoreçam reutilização sem acoplamento excessivo. Isto reduz custo de mudança e facilita reviews.",
        "Decisões de rendering (SSR, SSG, ISR, client-side) devem ser orientadas por custo do utilizador e criticidade da página: escolha híbrida quando necessário e documente as razões para cada padrão.",
        "Cobertura de testes deve focar fluxos críticos: unitários para lógica, component tests para API pública dos componentes e E2E para jornadas de alto impacto. Integre testes de performance e acessibilidade no pipeline de CI.",
        "Uma boa DX acelera a equipa: Storybook bem organizado, templates de projeto, linting consistente e documentação de convenções tornam onboarding e manutenção previsíveis.",
        "Monitore a arquitetura em produção: erros, regressões de desempenho e tempo de build. Defina budgets de performance e um processo para tratar regressões rapidamente.",
        "Na prática, vise simplicidade nas abstrações. Prefira soluções iterativas que diminuam o custo de mudança, tornando o sistema mais resiliente e fácil de evoluir." 
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
        "Core Web Vitals transformam métricas técnicas em sinais acionáveis para produto: LCP indica a rapidez com que o conteúdo principal aparece, INP mensura a responsividade nas interações e CLS mede estabilidade visual.",
        "Meça em laboratório (synthetic) e em campo (RUM). Tests sintéticos ajudam a diagnosticar regressões controladas; RUM mostra o impacto real nos utilizadores e nas diferentes condições de rede.",
        "Defina prioridades por impacto: identifique páginas que geram tráfego e receita, crie budgets de performance e adicione checagens automáticas no pipeline para impedir regressões.",
        "Intervenções comuns e eficazes incluem otimização de imagens (formatos modernos, responsive images), pré-carregamento crítico, redução de JS no caminho crítico, e políticas de cache agressivas para ativos estáticos.",
        "Integre Core Web Vitals com dashboards de produto e aloque propriedade clara entre frontend, infra e produto. Métricas isoladas não bastam — acompanhe conversão e retenção para justificar trade-offs técnicos.",
        "Ao tornar performance uma propriedade do produto, equipas conseguem decidir entre velocidade, funcionalidade e custo, e implementar melhorias sustentáveis no longo prazo." 
      ].join("\n\n")
    },
    {
      slug: "acessibilidade-em-projetos-React",
      title: "Acessibilidade em projetos React",
      description: "Como transformar acessibilidade num hábito de engenharia e não num checkpoint tardio.",
      date: "2026-03-04",
      category: "Accessibility",
      tags: ["Accessibility", "React", "Design Systems"],
      body: [
        "Acessibilidade deixa de ser um checklist quando se transforma em prática de equipa. Componentes base devem incluir semântica adequada, estados de foco visíveis, contraste suficiente e suporte completo à navegação por teclado.",
        "No ecossistema React, priorize HTML nativo sempre que possível e exponha uma API de componentes que force padrões acessíveis. Documente comportamentos esperados e propriedades que controlam foco, labels e estados auxiliares.",
        "Automatize verificações com ferramentas como axe em testes unitários e E2E, e integre verificações em Storybook para revisão visual. Testes manuais com leitores de ecrã e navegação por teclado complementam os testes automáticos.",
        "Inclua acessibilidade na definição de pronto: PRs sem regressões a11y não devem ser aceites. Realize auditorias periódicas e acompanhe métricas (por exemplo, número de violações críticas) como KPI de qualidade.",
        "Por fim, invista em formação prática: pair programming, guidelines concisas e exemplos reais aceleram a adoção. Acessibilidade consistente reduz risco legal, amplia audiência e melhora UX para todos." 
      ].join("\n\n")
    }
  ]
};

const en: typeof pt = {
  ...pt,
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Design Systems"], level: 98 },
    { category: "Performance & SEO", items: ["Core Web Vitals", "Image Optimization", "Caching", "SEO"], level: 96 },
    { category: "Accessibility", items: ["WCAG", "Keyboard Navigation", "Semantic HTML", "Screen Readers"], level: 95 },
    { category: "Testing & Quality", items: ["Jest", "Vitest", "React Testing Library", "Playwright"], level: 90 },
    { category: "Backend & APIs", items: ["Node.js", "REST", "GraphQL"], level: 82 },
    { category: "DevOps", items: ["CI/CD", "Vercel", "Docker", "GitHub Actions"], level: 80 }
  ],
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
      "inetum-digital-platforms": {
        name: "Inetum Digital Platforms",
        description:
          "Senior frontend delivery at Inetum for digital products across transport, e-commerce and public services, including Comboios de Portugal, Radio Popular and Portal Unico - E-Portugal.",
        challenge:
          "Contribute to platforms across different sectors with demanding requirements for performance, accessibility, reliability, mobile-first delivery and consistent user experience.",
        solution:
          "Developed React and Next.js interfaces, implemented PWA capabilities, integrated real-time APIs, optimized mobile-first experiences, improved performance, built reusable components and added unit testing.",
        results: [
          "Faster and more reliable PWA for Comboios de Portugal",
          "Smoother shopping experience on Radio Popular's e-commerce platform",
          "More accessible, performant and stable Portal Unico - E-Portugal",
          "Better frontend consistency across high-impact digital products"
        ]
      },
      "citizen-services-platform": {
        description: "Contribution to the new version of Portal Unico - E-Portugal, a key public platform designed to modernize and simplify access to digital services in Portugal.",
        challenge: "Evolve a high-visibility government platform while ensuring accessibility, performance, technical quality, and a clear user experience for citizens across different usage contexts.",
        solution: "Developed frontend interfaces with Next.js, TypeScript and ES6+, applied agile practices with Jira, improved performance and accessibility, and added unit testing to increase stability and delivery confidence.",
        results: [
          "More accessible public digital services",
          "Improved performance and user experience",
          "Greater stability through unit testing",
          "More modern and maintainable frontend foundation"
        ],
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
          "Scalable frontend architecture begins by defining clear boundaries between product intent and technical infrastructure. Components should communicate what the product does for users, while technical complexity remains encapsulated where it is needed.",
          "Core practices include design tokens for consistent visual language, predictable data contracts between layers, and component conventions that enable reuse without tight coupling — all of which reduce the cost of change.",
          "Rendering strategies (SSR, SSG, ISR, client-side) should be chosen based on user cost and page criticality; prefer hybrid approaches when appropriate and document the rationale for each pattern.",
          "Testing should protect critical user flows: unit tests for logic, component tests for public APIs, and E2E for high-impact journeys. Include performance and accessibility checks in CI to prevent regressions.",
          "Developer experience matters: a well-structured Storybook, project templates, consistent linting and clear conventions make onboarding and maintenance predictable and fast.",
          "Monitor architecture in production — errors, performance regressions and build time — and set performance budgets with a defined remediation process.",
          "Aim for pragmatic simplicity in abstractions. Iterative solutions that lower the cost of change produce more resilient, evolvable systems." 
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
          "Core Web Vitals turn technical measurements into actionable product signals: LCP measures how quickly main content appears, INP captures interaction latency, and CLS reflects visual stability.",
          "Measure both in the lab (synthetic) and in the field (RUM). Synthetic tests are useful for debugging regressions under controlled conditions; RUM reveals the real-world impact across devices and networks.",
          "Prioritize work by impact: identify pages that drive traffic and revenue, create performance budgets and add automated checks to your CI to block regressions.",
          "Common interventions include image optimization (modern formats, responsive sizes), critical resource prioritization, reducing JS on the critical path, and strong caching strategies for static assets.",
          "Integrate Core Web Vitals into product dashboards and assign clear ownership between frontend, infra and product teams. Metrics alone are not enough — correlate them with conversion and retention to justify trade-offs.",
          "Making performance a product-level concern enables teams to balance speed, features and cost, and to deliver sustainable improvements over time." 
      ].join("\n\n")
    },
    {
      slug: "acessibilidade-em-projetos-React",
      title: "Accessibility in React projects",
      description: "How to turn accessibility into an engineering habit instead of a late checkpoint.",
      date: "2026-03-04",
      category: "Accessibility",
      tags: ["Accessibility", "React", "Design Systems"],
      body: [
          "Accessibility becomes reliable when embedded in team practices rather than left to individual effort. Base components must include proper semantics, visible focus states, sufficient contrast and full keyboard support.",
          "In React, favor native HTML elements where possible and design component APIs that enforce accessible defaults. Document expected behaviors and the props that control focus, labeling and auxiliary states.",
          "Automate checks with tools like axe in unit and E2E tests, and surface accessibility issues in Storybook for early visual review. Manual testing with screen readers and keyboard navigation complements automated checks.",
          "Make a11y part of your definition of done: PRs should not introduce accessibility regressions. Run periodic audits and track key metrics (for example, critical violations) as quality indicators.",
          "Invest in hands-on training: pair programming, concise guidelines and real examples accelerate adoption. Consistent accessibility reduces legal risk, broadens your audience and improves UX for everyone." 
      ].join("\n\n")
    }
  ]
};

export type LocalizedData = typeof pt;

const projectTranslations: Record<
  string,
  Partial<{
    name: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
  }>
> = {
 "vodafone-digital-products": {
  description:
    "Development and continuous evolution of Vodafone's digital products, building enterprise-grade frontend applications with React, TypeScript, Vite and a microfrontend architecture based on Module Federation.",
  challenge:
    "Deliver complex customer-facing digital journeys for contract signing while ensuring scalability, maintainability, internationalization, performance and seamless integration across distributed frontend applications.",
  solution:
    "Developed and evolved microfrontends using Vite and Module Federation, implemented multilingual customer journeys for digital contract signing, integrated Headless CMS content through Contentful, built reusable UI components, validated user documents and collaborated closely with product, UX/UI and backend teams to deliver scalable enterprise solutions.",
  results: [
    "Microfrontend architecture with Vite and Module Federation",
    "End-to-end digital contract signing journeys",
    "Headless CMS integration with Contentful",
    "Internationalized application with multilingual support",
    "Reusable and scalable component architecture",
    "Improved performance, accessibility and maintainability"
  ]
  },
  "comboios-de-portugal-pwa": {
    name: "Comboios de Portugal PWA",
    description:
      "Development of the new Comboios de Portugal application, a React Progressive Web App designed to make schedules, ticketing and mobility services faster, more accessible and more reliable.",
    challenge:
      "Create a fast, efficient mobile-first experience for schedules, ticketing and uninterrupted access to critical travel information, even while on the move.",
    solution:
      "Implemented PWA capabilities, React development, real-time API integration, offline access, mobile-first optimization and accessibility and performance improvements.",
    results: ["Faster and more stable mobile experience", "Offline access through PWA", "More up-to-date schedule and ticketing information", "Better usability for travelers on the go"]
  },
  "radio-popular-ecommerce": {
    name: "Radio Popular E-commerce",
    description:
      "Development and optimization of Radio Popular's e-commerce platform, with a focus on product discovery, frontend performance and shopping experience for one of Portugal's leading electronics retailers.",
    challenge:
      "Improve a large e-commerce platform by strengthening responsiveness, search, smart filters, SEO and the overall shopping experience across devices.",
    solution:
      "Implemented dynamic features, advanced search, smart filters, performance optimizations and close collaboration with UI/UX to reduce friction in browsing and product discovery.",
    results: ["Smoother shopping experience", "More efficient search and filters", "Better loading and navigation speed", "More intuitive and accessible interface"]
  },
  "citizen-services-platform": {
    name: "Portal Unico - E-Portugal",
    description:
      "Contribution to the new version of Portal Unico - E-Portugal, a key public platform designed to modernize and simplify access to digital services in Portugal.",
    challenge:
      "Evolve a high-visibility government platform while ensuring accessibility, performance, technical quality and a clear experience for citizens across different usage contexts.",
    solution:
      "Developed frontend interfaces with Next.js, TypeScript and ES6+, applied agile practices with Jira, improved performance and accessibility, and added unit testing to strengthen stability and delivery confidence.",
    results: ["More accessible public digital services", "Improved performance and user experience", "Greater stability through unit testing", "A more modern and maintainable frontend foundation"]
  },
  "ama-public-services-ignit": {
    name: "AMA Public Digital Services",
    description:
      "Collaboration with AMA through IGNIT on public digital services, focused on building modern, accessible and sustainable interfaces with React, Next.js and TypeScript.",
    challenge:
      "Build modern and inclusive public interfaces while preserving quality, visual consistency, performance and room for continuous evolution in an agile delivery environment.",
    solution:
      "Created responsive and maintainable components, used Storybook, Tailwind and BEM, added unit tests and followed agile practices to reinforce quality, reuse and performance.",
    results: ["More accessible public interfaces", "More consistent frontend components", "Higher delivery quality and reliability", "A stronger foundation for ongoing product evolution"]
  },
  "contentful-saas-platform": {
    name: "Contentful SaaS Platform",
    description:
      "Feature development and frontend architecture work for Contentful's global SaaS platform, contributing to a more scalable, usable and consistent product experience.",
    challenge:
      "Evolve a global headless CMS platform with demanding expectations around scalability, usability, performance and alignment between engineering, UX and product.",
    solution:
      "Implemented new features in React and TypeScript, defined technical standards, improved performance, reinforced testing and collaborated closely with multidisciplinary teams.",
    results: ["More scalable frontend architecture", "Usability and performance improvements", "More consistent delivery in a global SaaS environment", "Continued evolution of a product used by global enterprises"]
  },
  "alelo-benefits-dashboard": {
    name: "Alelo Benefits Dashboard",
    description:
      "Development of rich interfaces and dashboards to monitor revenue, consumption frequency, sales and business metrics at Alelo Benefits, with a strong focus on data-driven decision-making.",
    challenge:
      "Improve data visualization and management of critical indicators for benefits and financial clients while preserving technical quality and reliability.",
    solution:
      "Delivered new features, defined frontend architecture, applied best practices, added automated tests and CI/CD, and collaborated closely with UX, product and backend teams.",
    results: ["More interactive and scalable dashboards", "Better decision-making for clients", "Higher technical quality and stability", "A stronger foundation for evolving business metrics"]
  },
  "ativa-investimentos-onboarding": {
    name: "Ativa Investimentos Onboarding",
    description:
      "Creation of a simple, frictionless registration experience for customers of an investment brokerage, reducing barriers in financial onboarding.",
    challenge:
      "Simplify financial onboarding from registration to account activation while preserving performance, accessibility and alignment between UX and engineering.",
    solution:
      "Improved the frontend architecture, developed new features in Vue.js, provided technical mentoring and integrated frontend and backend services to reduce registration friction.",
    results: ["More intuitive registration flow", "Better onboarding performance", "Stronger alignment between UX and engineering", "Smoother activation experience"]
  },
  "oi-fibra-hotsite": {
    name: "Oi Fibra Hotsite",
    description:
      "Development of the Oi Fibra hotsite with React, Next.js and Atomic Design for a major telecommunications platform in Brazil, with a focus on performance, SEO and reusable components.",
    challenge:
      "Create a modular and reusable foundation with strong performance, SEO, SSR and maintainability for a high-reach platform with significant digital visibility.",
    solution:
      "Built modular frontend architecture, SSR with Next.js, documented the codebase, used Atomic Design principles and collaborated closely with stakeholders in an agile setup.",
    results: ["Better performance and SEO", "More scalable component architecture", "More robust digital experience for telecommunications"]
  },
  "globoplay-smart-tv": {
    name: "Globoplay Smart TV",
    description:
      "Feature development for Globoplay's Smart TV application, focused on a smoother streaming experience and compatibility across different manufacturers and device models.",
    challenge:
      "Improve the viewing experience across different Smart TV models while ensuring compatibility, navigation fluidity and stability on real devices.",
    solution:
      "Developed new features, ran functional tests on real TV devices and integrated GraphQL with Apollo Client to support a more consistent experience.",
    results: ["Smoother streaming experience", "Greater device compatibility", "Interface optimized for Smart TVs"]
  },
  "petrobras-drilling-dashboard": {
    name: "Petrobras Drilling Dashboard",
    description:
      "Solutions for well planning, drilling operations and production management for Petrobras through GTEP/PUC-RJ, translating complex technical workflows into a data-rich web experience.",
    challenge:
      "Transform a desktop application into a rich web solution with real-time dashboards for critical engineering operations and multidisciplinary teams.",
    solution:
      "Developed a web application with Angular and TypeScript for monitoring, reporting, bug tracking and real-time operational data visualization.",
    results: ["Real-time operational data", "Greater efficiency in drilling operations", "Clearer communication between engineering teams"]
  },
  "oi-consumer-account-platform": {
    name: "Oi Consumer Account Platform",
    description:
      "Development of a public consumer application for Oi users to manage profiles, accounts and settings through a clear interface designed for high user volume.",
    challenge:
      "Create an accessible, reusable cross-platform experience for millions of users while balancing interface consistency and product evolution.",
    solution:
      "Developed React components, worked with Angular, Ionic, Storybook and Atomic Design patterns to scale the UI and support self-service journeys.",
    results: ["Simpler account management", "Reusable components", "Accessible and cross-platform experience", "A more consistent foundation for app evolution"]
  },
  "bradesco-seguros-web-platforms": {
    name: "Bradesco Seguros Web Platforms",
    description:
      "Development and optimization of intranets and customer-facing web applications for Bradesco Seguros, with a focus on performance, visual consistency and long-term maintainability.",
    challenge:
      "Improve performance, maintainability and visual consistency across internal and external insurance platforms while supporting stable operations in legacy environments.",
    solution:
      "Built pixel-perfect interfaces, optimized JavaScript applications, performed ongoing maintenance and applied web standards for stronger stability and usability.",
    results: ["Better web performance", "Consistent visual experience", "Greater accessibility and maintainability"]
  },
  "corporate-communication-digital-products": {
    name: "Corporate Communication Digital Products",
    description:
      "Development of websites, newsletters, email marketing and motion graphics for corporate communication and advertising clients, combining visual design and frontend implementation.",
    challenge:
      "Translate design, branding and communication goals into functional, responsive and visually consistent digital experiences.",
    solution:
      "Implemented responsive layouts, digital campaigns, motion graphics and websites with a focus on design, functionality and user experience.",
    results: ["Visually consistent digital experiences", "Greater impact in corporate communication", "Strong foundation between design and frontend"]
  }
};

function getLocalizedProjects(locale: Locale) {
  if (locale === "pt") return baseProjects;
  return baseProjects.map((project) => ({
    ...project,
    ...projectTranslations[project.slug]
  }));
}

export function getLocalizedData(locale: Locale): LocalizedData {
  return { ...(locale === "en" ? en : pt), projects: getLocalizedProjects(locale) };
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
