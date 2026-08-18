"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="topo" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <p className="mb-6 font-mono text-xs tracking-[0.22em] text-muted uppercase">
          {site.location}
        </p>
        <h1 className="font-serif text-[clamp(4.2rem,14vw,9.5rem)] leading-[0.82] tracking-[-0.04em]">
          <LineShadowText>{site.name}</LineShadowText>
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-snug text-ink/90 md:text-2xl">
          Frontend.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#trabalho">
            <InteractiveHoverButton type="button">
              Trabalho
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
    </section>
  );
}
