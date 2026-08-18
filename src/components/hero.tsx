"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { rotatingRoles, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24 lg:py-32">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.22em] text-muted uppercase">
            <AnimatedShinyText className="mx-0 max-w-none text-muted">
              {site.location} · disponível para projetos
            </AnimatedShinyText>
          </p>
          <h1 className="font-serif text-[clamp(4.2rem,14vw,9.5rem)] leading-[0.82] tracking-[-0.04em]">
            {site.name}
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug text-ink/90 md:text-2xl">
            Faço{" "}
            <span className="font-serif italic">
              <WordRotate words={rotatingRoles} className="text-rust" />
            </span>{" "}
            que sobrevivem ao uso diário. Sem landing de template, sem
            microinteração inútil.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#trabalho">
              <InteractiveHoverButton type="button">
                Ver trabalho
              </InteractiveHoverButton>
            </a>
            <a
              href="#contato"
              className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
            >
              Mandar um briefing
            </a>
          </div>
        </div>
        <aside className="flex flex-col justify-end gap-8 border-t border-line pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <p className="font-serif text-3xl leading-tight italic md:text-4xl">
            Frontend com opinião.
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Tipografia, ritmo, estado vazio, formulário que não mente. O resto
            é enfeite — e enfeite eu corto.
          </p>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            {site.role} · desde 2022
          </p>
        </aside>
      </div>
    </section>
  );
}
