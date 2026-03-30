import { motion } from "framer-motion";
import { CheckCircle2, Download, ExternalLink } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "AU & UK", label: "Markets Served" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Coverage" },
];

const reasons = [
  "Deep expertise across AI, web, mobile & automation",
  "Proven delivery for Australian & UK enterprises",
  "Agile methodology with transparent communication",
  "Post-launch support & continuous optimisation",
];

const AboutSection = () => (
  <section id="about" className="py-28 bg-secondary/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Ceylance</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Technology Partners
            <br />
            <span className="text-gradient">You Can Trust</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ceylance is a boutique software consultancy helping businesses across Australia and the
            United Kingdom harness the power of modern technology. From AI-driven solutions to
            scalable SaaS platforms, we deliver digital products that drive real results.
          </p>
          <div className="space-y-4">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/ceylance-brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download Brochure
            </a>
            <a
              href="/ceylance-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
            >
              <ExternalLink size={16} />
              View Brochure
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-xl bg-card border border-border text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-display text-3xl font-bold text-primary mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
