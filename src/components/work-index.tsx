"use client";

import { useEffect, useRef, useState } from "react";

import { projects } from "@/lib/content";

export function WorkIndex() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const paneRef = useRef<HTMLDivElement>(null);
  const active = projects.find((p) => p.id === hoverId) ?? null;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onWheel = (event: WheelEvent) => {
      const pane = paneRef.current;
      if (!pane || !hoverId) return;

      const max = pane.scrollHeight - pane.clientHeight;
      if (max <= 1) return;

      const next = pane.scrollTop + event.deltaY;
      if ((next <= 0 && event.deltaY < 0) || (next >= max && event.deltaY > 0)) {
        return;
      }

      event.preventDefault();
      pane.scrollTop = next;
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [hoverId]);

  useEffect(() => {
    paneRef.current?.scrollTo({ top: 0 });
  }, [hoverId]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseLeave={() => setHoverId(null)}
    >
      <div
        className={`absolute top-4 left-5 z-20 hidden w-[min(22rem,36vw)] lg:block ${
          active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_20px_50px_-20px_rgb(28_25_21/0.4)]">
          <div
            ref={paneRef}
            className="max-h-[72vh] overflow-y-auto overscroll-contain [scrollbar-width:thin]"
          >
            {active ? (
              <img
                src={active.image}
                alt=""
                width={720}
                height={2400}
                className="block h-auto w-full"
                decoding="async"
              />
            ) : null}
          </div>
        </div>
      </div>

      <ul>
        {projects.map((project, i) => (
          <li key={project.id}>
            <button
              type="button"
              className="group relative flex w-full items-end justify-between gap-4 border-b border-line px-5 py-7 text-left md:px-8 md:py-9 lg:pl-[min(26rem,40vw)]"
              onMouseEnter={() => setHoverId(project.id)}
              onFocus={() => setHoverId(project.id)}
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                0{i + 1}
              </span>
              <span className="flex-1 font-serif text-4xl leading-none tracking-tight transition-colors duration-200 group-hover:text-rust md:text-6xl">
                {project.title}
              </span>
              <span className="hidden font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:block">
                {project.liveUrl}
              </span>
            </button>
            {hoverId === project.id ? (
              <div className="border-b border-line px-5 py-4 lg:hidden">
                <div className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-xl border border-line [scrollbar-width:thin]">
                  <img
                    src={project.image}
                    alt=""
                    width={720}
                    height={2400}
                    className="block h-auto w-full"
                    decoding="async"
                  />
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
