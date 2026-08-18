import { Marquee } from "@/components/ui/marquee";
import { stack } from "@/lib/content";

export function StackStrip() {
  return (
    <div className="relative border-b border-line">
      <Marquee pauseOnHover className="[--duration:28s] [--gap:2.5rem] py-4">
        {stack.map((item) => (
          <span
            key={item}
            className="font-mono text-xs tracking-[0.18em] text-muted uppercase"
          >
            {item}
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-paper" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-paper" />
    </div>
  );
}
