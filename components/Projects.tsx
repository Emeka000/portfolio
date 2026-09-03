import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const PROJECTS = [
  {
    title: "HealthChain",
    role: "Maintainer and Project Owner",
    period: "2025, Present",
    points: [
      "Founder and lead maintainer of HealthChain, an open-source platform for secure, decentralized storage and sharing of medical records on the Stellar network.",
      "Own end-to-end technical direction: architecting application and smart-contract logic, scoping issues, reviewing community pull requests, and guiding contributors.",
      "Coordinate an open-source contributor workflow through GitHub, maintaining code quality and driving the project roadmap.",
    ],
    tags: ["Stellar", "Soroban", "Open Source"],
  },
  {
    title: "LifeFlow, Blood-Donor Platform",
    role: "Software Engineer via GrantFox",
    period: "2025, Present",
    points: [
      "Contribute to LifeFlow, a decentralized platform on Stellar that connects blood donors with recipients and coordinates donations transparently.",
      "Ship reviewed, production-grade features in collaboration with a distributed team through GrantFox, the Stellar ecosystem's open-source contribution and bounty platform.",
    ],
    tags: ["Stellar", "GrantFox", "Full-Stack"],
  },
];

export function Projects() {
  return (
    <section id="work" className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Featured projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <SpotlightCard
                as="article"
                className="h-full rounded-[10px] border border-line bg-paper transition-colors hover:border-accent"
                contentClassName="flex h-full flex-col gap-5 p-7"
              >
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-wide text-ink-faint">
                    {project.role}, {project.period}
                  </p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-balance">
                    {project.title}
                  </h3>
                </div>

                <ul className="flex list-disc flex-col gap-3 pl-4 text-[14.5px] leading-relaxed text-ink-soft marker:text-accent">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[4px] border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
