"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from "motion/react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: { hidden: { y: number }; visible: { y: number } };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.35,
  delay = 0,
  offset = 8,
  direction = "down",
  inView = false,
  inViewMargin = "-40px",
  blur = "4px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const hiddenOffset =
    direction === "right" || direction === "down" ? -offset : offset;

  const defaultVariants: Variants = {
    hidden: {
      [axis]: hiddenOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant ?? defaultVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      onAnimationComplete={() => {
        if (ref.current) ref.current.style.filter = "none";
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
