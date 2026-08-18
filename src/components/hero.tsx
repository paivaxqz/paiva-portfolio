"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { GlareHover } from "@/components/ui/glare-hover";
import { projects, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-line"
    >
      <DotPattern className="[mask-image:radial-gradient(520px_circle_at_18%_22%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-24 lg:py-32">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.22em] text-muted uppercase">
            {site.location}
          </p>
          <h1 className="font-serif text-[clamp(4.2rem,14vw,9.5rem)] leading-[0.82] tracking-[-0.04em]">
            <LineShadowText>{site.name}</LineShadowText>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug text-ink/90 md:text-2xl">
            Frontend.{" "}
            <Highlighter action="underline" color="#c45c26" isView>
              Dois no ar
            </Highlighter>
            :{" "}
            <WordRotate
              words={projects.map((p) => p.title)}
              className="text-rust"
            />
            .
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#trabalho">
              <InteractiveHoverButton type="button">
                Ver os sites
              </InteractiveHoverButton>
            </a>
            <a
              href="#contato"
              className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
            >
              E-mail
            </a>
          </div>
        </div>
        <aside className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="group overflow-hidden rounded-xl border border-line"
            >
              <GlareHover className="block" color="#f3eee4" opacity={0.22}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </GlareHover>
              <p className="flex items-center justify-between px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                <span>{project.title}</span>
                <span>{project.liveUrl}</span>
              </p>
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
}
