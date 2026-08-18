"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { LiveSafari } from "@/components/ui/live-safari";
import { ShineBorder } from "@/components/ui/shine-border";
import { WorkIndex } from "@/components/work-index";
import { projects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
            001
          </p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Trabalho</h2>
        </div>
      </div>
      <WorkIndex />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 md:px-8 md:py-24">
        {projects.map((project, i) => (
          <BlurFade key={project.id} delay={0.06 * i} inView>
            <article
              id={project.id}
              className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-paper"
            >
              <ShineBorder
                duration={10}
                borderWidth={1.5}
                shineColor={["#c45c26", "#1c1915", "#e8c48a"]}
              />
              {i === 0 ? (
                <BorderBeam duration={9} size={90} borderWidth={1.5} />
              ) : null}
              <div className="p-3 md:p-5">
                <LiveSafari
                  href={project.href}
                  url={project.liveUrl}
                  poster={project.image}
                />
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line px-6 py-6 md:px-8">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                    {project.kind} · {project.year} · 0{i + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink underline decoration-line underline-offset-4"
                >
                  Abrir em outra aba
                </a>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
