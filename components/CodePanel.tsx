"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const KEY = "text-ink-soft";
const STR = "text-accent-strong";
const PUNCT = "text-ink-faint";
const KW = "text-accent";

function Str({ children }: { children: ReactNode }) {
  return <span className={STR}>&quot;{children}&quot;</span>;
}

const LINES: ReactNode[] = [
  <>
    <span className={KW}>const</span> engineer = <span className={PUNCT}>{"{"}</span>
  </>,
  <>
    &nbsp;&nbsp;name: <Str>Emeka Kingsley Okoli</Str>,
  </>,
  <>
    &nbsp;&nbsp;role: <Str>Software Engineer</Str>,
  </>,
  <>
    &nbsp;&nbsp;chains: [<Str>Stellar</Str>, <Str>Starknet</Str>],
  </>,
  <>
    &nbsp;&nbsp;stack: [<Str>TypeScript</Str>, <Str>Cairo</Str>, <Str>Solidity</Str>,{" "}
    <Str>Rust</Str>, <Str>Next.js</Str>, <Str>Nest.js</Str>],
  </>,
  <>
    &nbsp;&nbsp;shipping: <span className={KW}>true</span>,
  </>,
  <>
    <span className={PUNCT}>{"}"}</span>
    <span className={KEY}> as const</span>
  </>,
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export function CodePanel() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full overflow-hidden rounded-[10px] border border-line bg-paper-raised">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="font-mono text-[12px] text-ink-faint">profile.ts</span>
      </div>
      <motion.pre
        className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-[1.85]"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <code>
          {LINES.map((content, i) => (
            <motion.div key={i} variants={reduce ? undefined : line}>
              {content}
            </motion.div>
          ))}
          <motion.span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent align-middle"
            animate={reduce ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
            transition={reduce ? undefined : { duration: 1, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
          />
        </code>
      </motion.pre>
    </div>
  );
}
