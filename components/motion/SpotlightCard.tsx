"use client";

import { useRef, type ElementType, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";

export function SpotlightCard({
  children,
  className,
  contentClassName,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--accent) 14%, transparent), transparent 75%)`;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className={`relative ${contentClassName ?? "h-full"}`}>{children}</div>
    </Tag>
  );
}
