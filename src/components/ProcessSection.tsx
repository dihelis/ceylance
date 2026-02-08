import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your goals, users, and market landscape." },
  { num: "02", title: "Strategy", desc: "A tailored roadmap with clear milestones and deliverables." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos and continuous feedback loops." },
  { num: "04", title: "Launch & Scale", desc: "Go live with confidence, backed by ongoing optimisation and support." },
];

const ProcessSection = () => (
  <section id="process" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">How We Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Our Process</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative p-8 rounded-xl bg-card border border-border"
          >
            <span className="font-display text-5xl font-bold text-primary/15">{s.num}</span>
            <h3 className="font-display text-xl font-semibold mt-2 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
