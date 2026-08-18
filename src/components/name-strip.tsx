import { Marquee } from "@/components/ui/marquee";
import { projects } from "@/lib/content";

export function NameStrip() {
  return (
    <div className="relative border-b border-line">
      <Marquee pauseOnHover className="[--duration:22s] [--gap:3rem] py-3">
        {projects.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-mono text-xs tracking-[0.2em] text-muted uppercase hover:text-ink"
          >
            {item.title}
          </a>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-paper" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-paper" />
    </div>
  );
}
