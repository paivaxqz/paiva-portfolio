export const site = {
  name: "Paiva",
  role: "Frontend",
  email: "paiva@example.com",
  location: "Brasil",
  github: "https://github.com/paivaxqz/paiva-portfolio",
};

export const nav = [
  { href: "#trabalho", label: "Trabalho" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
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
  { value: 4, suffix: "+", label: "anos" },
  { value: 18, suffix: "", label: "projetos" },
  { value: 12, suffix: "", label: "no ar" },
];

export type Project = {
  year: string;
  title: string;
  kind: string;
  summary: string;
  stack: string[];
  href: string;
  accent: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    title: "Frederick Tattoo",
    kind: "Cliente",
    summary:
      "Site do Frederick, tatuador em Vila Isabel. Old school e blackwork. Agenda no Zap.",
    stack: ["Next.js"],
    href: "https://fredericktatto.vercel.app/",
    liveUrl: "fredericktatto.vercel.app",
    image: "/work/frederick-tatto.jpg",
    accent: "#1c1915",
  },
];
