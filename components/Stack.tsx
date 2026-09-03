import { Reveal } from "@/components/motion/Reveal";

const CATEGORIES = [
  {
    label: "Languages",
    items: "JavaScript, TypeScript, Cairo, Solidity",
  },
  {
    label: "Frontend",
    items: "Next.js, React, Vite",
  },
  {
    label: "Blockchain & Web3",
    items:
      "Stellar, Soroban, Starknet, smart-contract development and testing (Foundry), dApp architecture",
  },
  {
    label: "Backend & Tooling",
    items: "Backend and API development, Git and GitHub, open-source collaboration, code review",
  },
  {
    label: "Practices",
    items: "Distributed team collaboration, contract testing, technical documentation",
  },
];

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Stack</h2>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {CATEGORIES.map((category, i) => (
          <Reveal key={category.label} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
              <span className="font-mono text-[13px] uppercase tracking-wide text-ink-faint">
                {category.label}
              </span>
              <span className="text-[15px] text-ink-soft">{category.items}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
