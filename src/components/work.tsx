"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Safari } from "@/components/ui/safari";
import { projects } from "@/lib/content";

export function Work() {
  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Trabalho
        </p>
        <h2 className="mt-2 font-serif text-4xl font-light md:text-5xl">
          No ar
        </h2>
        <div className="mt-12 flex flex-col gap-16">
          {projects.map((project, i) => (
            <BlurFade key={project.id} delay={0.05 * i} inView>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Safari url={project.liveUrl} imageSrc={project.image} />
                <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-3xl">{project.title}</h3>
                    <p className="mt-1 max-w-lg text-sm text-muted">
                      {project.summary}
                    </p>
                  </div>
                  <span className="text-sm underline decoration-line underline-offset-4">
                    Abrir
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
