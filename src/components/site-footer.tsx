import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:justify-between md:px-8 md:py-8">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span>{site.role}</span>
    </footer>
  );
}
