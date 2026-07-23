import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const WORD = "CEYLANCE";

// Oversized wordmark whose letters lift and colour-shift based on cursor proximity.
const KineticWordmark = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const smx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
  };
  const onLeave = () => mx.set(-9999);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative select-none cursor-default"
    >
      <div className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[22vw] flex justify-between whitespace-nowrap">
        {WORD.split("").map((ch, i) => (
          <KineticLetter key={i} ch={ch} index={i} total={WORD.length} smx={smx} />
        ))}
      </div>
    </div>
  );
};

const KineticLetter = ({
  ch,
  index,
  total,
  smx,
}: {
  ch: string;
  index: number;
  total: number;
  smx: import("framer-motion").MotionValue<number>;
}) => {
  // Approximate each letter's centre X as a fraction across the wordmark.
  const frac = (index + 0.5) / total;
  // Distance from cursor (in px) — mapped from wordmark width (~vw).
  const y = useTransform(smx, (x) => {
    if (x < 0) return 0;
    // Guess word width from viewport if letter has no ref (fine for feel).
    const w = typeof window !== "undefined" ? window.innerWidth * 0.94 : 1200;
    const center = frac * w;
    const d = Math.abs(x - center);
    const influence = Math.max(0, 1 - d / (w * 0.18));
    return -influence * 40;
  });
  const color = useTransform(smx, (x) => {
    if (x < 0) return "hsl(var(--foreground))";
    const w = typeof window !== "undefined" ? window.innerWidth * 0.94 : 1200;
    const center = frac * w;
    const d = Math.abs(x - center);
    const influence = Math.max(0, 1 - d / (w * 0.14));
    return influence > 0.15 ? "hsl(var(--primary))" : "hsl(var(--foreground))";
  });
  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{ y, color }}
    >
      {ch}
    </motion.span>
  );
};

const Footer = () => (
  <footer className="relative border-t border-border bg-background overflow-hidden">
    <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-6">
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        <div className="md:col-span-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
            [ Ceylance® / AU · UK · UAE ]
          </p>
          <h3 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-[-0.045em] font-medium max-w-3xl">
            Building intelligent products <span className="text-foreground/40">from the inside out.</span>
          </h3>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          {["Services", "Process", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={l === "About" ? "/about" : `/#${l.toLowerCase()}`}
              className="hover:text-primary transition-colors text-foreground/80"
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Kinetic wordmark */}
      <KineticWordmark />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 mt-6 border-t border-border">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50">
          Adelaide, AU · Est. 2024
        </p>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
