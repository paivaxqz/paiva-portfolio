"use client";

import { useEffect, useRef, useState } from "react";

import { projects } from "@/lib/content";

export function WorkIndex() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);
  const active = projects.find((p) => p.id === hoverId);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let raf = 0;
    const tick = () => {
      x += (target.current.x - x) * 0.14;
      y += (target.current.y - y) * 0.14;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative border-b border-line">
      <div
        ref={imgRef}
        className={`pointer-events-none fixed top-0 left-0 z-30 hidden w-56 overflow-hidden rounded-lg border border-line bg-paper shadow-2xl md:block ${
          hoverId ? "opacity-100" : "opacity-0"
        }`}
        style={{ marginLeft: 28, marginTop: -90 }}
        aria-hidden
      >
        {active ? (
          <img src={active.image} alt="" className="h-36 w-full object-cover" />
        ) : null}
      </div>
      {projects.map((project, i) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="group flex items-end justify-between gap-4 border-b border-line px-5 py-7 last:border-b-0 md:px-8 md:py-9"
          onMouseEnter={() => setHoverId(project.id)}
          onMouseLeave={() => setHoverId(null)}
          onMouseMove={(e) => {
            target.current = { x: e.clientX, y: e.clientY };
          }}
        >
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
            0{i + 1}
          </span>
          <span className="flex-1 font-serif text-4xl leading-none tracking-tight transition-colors group-hover:text-rust md:text-6xl">
            {project.title}
          </span>
          <span className="hidden font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:block">
            {project.liveUrl}
          </span>
        </a>
      ))}
    </div>
  );
}
