import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";

const LINKS = [
  { label: "Email", value: "okoliemeka19@gmail.com", href: "mailto:okoliemeka19@gmail.com" },
  { label: "Phone", value: "+234 703 706 3975", href: "tel:+2347037063975" },
  { label: "GitHub", value: "github.com/Emeka000", href: "https://github.com/Emeka000" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emeka-okoli-5a8452185",
    href: "https://linkedin.com/in/emeka-okoli-5a8452185",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Contact
            </h2>
            <p className="mt-4 max-w-[42ch] text-ink-soft">
              Open to blockchain and full-stack engineering work across
              Stellar, Starknet, and beyond. Based in Kaduna, Nigeria.
            </p>
            <a
              href="mailto:okoliemeka19@gmail.com"
              className="mt-7 inline-flex items-center gap-1.5 rounded-[6px] bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-px"
            >
              Email me
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="flex flex-col gap-4">
              {LINKS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-4"
                >
                  <dt className="font-mono text-[12px] uppercase tracking-wide text-ink-faint">
                    {item.label}
                  </dt>
                  <dd>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-[14.5px] text-ink transition-colors hover:text-accent"
                    >
                      {item.value}
                      {item.href.startsWith("http") && (
                        <ArrowUpRight size={13} weight="bold" />
                      )}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6">
        <p className="mx-auto max-w-6xl font-mono text-[12px] text-ink-faint">
          Emeka Kingsley Okoli, {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
