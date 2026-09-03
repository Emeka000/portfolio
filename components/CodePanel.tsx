const KEY = "text-ink-soft";
const STR = "text-accent-strong";
const PUNCT = "text-ink-faint";
const KW = "text-accent";

export function CodePanel() {
  return (
    <div className="w-full overflow-hidden rounded-[10px] border border-line bg-paper-raised">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="font-mono text-[12px] text-ink-faint">profile.ts</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-[1.85]">
        <code>
          <span className={KW}>const</span> engineer = {"{"}
          {"\n"}  name: <span className={STR}>&quot;Emeka Kingsley Okoli&quot;</span>,
          {"\n"}  role: <span className={STR}>&quot;Software Engineer&quot;</span>,
          {"\n"}  based: <span className={STR}>&quot;Kaduna, Nigeria&quot;</span>,
          {"\n"}  chains: [<span className={STR}>&quot;Stellar&quot;</span>, <span className={STR}>&quot;Starknet&quot;</span>],
          {"\n"}  stack: [<span className={STR}>&quot;TypeScript&quot;</span>, <span className={STR}>&quot;Cairo&quot;</span>, <span className={STR}>&quot;Solidity&quot;</span>],
          {"\n"}  shipping: <span className={KW}>true</span>,
          {"\n"}
          <span className={PUNCT}>{"}"}</span>
          <span className={KEY}> as const</span>
        </code>
      </pre>
    </div>
  );
}
