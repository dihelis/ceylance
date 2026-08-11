import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Smartphone, Globe, Bot, LineChart, Workflow, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// Outcome tiles — plain English, arranged as a flat heatmap grid.
// `heat` (0–1) drives colour intensity so the wall reads like a heatmap.
// Bento heatmap — mixed squares/rectangles laid out on a 6-col × 4-row grid.
// `span` is [colSpan, rowSpan] on desktop; mobile collapses to a simpler 2-col.
type Tile = { label: string; heat: number; span: [number, number]; mobileSpan?: [number, number] };

// Mosaic on an 8-col grid with square cells — spans read as clear multiples
// (4×2, 3×3, 3×1, 2×2, etc.) so the wall feels architectural.
const tiles: Tile[] = [
  { label: "Turn your idea into an app", heat: 1.00, span: [4, 2], mobileSpan: [2, 2] }, // 4×2 hero
  { label: "Make AI actually useful",    heat: 0.90, span: [3, 3], mobileSpan: [2, 2] }, // 3×3 square
  { label: "No jargon, ever",            heat: 0.85, span: [1, 1] },
  { label: "Fixed scope, fixed price",   heat: 0.25, span: [1, 2] },                     // 1×2 tall
  { label: "A team that owns delivery",  heat: 0.55, span: [3, 1] },                     // 3×1 bar
  { label: "Launch in weeks, not years", heat: 0.35, span: [4, 1] },                     // 4×1 wide
  { label: "Apps people love using",     heat: 0.70, span: [2, 2], mobileSpan: [2, 1] }, // 2×2 square
  { label: "Automate the busywork",      heat: 0.60, span: [3, 2] },                     // 3×2
  { label: "Websites that convert",      heat: 0.40, span: [2, 1] },                     // 2×1
  { label: "Plain-English updates",      heat: 0.15, span: [1, 1] },
  { label: "Built to scale with you",    heat: 0.50, span: [2, 1] },
  { label: "One partner, end to end",    heat: 0.80, span: [3, 1] },                     // 3×1
];

// Static class strings so Tailwind's JIT can detect them.
const spanClass = (c: number, r: number) => {
  const cols = ["", "md:col-span-1", "md:col-span-2", "md:col-span-3", "md:col-span-4", "md:col-span-5", "md:col-span-6", "md:col-span-7", "md:col-span-8"];
  const rows = ["", "md:row-span-1", "md:row-span-2", "md:row-span-3", "md:row-span-4"];
  return `${cols[c]} ${rows[r]}`;
};
const mobileSpanClass = (c: number, r: number) => {
  const cols = ["", "col-span-1", "col-span-2"];
  const rows = ["", "row-span-1", "row-span-2"];
  return `${cols[c]} ${rows[r]}`;
};

// Map heat 0..1 to a flat teal fill + text colour with no gradients.
const heatStyle = (heat: number): { background: string; color: string; borderColor: string } => {
  const bg = `hsl(180 ${Math.round(40 + heat * 50)}% ${Math.round(96 - heat * 78)}%)`;
  const fg = heat > 0.55 ? "#f5f5f0" : "#0a0a0a";
  const border = `hsl(180 ${Math.round(30 + heat * 40)}% ${Math.round(88 - heat * 78)}%)`;
  return { background: bg, color: fg, borderColor: border };
};

const packages = [
  {
    icon: Sparkles,
    outcome: "Take my idea to launch",
    bestFor: "New founders, non-technical owners with an app idea",
    includes: "Scope, design, build, launch and handover",
    timeline: "6–12 weeks",
  },
  {
    icon: Smartphone,
    outcome: "Build a mobile app",
    bestFor: "Businesses that need a customer-facing iOS or Android app",
    includes: "Native-quality mobile app, App Store listing",
    timeline: "8–14 weeks",
  },
  {
    icon: Globe,
    outcome: "A website that grows the business",
    bestFor: "Service businesses, coaches, clinics and trades",
    includes: "Conversion-focused site, CMS and booking/contact flow",
    timeline: "3–8 weeks",
  },
  {
    icon: Bot,
    outcome: "Put AI to work in your business",
    bestFor: "Teams drowning in documents, search or repetitive queries",
    includes: "AI assistant, document processing or search workflow",
    timeline: "4–10 weeks",
  },
  {
    icon: Workflow,
    outcome: "Automate the repetitive stuff",
    bestFor: "Businesses manually copying data between tools",
    includes: "Workflow integration, auto quotes, invoices and reports",
    timeline: "3–8 weeks",
  },
  {
    icon: LineChart,
    outcome: "Modernise a tired system",
    bestFor: "Companies stuck on old software or spreadsheets",
    includes: "Refactor/rebuild to a fast, secure, cloud-based system",
    timeline: "8–16 weeks",
  },
];

