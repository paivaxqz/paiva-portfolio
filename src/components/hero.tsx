"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { projects, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="topo" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
        <BlurFade inView>
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            {site.location}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(4.5rem,14vw,9rem)] leading-[0.85] font-light tracking-[-0.04em] transition-[font-weight] duration-300 hover:font-semibold">
            {site.name}
          </h1>
          <p className="mt-8 max-w-md text-xl leading-snug md:text-2xl">
            Faço frontend. Embaixo tem dois sites que estão no ar.
          </p>
        </BlurFade>
        <BlurFade delay={0.08} inView>
          <div className="relative mx-auto h-[280px] w-full max-w-md md:h-[340px]">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute top-2 left-0 w-[72%] rotate-[-6deg] rounded-lg border border-line object-cover object-top shadow-lg aspect-[16/10]"
            />
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="absolute right-0 bottom-0 w-[68%] rotate-[7deg] rounded-lg border border-line object-cover object-top shadow-lg aspect-[16/10]"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
