"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { projects, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="topo" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8 md:py-24">
        <BlurFade inView>
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase md:text-xs md:tracking-[0.2em]">
            {site.location}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(3.5rem,13vw,9rem)] leading-[0.9] font-light tracking-[-0.04em] transition-[font-weight] duration-300 hover:font-semibold md:mt-4 md:leading-[0.85]">
            {site.name}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed md:mt-8 md:text-xl md:leading-snug lg:text-2xl">
            Faço frontend. Embaixo tem dois sites que estão no ar.
          </p>
        </BlurFade>
        <BlurFade delay={0.08} inView>
          <div className="relative mx-auto h-[240px] w-full max-w-md sm:h-[280px] md:h-[340px]">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute top-2 left-0 w-[70%] rotate-[-6deg] rounded-lg border border-line object-cover object-top shadow-xl transition-transform duration-300 hover:rotate-[-3deg] hover:scale-105 aspect-[16/10] sm:w-[72%]"
            />
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="absolute right-0 bottom-0 w-[66%] rotate-[7deg] rounded-lg border border-line object-cover object-top shadow-xl transition-transform duration-300 hover:rotate-[4deg] hover:scale-105 aspect-[16/10] sm:w-[68%]"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
