import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-xs text-muted md:px-8">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span className="font-mono tracking-widest uppercase">Feito à mão</span>
    </footer>
  );
}
