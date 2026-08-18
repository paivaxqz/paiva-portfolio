import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#topo" className="font-serif text-2xl tracking-tight">
          P.
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden text-ink sm:inline"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
