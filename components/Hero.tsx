import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { CodePanel } from "@/components/CodePanel";
import { HeroEntrance } from "@/components/motion/HeroEntrance";
import { NetworkGraphic } from "@/components/motion/NetworkGraphic";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <NetworkGraphic />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-14 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <HeroEntrance>
              <h1 className="text-5xl font-medium tracking-tight text-balance md:text-6xl">
                Emeka Okoli
              </h1>
            </HeroEntrance>

            <HeroEntrance delay={0.08}>
              <p className="mt-5 max-w-[46ch] text-lg text-ink-soft">
                Software engineer in Kaduna, Nigeria, building full-stack and
                on-chain products across the Stellar and Starknet ecosystems.
              </p>
            </HeroEntrance>

            <HeroEntrance delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:okoliemeka19@gmail.com"
                  className="rounded-[6px] bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-px"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/Emeka000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[6px] border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  View GitHub
                  <ArrowUpRight size={15} weight="bold" />
                </a>
              </div>
            </HeroEntrance>
          </div>

          <HeroEntrance delay={0.12}>
            <CodePanel />
          </HeroEntrance>
        </div>
      </div>
    </section>
  );
}
