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

export type Project = {
  id: string;
  title: string;
  summary: string;
  href: string;
  liveUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "frederick",
    title: "Frederick Tattoo",
    summary: "Site do Frederick, tatuador em Vila Isabel. Agenda no Zap.",
    href: "https://fredericktatto.vercel.app/",
    liveUrl: "fredericktatto.vercel.app",
    image: "/work/frederick-tatto.jpg",
  },
  {
    id: "lbsplay",
    title: "LBS Play",
    summary: "Loja de assinatura de streaming. PIX e entrega na hora.",
    href: "https://lbsplay.shop/",
    liveUrl: "lbsplay.shop",
    image: "/work/lbsplay.jpg",
  },
];
