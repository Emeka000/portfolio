"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-30 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
