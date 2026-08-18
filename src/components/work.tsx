"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Safari } from "@/components/ui/safari";
import { projects } from "@/lib/content";

export function Work() {
  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-24">
        <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase md:text-xs md:tracking-[0.2em]">
          Trabalho
        </p>
        <h2 className="mt-2 font-serif text-3xl font-light md:text-4xl lg:text-5xl">
          No ar
        </h2>
        <div className="mt-8 flex flex-col gap-12 md:mt-12 md:gap-16">
          {projects.map((project, i) => (
            <BlurFade key={project.id} delay={0.05 * i} inView>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                  <Safari url={project.liveUrl} imageSrc={project.image} />
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl transition-colors duration-200 group-hover:text-muted md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                      {project.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm underline decoration-line underline-offset-4 transition-all duration-200 group-hover:gap-2 group-hover:text-ink">
                    Abrir
                    <svg 
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
