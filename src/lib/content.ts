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

export const stats = [
  { value: 2, suffix: "", label: "no ar" },
  { value: 4, suffix: "+", label: "anos" },
];

export type Project = {
  id: string;
  year: string;
  title: string;
  kind: string;
  summary: string;
  href: string;
  liveUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "frederick",
    year: "2026",
    title: "Frederick Tattoo",
    kind: "Cliente",
    summary:
      "Site do Frederick, tatuador em Vila Isabel. Old school e blackwork. Agenda no Zap.",
    href: "https://fredericktatto.vercel.app/",
    liveUrl: "fredericktatto.vercel.app",
    image: "/work/frederick-full.jpg",
  },
  {
    id: "lbsplay",
    year: "2026",
    title: "LBS Play",
    kind: "Cliente",
    summary:
      "Loja de assinatura de streaming. PIX, entrega na hora. Netflix, Disney+, combos.",
    href: "https://lbsplay.shop/",
    liveUrl: "lbsplay.shop",
    image: "/work/lbsplay-full.jpg",
  },
];
