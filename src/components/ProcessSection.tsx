import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const EASE = [0.22, 1, 0.36, 1] as const;

const ProcessSection = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 60%"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-32 md:py-40 bg-background border-t border-border overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-plus-pattern opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6"
        >
          [ How we operate ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-display text-4xl md:text-6xl leading-[1.02] font-medium tracking-[-0.035em] max-w-4xl"
        >
          An extension of your team —{" "}
          <span className="text-foreground/40">
            not observers, operators. We embed, take ownership, and push your product
            further than internal teams typically can.
          </span>
        </motion.h2>

        {/* Timeline rail */}
        <div ref={railRef} className="mt-20 md:mt-28">
          <div className="relative h-px w-full bg-border">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              style={{ width: fillWidth }}
            />
            {/* Dots at each step */}
            <div className="absolute inset-0 flex justify-between items-center">
              {steps.map((s, i) => (
                <TimelineDot key={s.num} progress={scrollYProgress} index={i} total={steps.length} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-px">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative bg-background hover:bg-muted/40 transition-colors p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
              >
                {/* Top accent line reveals on hover */}
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/40 uppercase">
                    Step {s.num}
                  </span>
                  <span className="font-display text-5xl md:text-6xl font-medium tracking-[-0.04em] text-primary/80 leading-none">
                    {s.num}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-display text-xl md:text-2xl font-medium mb-3 tracking-[-0.02em]"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Dot that fills primary once scroll progress passes its position.
const TimelineDot = ({
  progress,
  index,
  total,
}: {
  progress: import("framer-motion").MotionValue<number>;
  index: number;
  total: number;
}) => {
  const p = index / (total - 1);
  const scale = useTransform(progress, [p - 0.02, p + 0.02], [1, 1.6]);
  const bg = useTransform(progress, [p - 0.02, p], ["hsl(var(--border))", "hsl(var(--primary))"]);
  return (
    <motion.span
      className="block w-3 h-3 -translate-y-1/2 border border-border"
      style={{ scale, backgroundColor: bg }}
    />
  );
};

export default ProcessSection;
