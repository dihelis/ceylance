import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your goals, users, and market landscape." },
  { num: "02", title: "Strategy", desc: "A tailored roadmap with clear milestones and deliverables." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos and continuous feedback loops." },
  { num: "04", title: "Launch & Scale", desc: "Go live with confidence, backed by ongoing optimisation and support." },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const line = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProcessSection = () => (
  <section id="process" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">How We Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Our Process</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={card}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Animated gradient accent on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Animated top line */}
            <motion.div
              variants={line}
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
            />

            <div className="relative z-10">
              <motion.span
                className="font-display text-5xl font-bold text-primary/15 block group-hover:text-primary/25 transition-colors duration-300"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
              >
                {s.num}
              </motion.span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
