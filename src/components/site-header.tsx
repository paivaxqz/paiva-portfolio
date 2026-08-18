import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-baseline justify-between px-5 py-6 md:px-8">
      <a href="#topo" className="font-serif text-2xl italic">
        {site.name}
      </a>
      <nav className="flex items-center gap-5 text-sm text-muted">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
