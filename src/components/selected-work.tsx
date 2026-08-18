"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { LiveSafari } from "@/components/ui/live-safari";
import { projects } from "@/lib/content";

export function SelectedWork() {
  const project = projects[0];
  if (!project?.href || !project.liveUrl || !project.image) return null;

  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
            001
          </p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Trabalho</h2>
        </div>
        <article className="relative overflow-hidden rounded-2xl border border-line bg-paper">
          <BorderBeam duration={9} size={90} borderWidth={1.5} />
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
                {project.kind} · {project.year}
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
      </div>
    </section>
  );
}
