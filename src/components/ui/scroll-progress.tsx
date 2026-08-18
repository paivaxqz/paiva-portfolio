"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const [useCss, setUseCss] = useState(true);

  useEffect(() => {
    setUseCss(CSS.supports("animation-timeline", "scroll()"));
  }, []);

  if (useCss) {
    return <div className={cn("scroll-progress", className)} aria-hidden />;
  }

  return (
    <motion.div
      aria-hidden
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[2px] origin-left transform-gpu bg-linear-to-r from-rust via-[#e0a060] to-[#2f5d50]",
        className,
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
