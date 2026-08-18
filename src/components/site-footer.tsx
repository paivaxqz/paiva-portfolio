import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl justify-between px-5 py-8 text-xs text-muted md:px-8">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span>{site.role}</span>
    </footer>
  );
}
