"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { clients } from "@/lib/content";

export function HoverClients() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const active = clients.find((c) => c.id === hoveredId);

  return (
    <div className="border-b border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center md:px-8">
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            No ar
          </p>
          <div className="relative mt-1">
            <p
              aria-hidden
              className="pointer-events-none font-serif text-2xl leading-none opacity-0 select-none md:text-3xl"
            >
              dois sites
            </p>
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={hoveredId ?? "default"}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-serif text-2xl leading-none md:text-3xl"
                >
                  {active?.name ?? "dois sites"}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {clients.map((client) => {
            const isActive = hoveredId === client.id;
            const isDimmed = hoveredId !== null && !isActive;
            return (
              <a
                key={client.id}
                href={`#${client.id}`}
                aria-label={client.name}
                className={[
                  "flex size-12 items-center justify-center rounded-lg border font-serif text-lg transition-all duration-200",
                  isActive
                    ? "border-ink/30 bg-ink/5 text-ink"
                    : "border-transparent text-ink/35 hover:text-ink/60",
                  isDimmed ? "opacity-40" : "",
                ].join(" ")}
                onMouseEnter={() => setHoveredId(client.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {client.mark}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
