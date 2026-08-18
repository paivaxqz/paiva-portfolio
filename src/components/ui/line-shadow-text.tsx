"use client";

import { type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type LineShadowTextProps = {
  children: string;
  shadowColor?: string;
  className?: string;
};

export function LineShadowText({
  children,
  shadowColor = "#c45c26",
  className,
}: LineShadowTextProps) {
  return (
    <span
      style={{ "--shadow-color": shadowColor } as CSSProperties}
      data-text={children}
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:top-[0.04em] after:left-[0.04em] after:-z-10 after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:bg-size-[0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
    >
      {children}
    </span>
  );
}
