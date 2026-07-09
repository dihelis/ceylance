import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Download, Eye, X } from "lucide-react";

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

const AboutSection = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <>
      <section id="about" className="relative py-32 md:py-40 bg-background text-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/50 mb-6"
          >
            [ About Ceylance ]
          </motion.p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.95]"
            >
              Technology partners{" "}
              <span className="text-foreground/40">you can trust.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-4 text-foreground/60 text-base md:text-lg leading-relaxed"
            >
              Ceylance is a boutique software consultancy helping businesses across Australia and the United Kingdom
              harness the power of modern technology. From AI-driven solutions to scalable SaaS platforms, we deliver
              digital products that drive real results.
            </motion.p>
          </div>

          {/* Stats — flat grid */}
          <div className="mt-16 md:mt-24">
            <div className="flex items-center gap-3 mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50">
              <span>[ By the numbers ]</span>
              <span className="flex-1 h-px bg-foreground/15" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="bg-background hover:bg-primary/10 transition-colors p-6 md:p-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] text-primary mb-2">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/60">
                      {s.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reasons + CTA — two flat panels */}
          <div className="mt-10 md:mt-14 grid md:grid-cols-2 border border-foreground/15">
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-foreground/15">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 mb-6">
                [ Why work with us ]
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={16} />
                    <span className="text-sm text-foreground/80 leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 mb-6">
                  [ Company profile ]
                </p>
                <p className="font-display text-2xl md:text-3xl leading-[1.1] tracking-[-0.03em] font-medium">
                  See how we work, who we've built for, and what we deliver.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowViewer(true)}
                  className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  View profile
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-12">
                    <Eye size={14} strokeWidth={2.5} />
                  </span>
                </button>
                <a
                  href="/ceylance-brochure.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-foreground/20 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowViewer(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[85vh] bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/50">
                <h3 className="text-sm font-semibold text-foreground">Ceylance Brochure</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/ceylance-brochure.pdf"
                    download
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Download size={14} />
                    Download
                  </a>
                  <button
                    onClick={() => setShowViewer(false)}
                    className="p-1 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <iframe src="/ceylance-brochure.pdf" className="w-full h-[calc(85vh-48px)]" title="Ceylance Brochure" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;
