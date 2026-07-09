import { motion } from "framer-motion";
import { CheckCircle2, Download, Eye, ArrowUpRight, Building2, ShoppingCart, HeartPulse, GraduationCap, Landmark, Truck } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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


const About = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Ceylance — Australian Software Consulting Company"
        description="Learn about Ceylance, an Australia-based software consultancy delivering AI, SaaS, web, and mobile solutions for businesses across AU, UK, and UAE."
        canonical="https://www.ceylance.com/about"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, transparent 0%, hsl(var(--background)) 75%)" }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6"
          >
            [ About Ceylance ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11vw] md:text-[6.5vw] leading-[0.95] tracking-[-0.045em] font-medium max-w-6xl"
          >
            A boutique studio <br />
            <span className="text-foreground/40">for AI-native operators.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Ceylance helps businesses across Australia, the UK and UAE design, build and ship
            intelligent software — embedded with founders, obsessed with outcomes.
          </motion.p>
        </div>
      </section>

      {/* About Detail */}
      <section className="relative py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
              [ About Ceylance ]
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium mb-6">
              Technology partners{" "}
              <span className="text-foreground/40">you can trust.</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed max-w-2xl">
              Ceylance is a boutique software consultancy helping businesses across Australia
              and the United Kingdom harness the power of modern technology. From AI-driven
              solutions to scalable SaaS platforms, we deliver digital products that drive real results.
            </p>
          </motion.div>

          {/* Stats grid — flat, square cells */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-secondary-foreground/15 border border-secondary-foreground/15 mb-8"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 md:p-8 bg-secondary-foreground/[0.04] hover:bg-primary/10 transition-colors"
              >
                <p className="font-display text-3xl md:text-4xl font-medium tracking-[-0.03em] text-foreground">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Reasons + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-secondary-foreground/15 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-secondary-foreground/15">
              <div className="p-6 md:p-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50 mb-4">
                  [ Why work with us ]
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="text-primary" size={13} />
                      </div>
                      <span className="text-sm text-foreground/80 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50 mb-2">
                    [ Company profile ]
                  </p>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Download our full profile for service details, case studies and how we work.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowViewer(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Eye size={15} />
                    View Profile
                  </button>
                  <a
                    href="/ceylance-brochure.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-secondary-foreground/20 text-foreground font-medium text-sm hover:border-primary/50 transition-colors"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-28 overflow-hidden border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ Industries ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium mb-4">
              Deep domain knowledge <span className="text-foreground/40">across sectors.</span>
            </h2>
          </motion.div>
        </div>

        {/* Industry mosaic — flat bento wall */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
            {[
              { icon: HeartPulse, name: "Healthcare", span: "md:col-span-2 md:row-span-1" },
              { icon: ShoppingCart, name: "Retail", span: "md:col-span-1 md:row-span-1" },
              { icon: Building2, name: "Hospitality", span: "md:col-span-1 md:row-span-1" },
              { icon: HeartPulse, name: "Wellness", span: "md:col-span-2 md:row-span-1" },
              { icon: Truck, name: "Automotive", span: "md:col-span-1 md:row-span-1" },
              { icon: Truck, name: "Logistics", span: "md:col-span-1 md:row-span-1" },
              { icon: Truck, name: "Fashion & Textile", span: "md:col-span-1 md:row-span-2" },
              { icon: Building2, name: "Manufacturing", span: "md:col-span-2 md:row-span-1" },
              { icon: Landmark, name: "Real Estate", span: "md:col-span-1 md:row-span-1" },
              { icon: GraduationCap, name: "Education", span: "md:col-span-2 md:row-span-1" },
              { icon: Building2, name: "Telecommunication", span: "md:col-span-1 md:row-span-1" },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ backgroundColor: "hsl(var(--primary) / 0.10)" }}
                className={`relative p-6 md:p-8 bg-background transition-colors group cursor-default ${industry.span}`}
              >
                <div className="flex flex-col h-full justify-between min-h-[140px] md:min-h-[160px]">
                  <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0">
                    <industry.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="font-display text-lg md:text-xl font-medium tracking-[-0.02em] text-foreground leading-tight">
                      {industry.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-28 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ Case studies ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium mb-4">
              Proven results <span className="text-foreground/40">across industries.</span>
            </h2>
          </motion.div>

          <div className="border border-foreground/15 overflow-hidden">
            <table className="w-full text-left border-collapse hidden md:table">
              <thead>
                <tr className="bg-primary/10 border-b border-foreground/10 text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/70">
                  <th className="p-5 font-normal">Industry</th>
                  <th className="p-5 font-normal">Project</th>
                  <th className="p-5 font-normal">What we delivered</th>
                  <th className="p-5 font-normal">Results</th>
                  <th className="p-5 font-normal text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((study, i) => (
                  <motion.tr
                    key={study.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="border-b border-foreground/10 hover:bg-primary/[0.04] transition-colors group"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0">
                          <study.icon className="text-primary" size={18} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary">
                          {study.industry}
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <p className="font-display text-lg font-medium tracking-[-0.02em] text-foreground">{study.title}</p>
                    </td>
                    <td className="p-5 text-sm text-foreground/60 leading-relaxed max-w-md">{study.summary}</td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((r) => (
                          <span
                            key={r}
                            className="text-[11px] px-2.5 py-1 bg-primary/10 text-primary font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-5 text-right">
                      <button className="inline-flex items-center justify-center w-10 h-10 bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {/* Mobile card stack */}
            <div className="md:hidden flex flex-col divide-y divide-foreground/10">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="p-5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0">
                        <study.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary mb-0.5">
                          {study.industry}
                        </p>
                        <h4 className="font-display text-lg font-medium tracking-[-0.02em] leading-tight">
                          {study.title}
                        </h4>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center w-10 h-10 bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50 mb-1">What we delivered</p>
                      <p className="text-foreground/60 leading-relaxed">{study.summary}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50 mb-1">Results</p>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((r) => (
                          <span
                            key={r}
                            className="text-[11px] px-2.5 py-1 bg-primary/10 text-primary font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.045em] font-medium mb-6">
              Ready to be our next <br /><span className="text-foreground/40">success story?</span>
            </h2>
            <p className="text-foreground/60 mb-10 max-w-lg mx-auto">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              Get in touch
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
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
