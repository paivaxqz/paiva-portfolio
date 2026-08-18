"use client";

import { useState } from "react";

import { projects } from "@/lib/content";

export function WorkIndex() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === hoverId) ?? null;

  return (
    <div
      className="relative min-h-[22rem] lg:min-h-[28rem]"
      onMouseLeave={() => setHoverId(null)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] items-center justify-center px-8 lg:flex">
        <div
          className={`w-full max-w-[34rem] overflow-hidden rounded-2xl border border-line bg-[#ece7dc] shadow-[0_24px_60px_-28px_rgb(28_25_21/0.45)] transition-opacity duration-150 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2 rounded-full bg-[#d0c9bb]" />
              <span className="size-2 rounded-full bg-[#d0c9bb]" />
              <span className="size-2 rounded-full bg-[#d0c9bb]" />
            </div>
            <p className="min-w-0 flex-1 truncate rounded-md bg-white/70 px-2 py-1 font-mono text-[10px] text-muted">
              {active?.liveUrl ?? ""}
            </p>
          </div>
          <div className="relative aspect-[16/10] bg-[#111]">
            {projects.map((project) => (
              <img
                key={project.id}
                src={project.image}
                alt=""
                width={1024}
                height={640}
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover object-top ${
                  hoverId === project.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ul>
        {projects.map((project, i) => {
          const on = hoverId === project.id;
          return (
            <li key={project.id} className="border-b border-line">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex w-full items-center justify-end gap-5 px-5 py-8 text-right md:px-10 md:py-10"
                onMouseEnter={() => setHoverId(project.id)}
                onFocus={() => setHoverId(project.id)}
              >
                <span className="absolute inset-x-0 top-0 h-0 bg-ink/5 transition-[height] duration-300 ease-out group-hover:h-full" />
                <span className="relative font-mono text-[11px] tracking-[0.18em] text-muted">
                  0{i + 1}
                </span>
                <span
                  className={`relative font-serif text-4xl leading-none tracking-tight md:text-6xl ${
                    on ? "text-rust" : ""
                  }`}
                >
                  {project.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
