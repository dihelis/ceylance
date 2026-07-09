import { motion } from "framer-motion";
import { Sparkles, Smartphone, Globe, Bot, LineChart, Workflow, ArrowUpRight } from "lucide-react";

// Outcome tiles — plain English, arranged as a flat heatmap grid.
// `heat` (0–1) drives colour intensity so the wall reads like a heatmap.
type Tile = { label: string; heat: number };

const tiles: Tile[] = [
  { label: "Turn your idea into an app", heat: 1.00 },
  { label: "Launch in weeks, not years", heat: 0.35 },
  { label: "Make AI actually useful",    heat: 0.85 },
  { label: "Automate the busywork",      heat: 0.55 },
  { label: "A team that owns delivery",  heat: 0.20 },
  { label: "Apps people love using",     heat: 0.70 },
  { label: "Websites that convert",      heat: 0.45 },
  { label: "Plain-English updates",      heat: 0.15 },
  { label: "No jargon, ever",            heat: 0.90 },
  { label: "Fixed scope, fixed price",   heat: 0.30 },
  { label: "Built to scale with you",    heat: 0.60 },
  { label: "One partner, end to end",    heat: 0.75 },
];

// Map heat 0..1 to a flat teal fill + text colour with no gradients.
const heatStyle = (heat: number): { background: string; color: string; borderColor: string } => {
  const bg = `hsl(180 ${Math.round(40 + heat * 50)}% ${Math.round(96 - heat * 78)}%)`;
  const fg = heat > 0.55 ? "#f5f5f0" : "#0a0a0a";
  const border = `hsl(180 ${Math.round(30 + heat * 40)}% ${Math.round(88 - heat * 78)}%)`;
  return { background: bg, color: fg, borderColor: border };
};

const services = [
  {
    icon: Sparkles,
    title: "Take my idea to launch",
    desc: "You have the vision — we shape it into a real product. Design, build and ship, all under one roof.",
  },
  {
    icon: Smartphone,
    title: "Build a mobile app",
    desc: "iOS and Android apps your customers actually want to open. From first sketch to the App Store.",
  },
  {
    icon: Globe,
    title: "A website that grows the business",
    desc: "Marketing sites, booking systems and customer portals that turn visitors into paying customers.",
  },
  {
    icon: Bot,
    title: "Put AI to work in your business",
    desc: "Practical AI — smarter search, chat assistants, document processing — tied to real outcomes, not hype.",
  },
  {
    icon: Workflow,
    title: "Automate the repetitive stuff",
    desc: "Cut the manual admin. We connect your tools so quotes, invoices and reports handle themselves.",
  },
  {
    icon: LineChart,
    title: "Modernise a tired system",
    desc: "Legacy software slowing you down? We rebuild it into something fast, secure and easy to use.",
  },
];

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
        <span className="flex items-center gap-2">
          <span>less</span>
          <span className="flex">
            {[0.1, 0.3, 0.5, 0.7, 0.95].map((h) => (
              <span key={h} className="w-4 h-3" style={{ background: heatStyle(h).background }} />
            ))}
          </span>
          <span>more common</span>
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-secondary-foreground/15 border border-secondary-foreground/15">
        {tiles.map((t, i) => {
          const s = heatStyle(t.heat);
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.02, zIndex: 5 }}
              style={{ background: s.background, color: s.color }}
              className="relative aspect-[5/3] flex flex-col justify-between p-5 md:p-6 cursor-default"
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-60"
                style={{ color: s.color }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg md:text-xl leading-[1.1] tracking-[-0.02em] font-medium">
                {t.label}
              </span>
            </motion.div>
          );
        })}
      </div>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group p-8 rounded-3xl bg-secondary-foreground/[0.04] border border-secondary-foreground/10 hover:border-primary/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mb-6">
              <s.icon className="text-primary" size={20} />
            </div>
            <h4 className="font-display text-xl font-medium tracking-[-0.02em] mb-3">{s.title}</h4>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;