// Heatmap with cursor-following spotlight + per-tile magnetic reaction.
const HeatmapGrid = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const smx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const smy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });
  const spotlight = useTransform([smx, smy], ([x, y]) =>
    `radial-gradient(320px circle at ${x}px ${y}px, hsl(174 90% 60% / 0.35), transparent 65%)`
  );

  const onMove = (e: React.MouseEvent) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const onLeave = () => { mx.set(-9999); my.set(-9999); };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
    >
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-screen z-20"
        style={{ background: spotlight }}
      />
      {/* Square cells: auto-rows match column width so N×N really is a square. */}
      <div className="relative grid grid-flow-dense grid-cols-2 md:grid-cols-8 gap-px bg-secondary-foreground/15 border border-secondary-foreground/15 [grid-auto-rows:calc((100vw-3rem)/2)] md:[grid-auto-rows:calc((min(80rem,100vw)-5rem)/8)]">
        {tiles.map((t, i) => {
          const s = heatStyle(t.heat);
          const m = t.mobileSpan ?? [1, 1];
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, zIndex: 5 }}
              style={{ background: s.background, color: s.color }}
              className={`group relative flex flex-col justify-between p-5 md:p-6 cursor-default overflow-hidden ${mobileSpanClass(m[0], m[1])} ${spanClass(t.span[0], t.span[1])}`}
            >
              {/* Corner accent line, grows on hover */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-6 bg-current opacity-40 origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-[6]"
              />
              <div className="flex items-start justify-between">
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-60"
                  style={{ color: s.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-70 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                />
              </div>
              <span
                className="font-display leading-[1.05] tracking-[-0.025em] font-medium"
                style={{
                  fontSize:
                    t.span[0] >= 3 || t.span[1] >= 2
                      ? "clamp(1.5rem, 2.4vw, 2.25rem)"
                      : t.span[0] === 2
                      ? "clamp(1.125rem, 1.6vw, 1.5rem)"
                      : "1.125rem",
                }}
              >
                {t.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section id="services" className="relative py-32 md:py-40 bg-secondary text-secondary-foreground overflow-hidden">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-foreground/50 mb-6"
      >
        [ What we do ]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.95] max-w-5xl"
      >
        Your technology partner —{" "}
        <span className="text-secondary-foreground/50">
          from first idea to live product.
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-xl mt-8 text-secondary-foreground/60 text-base md:text-lg"
      >
        You don't need to speak "developer" to work with us. Tell us the outcome
        you want, and we handle the design, the build, and the tech — start to finish.
      </motion.p>
    </div>

    {/* Outcome heatmap — flat, no rounded corners */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-24 relative z-10">
      <div className="flex items-center gap-3 mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-secondary-foreground/50">
        <span>[ Outcomes we deliver ]</span>
        <span className="flex-1 h-px bg-secondary-foreground/15" />
      </div>

      <HeatmapGrid />
    </div>

    {/* Plain-English services grid */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
      >
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-foreground/50 mb-4">
            [ How we help ]
          </p>
          <h3 className="font-display text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] font-medium max-w-2xl">
            Pick the outcome. <span className="text-secondary-foreground/50">We handle the rest.</span>
          </h3>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-secondary-foreground text-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group w-fit"
        >
          Not sure where to start? Talk to us
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </a>
      </motion.div>

      <div className="border border-secondary-foreground/10 overflow-hidden">
        <table className="w-full text-left border-collapse hidden md:table">
          <thead>
            <tr className="bg-primary/10 border-b border-secondary-foreground/10 text-[10px] font-mono uppercase tracking-[0.15em] text-secondary-foreground/70">
              <th className="p-5 font-normal">Outcome</th>
              <th className="p-5 font-normal">Best for</th>
              <th className="p-5 font-normal">What you get</th>
              <th className="p-5 font-normal">Timeline</th>
              <th className="p-5 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((p, i) => (
              <motion.tr
                key={p.outcome}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="border-b border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0">
                      <p.icon className="text-primary" size={18} />
                    </div>
                    <span className="font-display text-lg font-medium tracking-[-0.02em]">{p.outcome}</span>
                  </div>
                </td>
                <td className="p-5 text-sm text-secondary-foreground/60 leading-relaxed">{p.bestFor}</td>
                <td className="p-5 text-sm text-secondary-foreground/80 leading-relaxed">{p.includes}</td>
                <td className="p-5 text-sm font-mono text-secondary-foreground/70">{p.timeline}</td>
                <td className="p-5 text-right">
                  <a
                    href="#contact"
                    aria-label={`Talk to us about ${p.outcome}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Mobile card stack */}
        <div className="md:hidden flex flex-col divide-y divide-secondary-foreground/10">
          {packages.map((p, i) => (
            <motion.div
              key={p.outcome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="p-5 bg-secondary-foreground/[0.02] hover:bg-secondary-foreground/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0">
                    <p.icon className="text-primary" size={18} />
                  </div>
                  <h4 className="font-display text-lg font-medium tracking-[-0.02em]">{p.outcome}</h4>
                </div>
                <a
                  href="#contact"
                  aria-label={`Talk to us about ${p.outcome}`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-secondary-foreground/50 mb-1">Best for</p>
                  <p className="text-secondary-foreground/60 leading-relaxed">{p.bestFor}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-secondary-foreground/50 mb-1">What you get</p>
                  <p className="text-secondary-foreground/80 leading-relaxed">{p.includes}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-secondary-foreground/50 mb-1">Timeline</p>
                  <p className="font-mono text-secondary-foreground/70">{p.timeline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;