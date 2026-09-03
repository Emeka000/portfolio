import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const FEATURED = [
  {
    repo: "Starknet ID",
    role: "Frontend, Next.js",
    description:
      "Built and refined UI features for Starknet's on-chain identity and naming protocol.",
    span: false,
  },
  {
    repo: "Go-StarkMe",
    role: "Backend, Cairo",
    description: "Implemented smart-contract logic for a Starknet dApp.",
    span: false,
  },
  {
    repo: "LyricFlip",
    role: "Backend",
    description: "Developed backend features and contributed to core functionality.",
    span: true,
  },
];

const ADDITIONAL = [
  "Compliance-Adapters",
  "Stellar-Swipes",
  "Ahjoor",
  "VeriToken",
  "Vartix-Protocol",
];

export function Contributions() {
  return (
    <section id="contributions" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Open-source contributions
        </h2>
        <p className="mt-4 max-w-[60ch] text-ink-soft">
          Active contributor across the Stellar and Starknet ecosystems via
          GrantFox and OnlyDust, shipping reviewed code to multiple
          production projects.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {FEATURED.map((item, i) => (
          <Reveal
            key={item.repo}
            delay={i * 0.06}
            className={item.span ? "md:col-span-2" : undefined}
          >
            <SpotlightCard
              as="article"
              className="h-full rounded-[10px] border border-line transition-colors hover:border-accent"
              contentClassName="flex h-full flex-col gap-3 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium tracking-tight">{item.repo}</h3>
                <span className="rounded-[4px] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent-strong">
                  {item.role}
                </span>
              </div>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 rounded-[10px] border border-dashed border-line p-6">
          <p className="text-[14.5px] text-ink-soft">
            Also shipped reviewed code to these projects across the Stellar
            and Starknet ecosystems:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ADDITIONAL.map((name) => (
              <span
                key={name}
                className="rounded-[4px] border border-line px-3 py-1.5 font-mono text-[13px] text-ink-soft"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
