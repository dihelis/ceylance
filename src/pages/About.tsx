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
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Remote Patient Monitoring App for Elderly Care",
    summary: "Developed the patient-facing mobile app for Dignio, a Norwegian remote-care specialist. The cloud-based platform enables healthcare providers to monitor patients remotely via telehealth, RPM, and preventive medicine — now serving the UK and USA markets.",
    results: ["Award-winning platform", "3 international markets", "Improved patient independence"],
  },
  {
    icon: GraduationCap,
    industry: "EdTech",
    title: "AI-Powered Interactive STEM Learning Platform",
    summary: "Built AI-driven features for zyBooks, an interactive textbook platform replacing traditional STEM coursework. The system personalises learning paths and provides real-time feedback to boost student confidence and outcomes.",
    results: ["Adopted by major universities", "Higher completion rates", "Reduced instructor workload"],
  },
  {
    icon: Truck,
    industry: "Veterinary",
    title: "Practice Management System for Vet Clinics",
    summary: "Engineered the core practice management software for Vetserve, a Norwegian IT provider serving animal clinics and hospitals. The platform was later acquired by Provet, a leading international veterinary software group.",
    results: ["Successful acquisition", "Clinics & hospitals served", "Streamlined operations"],
  },
  {
    icon: Building2,
    industry: "SaaS / PR",
    title: "PR Workflow & Source Management Platform",
    summary: "Built PR Monkey, a Public Relations SaaS that lets professionals upload sources, seamlessly pitch journalists, and track performance. The platform provides insights into client attention needs with a journalist platform on the roadmap.",
    results: ["End-to-end PR workflow", "Real-time pitch tracking", "Free beta launch"],
  },
  {
    icon: Landmark,
    industry: "FinTech / Identity",
    title: "Digital Identity Wallet for SMEs",
    summary: "Developed Oliu Wallet for ATB Ventures — a ready-to-deploy digital identity management platform enabling SMEs to verify credentials securely. The enterprise solution accelerates adoption of decentralised digital identity.",
    results: ["Enterprise-grade security", "SME-ready deployment", "Decentralised identity"],
  },
  {
    icon: ShoppingCart,
    industry: "Finance / AI",
    title: "AI-Driven Equity Analysis Engine",
    summary: "Built an intelligent equity analysis platform that leverages machine learning to parse financial data, identify market patterns, and generate actionable investment insights for portfolio managers.",
    results: ["Automated analysis pipeline", "Real-time market signals", "Data-driven decisions"],
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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              From AI-driven solutions to scalable SaaS platforms, we deliver digital products that drive <span className="text-gradient">real results</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We combine deep technical expertise with genuine business understanding. Every engagement
              starts with listening — understanding your goals, constraints, and users — so we can
              architect solutions that truly move the needle.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl glass text-center">
                <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Reasons + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl glass"
          >
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {reasons.map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary shrink-0" size={15} />
                  <span className="text-sm text-foreground">{r}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setShowViewer(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Eye size={15} />
                Company Profile
              </button>
              <a
                href="/ceylance-brochure.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
              >
                <Download size={15} />
                Download
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Industries</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We bring deep domain knowledge across a wide range of sectors.
            </p>
          </motion.div>
        </div>

        {/* Marquee row 1 */}
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee">
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-4 shrink-0">
                {[
                  { icon: HeartPulse, name: "Healthcare" },
                  { icon: ShoppingCart, name: "Retail" },
                  { icon: Building2, name: "Hospitality" },
                  { icon: HeartPulse, name: "Wellness" },
                  { icon: Truck, name: "Fashion & Textile" },
                  { icon: Truck, name: "Automotive" },
                ].map((industry) => (
                  <div
                    key={`${dupeIdx}-${industry.name}`}
                    className="flex items-center gap-3 px-6 py-4 rounded-xl glass shrink-0"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <industry.icon className="text-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{industry.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 (reverse) */}
        <div className="relative w-full mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee-reverse">
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-4 shrink-0">
                {[
                  { icon: Truck, name: "Logistics" },
                  { icon: Building2, name: "Manufacturing" },
                  { icon: Landmark, name: "Real Estate" },
                  { icon: GraduationCap, name: "Education" },
                  { icon: Building2, name: "Telecommunication" },
                ].map((industry) => (
                  <div
                    key={`${dupeIdx}-${industry.name}`}
                    className="flex items-center gap-3 px-6 py-4 rounded-xl glass shrink-0"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <industry.icon className="text-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{industry.name}</span>
                  </div>
                ))}
              </div>
            ))}
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
