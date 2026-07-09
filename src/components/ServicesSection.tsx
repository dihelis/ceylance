import { motion } from "framer-motion";
import { Sparkles, Smartphone, Globe, Bot, LineChart, Workflow, ArrowUpRight } from "lucide-react";

type Chip = {
  label: string;
  bg: string;
  fg: string;
  x: string;
  y: string;
  rotate: number;
  delay: number;
};

// Outcome-oriented chips — plain English, no job titles or jargon
const chips: Chip[] = [
  { label: "Turn your idea into an app", bg: "#2DD4BF", fg: "#0a0a0a", x: "2%",  y: "4%",  rotate: -6, delay: 0.05 },
  { label: "Launch in weeks, not years", bg: "#0a0a0a", fg: "#f5f5f0", x: "44%", y: "0%",  rotate: 3,  delay: 0.15 },
  { label: "Make AI actually useful",    bg: "#A7F3D0", fg: "#0a0a0a", x: "72%", y: "8%",  rotate: -4, delay: 0.25 },
  { label: "Automate the busywork",      bg: "#0E7490", fg: "#f5f5f0", x: "78%", y: "36%", rotate: 6,  delay: 0.35 },
  { label: "A team that owns delivery",  bg: "#1E293B", fg: "#5EEAD4", x: "1%",  y: "40%", rotate: 4,  delay: 0.45 },
  { label: "Apps people love using",     bg: "#5EEAD4", fg: "#0a0a0a", x: "60%", y: "64%", rotate: -8, delay: 0.55 },
  { label: "Websites that convert",      bg: "#164E63", fg: "#67E8F9", x: "8%",  y: "72%", rotate: 5,  delay: 0.65 },
  { label: "Plain-English updates",      bg: "#2DD4BF", fg: "#0a0a0a", x: "42%", y: "82%", rotate: -3, delay: 0.75 },
  { label: "No jargon, ever",            bg: "#f5f5f0", fg: "#0a0a0a", x: "78%", y: "78%", rotate: 8,  delay: 0.85 },
];

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

    {/* Outcome chips */}
    <div className="relative mt-16 md:mt-24 h-[560px] md:h-[520px] max-w-6xl mx-auto px-6">
      {chips.map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: c.rotate, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
          viewport={{ once: true }}
          transition={{ delay: c.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ left: c.x, top: c.y, background: c.bg, color: c.fg }}
          className="absolute px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] whitespace-nowrap cursor-grab active:cursor-grabbing"
        >
          {c.label}
        </motion.div>
      ))}

      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
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