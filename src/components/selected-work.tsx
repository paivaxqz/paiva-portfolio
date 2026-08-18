"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { GlareHover } from "@/components/ui/glare-hover";
import { projects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
              001
            </p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              Trabalho selecionado
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted md:block">
            Três peças. O resto fica no GitHub, ou a gente conversa.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={0.08 * index} inView>
              <GlareHover
                className="w-full rounded-2xl"
                color="#f3eee4"
                opacity={0.35}
                duration={700}
              >
                <article className="relative overflow-hidden rounded-2xl border border-line bg-paper">
                  {index === 0 ? (
                    <BorderBeam duration={9} size={90} borderWidth={1.5} />
                  ) : null}
                  <div className="grid md:grid-cols-[220px_1fr]">
                    <div
                      className="panel-stripe relative min-h-44 md:min-h-full"
                      style={{ background: project.accent }}
                    >
                      <span className="absolute top-4 left-4 font-serif text-5xl text-paper/90">
                        0{index + 1}
                      </span>
                      <span className="absolute right-4 bottom-4 font-mono text-xs tracking-widest text-paper/80 uppercase">
                        {project.year}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                        {project.kind}
                      </p>
                      <h3 className="mt-2 font-serif text-3xl">{project.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                        {project.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <ul className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={project.href}
                          className="text-sm text-ink underline decoration-line underline-offset-4"
                        >
                          Pedir detalhes
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </GlareHover>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
