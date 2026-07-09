import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Schedule your call",
    desc: "A quick, honest conversation — no pitch decks. We learn your product, your goals, and where AI can move the needle fastest.",
  },
  {
    num: "02",
    title: "Scope the engagement",
    desc: "Pick a plan that fits where you are today. No lock-in, no long contracts — we earn your trust sprint over sprint.",
  },
  {
    num: "03",
    title: "We ship in iterations",
    desc: "We embed, prioritise, and start moving fast. Weekly cycles, tight feedback loops, real output — not status reports.",
  },
  {
    num: "04",
    title: "Compound &amp; scale",
    desc: "The longer we're in, the sharper we get. Every cycle we understand your product deeper and raise the bar on what we ship.",
  },
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
  <section id="process" className="relative py-32 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mb-20"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
          [ How we operate ]
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] font-medium tracking-[-0.035em]">
          At Ceylance, we operate as an extension of your team —{" "}
          <span className="text-foreground/40">
            not observers, operators. We embed, take ownership, and push your product
            further than internal teams typically can.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {steps.map((s) => (
          <motion.div
            key={s.num}
            variants={card}
            whileHover={{ y: -6 }}
            className="group relative p-8 rounded-3xl bg-muted/50 border border-border hover:border-primary/40 transition-all"
          >
            <span className="font-mono text-xs tracking-widest text-foreground/40">
              {s.num}
            </span>
            <h3 className="font-display text-2xl font-medium mt-8 mb-4 tracking-[-0.02em]"
                dangerouslySetInnerHTML={{ __html: s.title }} />
            <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
