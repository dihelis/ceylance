import { motion } from "framer-motion";
import { CheckCircle2, Download, Eye, ArrowRight, Building2, ShoppingCart, HeartPulse, GraduationCap, Landmark, Truck } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const caseStudies = [
  {
    icon: Building2,
    industry: "Real Estate",
    title: "AI-Powered Property Valuation Platform",
    summary: "Built a machine-learning platform that analyses market trends and property data to deliver instant, accurate valuations for a leading Australian real estate group.",
    results: ["40% faster valuations", "92% accuracy rate", "3x lead conversion"],
  },
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    title: "Headless Commerce Rebuild for UK Retailer",
    summary: "Migrated a legacy monolith to a modern headless architecture with a custom React storefront and automated inventory management.",
    results: ["2.1s → 0.4s load time", "68% mobile conversion lift", "99.9% uptime"],
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Telehealth Scheduling & Records System",
    summary: "Designed and shipped a HIPAA-ready telehealth platform with video consultations, e-prescriptions, and integrated patient records.",
    results: ["10k+ monthly consultations", "4.8★ patient rating", "50% admin reduction"],
  },
  {
    icon: GraduationCap,
    industry: "Education",
    title: "Adaptive Learning Management System",
    summary: "Created an AI-driven LMS that personalises lesson paths based on student performance, deployed across 15 schools in Victoria.",
    results: ["32% grade improvement", "15 schools onboarded", "85% teacher adoption"],
  },
  {
    icon: Landmark,
    industry: "Finance",
    title: "Regulatory Compliance Dashboard",
    summary: "Developed a real-time compliance monitoring dashboard for a UK fintech, aggregating data from multiple regulatory feeds.",
    results: ["100% audit pass rate", "6hr → 20min reporting", "£200k saved annually"],
  },
  {
    icon: Truck,
    industry: "Logistics",
    title: "Fleet Tracking & Route Optimisation",
    summary: "Built a GPS-enabled fleet management tool with AI route optimisation, reducing fuel costs and delivery times for a national courier.",
    results: ["18% fuel savings", "25% faster deliveries", "Real-time tracking"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
          >
            About Ceylance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Technology Partners <span className="text-gradient">You Can Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Ceylance is a boutique software consultancy helping businesses across Australia and the
            United Kingdom harness the power of modern technology.
          </motion.p>
        </div>
      </section>

      {/* About Detail */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From AI-driven solutions to scalable SaaS platforms, we deliver digital products that drive <span className="text-gradient">real results</span>.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine deep technical expertise with genuine business understanding. Every engagement
                starts with listening — understanding your goals, constraints, and users — so we can
                architect solutions that truly move the needle.
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
                <button
                  onClick={() => setShowViewer(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Eye size={16} />
                  View Brochure
                </button>
                <a
                  href="/ceylance-brochure.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
                >
                  <Download size={16} />
                  Download Brochure
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
                <div key={s.label} className="p-6 rounded-xl glass glass-hover text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Case Studies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Proven Results Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              A selection of projects where we've helped businesses transform their operations through technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-xl glass glass-hover flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <study.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {study.results.map((r) => (
                    <span
                      key={r}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to be our next <span className="text-gradient">success story</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </motion.div>
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
              <iframe
                src="/ceylance-brochure.pdf"
                className="w-full h-[calc(85vh-48px)]"
                title="Ceylance Brochure"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default About;
