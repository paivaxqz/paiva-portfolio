"use client";

import { useState } from "react";

import { projects } from "@/lib/content";

export function WorkIndex() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:pb-28">
      <ul>
        {projects.map((project, i) => {
          const on = activeId === project.id;
          return (
            <li key={project.id} className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-baseline justify-between gap-4 py-6 text-left md:py-8"
                onMouseEnter={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                  0{i + 1}
                </span>
                <span
                  className={`flex-1 font-serif text-3xl leading-none tracking-tight md:text-5xl ${
                    on ? "text-ink" : "text-muted"
                  }`}
                >
                  {project.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <a
        href={active.href}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-2xl border border-line bg-paper"
      >
        <div className="relative aspect-[16/10] bg-[#111]">
          {projects.map((project) => (
            <img
              key={project.id}
              src={project.image}
              alt={project.title}
              width={1024}
              height={640}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200 ${
                activeId === project.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <p className="flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          <span>{active.liveUrl}</span>
          <span className="text-ink group-hover:text-rust">Abrir</span>
        </p>
      </a>
    </div>
  );
}
