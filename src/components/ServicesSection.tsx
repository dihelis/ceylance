import { motion } from "framer-motion";

/*
 * Verteal-inspired "fully embedded" capability chips section.
 * Light background, huge headline, floating draggable-looking pill chips.
 */

type Chip = {
  label: string;
  bg: string; // tailwind-friendly hex
  fg: string;
  x: string;
  y: string;
  rotate: number;
  delay: number;
};

const chips: Chip[] = [
  // Teal-anchored palette (brand) with tonal supporting hues
  { label: "AI Engineer",       bg: "#2DD4BF", fg: "#0a0a0a", x: "8%",  y: "6%",  rotate: -6, delay: 0.05 },
  { label: "LLM Ops",           bg: "#0a0a0a", fg: "#f5f5f0", x: "38%", y: "0%",  rotate: 3,  delay: 0.15 },
  { label: "Product Designer",  bg: "#A7F3D0", fg: "#0a0a0a", x: "68%", y: "8%",  rotate: -4, delay: 0.25 },
  { label: "SaaS Architect",    bg: "#0E7490", fg: "#f5f5f0", x: "82%", y: "32%", rotate: 6,  delay: 0.35 },
  { label: "Mobile Engineer",   bg: "#1E293B", fg: "#5EEAD4", x: "5%",  y: "42%", rotate: 4,  delay: 0.45 },
  { label: "3D / Motion",       bg: "#5EEAD4", fg: "#0a0a0a", x: "72%", y: "62%", rotate: -8, delay: 0.55 },
  { label: "Web Developer",     bg: "#164E63", fg: "#67E8F9", x: "22%", y: "72%", rotate: 5,  delay: 0.65 },
  { label: "Automation Ops",    bg: "#2DD4BF", fg: "#0a0a0a", x: "50%", y: "80%", rotate: -3, delay: 0.75 },
  { label: "Creative Director", bg: "#f5f5f0", fg: "#0a0a0a", x: "88%", y: "78%", rotate: 8,  delay: 0.85 },
];

const ServicesSection = () => (
  <section id="services" className="relative py-32 md:py-40 bg-secondary text-secondary-foreground overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-foreground/50 mb-6"
      >
        [ Services ]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.95]"
      >
        A dedicated team,<br />
        <span className="text-secondary-foreground/50">fully embedded.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-xl mx-auto mt-8 text-secondary-foreground/60"
      >
        AI engineers, product designers, and full-stack operators —
        one senior pod, plugged into your roadmap.
      </motion.p>
    </div>

    {/* Floating chips */}
    <div className="relative mt-16 md:mt-24 h-[560px] md:h-[520px] max-w-6xl mx-auto">
      {chips.map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: c.rotate, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
          viewport={{ once: true }}
          transition={{
            delay: c.delay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            left: c.x,
            top: c.y,
            background: c.bg,
            color: c.fg,
          }}
          className="absolute px-6 py-3 rounded-full font-medium text-base md:text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] whitespace-nowrap cursor-grab active:cursor-grabbing"
        >
          {c.label}
        </motion.div>
      ))}

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </div>
  </section>
);
export default ServicesSection;