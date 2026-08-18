"use client";

import { useRef } from "react";
import { motion, useInView, type MotionStyle } from "motion/react";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#c45c26",
  colorTo = "#e0a060",
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "80px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] border-transparent [border-width:var(--border-beam-width)] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ "--border-beam-width": `${borderWidth}px` } as React.CSSProperties}
    >
      {inView ? (
        <motion.div
          className={cn(
            "absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
            className,
          )}
          style={
            {
              width: size,
              offsetPath: `rect(0 auto auto 0 round ${size}px)`,
              "--color-from": colorFrom,
              "--color-to": colorTo,
            } as MotionStyle
          }
          initial={{ offsetDistance: `${initialOffset}%` }}
          animate={{
            offsetDistance: reverse
              ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
              : [`${initialOffset}%`, `${100 + initialOffset}%`],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration,
            delay: -delay,
          }}
        />
      ) : null}
    </div>
  );
};
