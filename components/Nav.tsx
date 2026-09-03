"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { useActiveSection } from "@/hooks/useActiveSection";

const LINKS = [
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "contributions", label: "Contributions" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(LINKS.map((link) => link.id));

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-accent text-[10px] font-semibold text-on-accent">
            EO
          </span>
          Emeka Okoli
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-mono text-[13px] tracking-tight transition-colors ${
                activeId === link.id
                  ? "text-accent"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:okoliemeka19@gmail.com"
            className="rounded-[6px] bg-accent px-3.5 py-1.5 font-mono text-[13px] text-on-accent transition-transform hover:-translate-y-px"
          >
            Email me
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-[6px] text-ink md:hidden"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-paper md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-line px-6 py-3.5 font-mono text-sm ${
                activeId === link.id ? "text-accent" : "text-ink-soft"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:okoliemeka19@gmail.com"
            onClick={() => setOpen(false)}
            className="px-6 py-3.5 font-mono text-sm text-accent"
          >
            Email me
          </a>
        </nav>
      )}
    </header>
  );
}
