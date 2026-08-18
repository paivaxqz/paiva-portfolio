"use client";

import { useState } from "react";

import { projects } from "@/lib/content";

export function WorkIndex() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === hoverId) ?? null;

  return (
    <div
      className="relative flex flex-col lg:grid lg:grid-cols-2 lg:items-start"
      onMouseLeave={() => setHoverId(null)}
    >
      <div
        className={`order-2 px-5 py-4 lg:sticky lg:top-24 lg:order-1 lg:px-8 ${
          active ? "block" : "hidden lg:block lg:opacity-0"
        }`}
      >
        {active ? (
          <div className="overflow-hidden rounded-2xl border border-line bg-[#e4dfd3] shadow-xl">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-2 rounded-full bg-[#d0c9bb]" />
                <span className="size-2 rounded-full bg-[#d0c9bb]" />
                <span className="size-2 rounded-full bg-[#d0c9bb]" />
              </div>
              <p className="min-w-0 flex-1 truncate rounded-md bg-white/70 px-2 py-1 font-mono text-[10px] text-muted">
                {active.liveUrl}
              </p>
              <a
                href={active.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-mono text-[10px] text-ink underline"
              >
                Abrir
              </a>
            </div>
            <div className="relative h-[min(62vh,540px)] bg-[#111]">
              <img
                src={active.image}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-30"
              />
              <iframe
                key={active.id}
                title={active.title}
                src={active.href}
                className="relative z-[1] h-full w-full border-0 bg-[#111]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ) : null}
      </div>

      <ul className="order-1 lg:order-2">
        {projects.map((project, i) => {
          const on = hoverId === project.id;
          return (
            <li key={project.id}>
              <button
                type="button"
                className="group relative flex w-full items-center justify-end gap-4 border-b border-line px-5 py-7 text-left md:px-8 md:py-8"
                onMouseEnter={() => setHoverId(project.id)}
                onFocus={() => setHoverId(project.id)}
                onClick={() => setHoverId(project.id)}
              >
                <span className="absolute inset-x-0 top-0 h-0 bg-ink/6 transition-[height] duration-300 ease-out group-hover:h-full" />
                <span className="relative font-mono text-[11px] tracking-[0.18em] text-muted">
                  0{i + 1}
                </span>
                <span
                  className={`relative flex-1 text-right font-serif text-4xl leading-none tracking-tight md:text-6xl ${
                    on ? "text-rust" : ""
                  }`}
                >
                  {project.title}
                </span>
                <span className="relative hidden max-w-[40%] truncate font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:block">
                  {project.liveUrl}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
