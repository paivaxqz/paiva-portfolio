"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
            002
          </p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Sobre</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed md:text-xl">
            Paiva. Layout, formulário, mobile. Frederick Tattoo e LBS Play
            estão no ar.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-line pt-8">
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-3xl md:text-4xl">
                  <NumberTicker value={item.value} />
                  {item.suffix}
                </dt>
                <dd className="mt-2 text-xs leading-snug text-muted">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
