"use client";

import { motion, useReducedMotion } from "motion/react";

type Node = { x: number; y: number; r: number };

const NODES: Node[] = [
  { x: 90, y: 120, r: 5 },
  { x: 60, y: 260, r: 4 },
  { x: 170, y: 340, r: 6 },
  { x: 230, y: 150, r: 4 },
  { x: 400, y: 240, r: 7 },
  { x: 560, y: 130, r: 4 },
  { x: 640, y: 260, r: 6 },
  { x: 590, y: 380, r: 4 },
  { x: 730, y: 200, r: 5 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 7],
  [5, 6],
  [6, 7],
  [6, 8],
];

const PULSES: [number, number][] = [
  [3, 4],
  [4, 6],
  [1, 2],
];

export function NetworkGraphic() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 800 500"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full text-accent opacity-[0.22] dark:opacity-[0.3]"
      style={{
        maskImage: "radial-gradient(60% 60% at 70% 35%, black, transparent)",
        WebkitMaskImage: "radial-gradient(60% 60% at 70% 35%, black, transparent)",
      }}
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="currentColor"
          strokeWidth={1}
        />
      ))}

      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="currentColor"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.15, 1] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.28,
                }
          }
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      {!reduce &&
        PULSES.map(([a, b], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={2.5}
            fill="currentColor"
            animate={{
              cx: [NODES[a].x, NODES[b].x],
              cy: [NODES[a].y, NODES[b].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.9 + 0.6,
              repeatDelay: 1.4,
            }}
          />
        ))}
    </svg>
  );
}
