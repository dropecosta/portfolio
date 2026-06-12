export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null;
  const lower = value.toLowerCase();
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("en")) return "en";
  return null;
}

export const dictionary = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      skills: "Skills",
      blog: "Blog",
      contact: "Contacto",
      search: "Pesquisar",
      searchPlaceholder: "Pesquisar páginas, artigos e áreas...",
      noResults: "Sem resultados.",
      navigation: "Navegação",
      switchLanguage: "Mudar idioma"
    },
    common: {
      contact: "Contactar",
      downloadCv: "Download CV",
      viewProjects: "Ver projetos",
      technologies: "Tecnologias",
      demo: "Demo",
      github: "GitHub",
      previous: "Anterior",
      next: "Próximo",
      share: "Partilhar",
      readCaseStudy: "Ver case study",
      readingTime: "min de leitura"
    },
    home: {
      availability: "Disponível para consultoria frontend e full stack",
      intro:
        "Mais de 10 anos a construir plataformas web para governo, transportes, telecomunicações, e-commerce, fintech e media, com foco em React, Next.js, TypeScript, performance, SEO e acessibilidade.",
      profileLabel: "Perfil de Senior Engineer",
      profileLine: "Frontend foundations, product systems and measurable performance.",
      stackEyebrow: "Stack principal",
      stackTitle: "Ferramentas modernas para produtos sérios.",
      trustEyebrow: "Confiança",
      trustTitle: "Qualidade técnica com impacto de negócio.",
      latestEyebrow: "Últimos artigos",
      latestTitle: "Pensamento técnico para equipas que constroem."
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia sénior com gosto por sistemas simples, rápidos e duráveis.",
      story: "Minha história",
      values: "Valores"
    },
    projects: {
      eyebrow: "Projetos",
      title: "Case studies orientados a arquitetura, performance e produto.",
      challenge: "Desafio",
      solution: "Solução implementada",
      results: "Resultados alcançados",
      screenshot: "Screenshot placeholder preparado para assets reais do projeto."
    },
    experience: {
      eyebrow: "Experiência",
      title: "Uma trajetória em produtos digitais exigentes.",
      responsibilities: "Responsabilidades",
      technologies: "Tecnologias",
      results: "Resultados"
    },
    skills: {
      eyebrow: "Skills",
      title: "Competências organizadas para entrega real."
    },
    blog: {
      eyebrow: "Blog",
      title: "Artigos técnicos para equipas que procuram clareza.",
      searchHint: "Pesquisa global disponível em ⌘K. Pesquisa local pronta para indexação futura.",
      author: "Pedro Reis",
      toc: "Índice",
      tags: "Tags",
      newsletterTitle: "Newsletter técnica",
      newsletterText: "Recebe notas sobre frontend architecture, performance e engenharia de produto.",
      subscribe: "Subscrever"
    },
    contact: {
      eyebrow: "Contacto",
      title: "Vamos falar sobre o teu próximo produto ou desafio técnico.",
      channels: "Canais diretos",
      name: "Nome",
      email: "Email",
      company: "Empresa",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "A enviar...",
      success: "Mensagem recebida. Obrigado!",
      error: "Não foi possível enviar agora. Tenta por email."
    },
    footer:
      "Engenharia frontend e full stack para produtos rápidos, acessíveis e preparados para escala."
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      blog: "Blog",
      contact: "Contact",
      search: "Search",
      searchPlaceholder: "Search pages, articles and focus areas...",
      noResults: "No results.",
      navigation: "Navigation",
      switchLanguage: "Switch language"
    },
    common: {
      contact: "Contact",
      downloadCv: "Download CV",
      viewProjects: "View projects",
      technologies: "Technologies",
      demo: "Demo",
      github: "GitHub",
      previous: "Previous",
      next: "Next",
      share: "Share",
      readCaseStudy: "View case study",
      readingTime: "min read"
    },
    home: {
      availability: "Available for frontend and full stack consulting",
      intro:
        "Over 10 years building web platforms for government, transport, telecom, e-commerce, fintech and media, focused on React, Next.js, TypeScript, performance, SEO and accessibility.",
      profileLabel: "Senior Engineer Profile",
      profileLine: "Frontend foundations, product systems and measurable performance.",
      stackEyebrow: "Core stack",
      stackTitle: "Modern tools for serious products.",
      trustEyebrow: "Trust",
      trustTitle: "Technical quality with business impact.",
      latestEyebrow: "Latest articles",
      latestTitle: "Technical thinking for teams that build."
    },
    about: {
      eyebrow: "About",
      title: "Senior engineering for systems that stay simple, fast and durable.",
      story: "My story",
      values: "Values"
    },
    projects: {
      eyebrow: "Projects",
      title: "Case studies shaped by architecture, performance and product outcomes.",
      challenge: "Challenge",
      solution: "Implemented solution",
      results: "Results achieved",
      screenshot: "Screenshot placeholder ready for real project assets."
    },
    experience: {
      eyebrow: "Experience",
      title: "A track record across demanding digital products.",
      responsibilities: "Responsibilities",
      technologies: "Technologies",
      results: "Results"
    },
    skills: {
      eyebrow: "Skills",
      title: "Capabilities organized around real delivery."
    },
    blog: {
      eyebrow: "Blog",
      title: "Technical articles for teams looking for clarity.",
      searchHint: "Global search is available with ⌘K. Local search is ready for future indexing.",
      author: "Pedro Reis",
      toc: "Table of contents",
      tags: "Tags",
      newsletterTitle: "Technical newsletter",
      newsletterText: "Receive notes on frontend architecture, performance and product engineering.",
      subscribe: "Subscribe"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about your next product or technical challenge.",
      channels: "Direct channels",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message received. Thank you!",
      error: "Could not send right now. Try email instead."
    },
    footer:
      "Frontend and full stack engineering for fast, accessible products ready to scale."
  }
} as const;
