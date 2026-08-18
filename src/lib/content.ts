export const site = {
  name: "Paiva",
  role: "Frontend",
  email: "paiva@example.com",
  location: "Brasil",
  github: "https://github.com/paivaxqz/paiva-portfolio",
  linkedin: "https://linkedin.com",
};

export const nav = [
  { href: "#trabalho", label: "Trabalho" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const rotatingRoles = [
  "interfaces",
  "sistemas",
  "comércio",
  "dashboards",
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node",
  "Figma",
  "Vite",
  "PostgreSQL",
];

export const stats = [
  { value: 4, suffix: "+", label: "anos construindo na web" },
  { value: 18, suffix: "", label: "projetos entregues" },
  { value: 12, suffix: "", label: "produtos em produção" },
];

export const projects = [
  {
    year: "2026",
    title: "Balcão",
    kind: "Comércio local",
    summary:
      "Catálogo, carrinho e checkout para um mercado de bairro. O objetivo era o caixa digital não travar na hora do pico — não um e-commerce genérico.",
    stack: ["Next.js", "Stripe", "Postgres"],
    href: "#contato",
    accent: "#c45c26",
  },
  {
    year: "2025",
    title: "Painel Norte",
    kind: "Produto interno",
    summary:
      "Interface de anúncios e métricas. Tabelas densas, filtros que cabem na cabeça, zero ilustração decorativa. Feito para quem abre isso oito horas por dia.",
    stack: ["React", "TanStack Table", "Recharts"],
    href: "#contato",
    accent: "#2f5d50",
  },
  {
    year: "2025",
    title: "Linha",
    kind: "Site institucional",
    summary:
      "Site de uma marca pequena: tipografia grande, pouca cor, páginas que carregam rápido no 4G ruim. Editorial, não landing de SaaS.",
    stack: ["Next.js", "CMS", "Tailwind"],
    href: "#contato",
    accent: "#8a5a2b",
  },
];
