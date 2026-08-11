import { motion } from "framer-motion";
import { ArrowUpRight, Brain, CheckCircle2, Cog, Database, LineChart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const capabilities = [
  { icon: Brain, title: "Custom AI & ML Models", desc: "Bespoke models trained on your data — classification, prediction, recommendation, and generative systems." },
  { icon: Cog, title: "LLM & RAG Integration", desc: "Integrate GPT, Claude, and Gemini with retrieval-augmented generation against your private knowledge base." },
  { icon: Database, title: "Data Pipelines & MLOps", desc: "Production-grade data ingestion, feature stores, and model monitoring on Australian-hosted infrastructure." },
  { icon: LineChart, title: "Computer Vision & NLP", desc: "Image recognition, document understanding, OCR, and natural language processing for real workflows." },
  { icon: ShieldCheck, title: "Responsible AI Governance", desc: "Privacy-by-design, Australian data residency options, and compliance with the Privacy Act and APPs." },
  { icon: Cog, title: "Workflow Automation with AI", desc: "Embed AI into operations: support triage, document processing, sales enablement, and decision support." },
];

const process = [
  { step: "01", title: "Discovery & AI Audit", desc: "We map your data, identify high-ROI use cases, and define success metrics before writing a line of code." },
  { step: "02", title: "Prototype & Validate", desc: "A working proof-of-concept in 2–4 weeks so you can validate accuracy and business impact early." },
  { step: "03", title: "Production Build", desc: "Engineer the model, APIs, and UI for scale — security, observability, and Australian compliance baked in." },
  { step: "04", title: "Operate & Improve", desc: "Continuous monitoring, retraining, and optimisation as your data and business evolve." },
];

const faqs = [
  {
    q: "What does AI software development cost in Australia?",
    a: "A proof-of-concept typically starts from AUD $15k–$40k and a production deployment ranges from AUD $60k–$250k+ depending on data complexity, model type, and integrations. We provide a fixed-scope quote after the discovery workshop.",
  },
  {
    q: "Do you keep our data inside Australia?",
    a: "Yes. We can deploy AI workloads on Australian-region cloud (AWS Sydney, Azure Australia East, or GCP australia-southeast1) and keep training data and inference within Australian borders for Privacy Act compliance.",
  },
  {
    q: "Can you integrate AI into our existing software?",
    a: "Absolutely. We integrate AI capabilities into existing SaaS, internal tools, mobile apps, and legacy systems via APIs, webhooks, and embedded SDKs without forcing a rewrite.",
  },
  {
    q: "Which industries do you build AI for?",
    a: "We've delivered AI projects across healthcare, retail, logistics, real estate, education, and professional services — each with industry-specific compliance and accuracy requirements.",
  },
  {
    q: "How long does an AI project take?",
    a: "A focused proof-of-concept ships in 2–4 weeks. A production-ready AI feature typically takes 8–16 weeks, depending on data readiness and integration complexity.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Software Development Australia",
    serviceType: "AI Software Development",
    provider: { "@type": "Organization", name: "Ceylance", url: "https://ceylance.com/" },
    areaServed: { "@type": "Country", name: "Australia" },
    description:
      "Custom AI software development in Australia — LLMs, machine learning, computer vision, and AI workflow automation, built and operated by an Australia-based team.",
    url: "https://ceylance.com/ai-software-development-australia",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const AiSoftwareDevelopmentAustralia = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Software Development Australia | Ceylance"
        description="Australia-based AI development company building custom AI, LLM integrations, and machine learning for Australian businesses. Book a free consultation."
        canonical="https://ceylance.com/ai-software-development-australia"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, transparent 0%, hsl(var(--background)) 75%)" }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6"
          >
            [ AI Software Development · Australia ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11vw] md:text-[6.5vw] leading-[0.95] tracking-[-0.045em] font-medium max-w-6xl"
          >
            Custom AI, built <br />
            <span className="text-foreground/40">for Australian teams.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Ceylance is an Australia-based AI software consulting company. We design, build and ship
            LLM integrations, machine learning, computer vision, and intelligent automation — for
            Australian startups and enterprises.
          </motion.p>
          <Link
            to="/#contact"
            className="mt-10 inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            Book a free AI consultation
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ What we build ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium">
              End-to-end AI <span className="text-foreground/40">capabilities.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-muted/50 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <c.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-xl font-medium tracking-[-0.02em] mb-3">{c.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ How we work ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium">
              From idea to <span className="text-foreground/40">production AI.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.step} className="p-8 rounded-3xl bg-muted/50 border border-border">
                <span className="font-mono text-xs tracking-widest text-foreground/40">{p.step}</span>
                <h3 className="font-display text-xl font-medium tracking-[-0.02em] mt-6 mb-3">{p.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Australia */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ Why Ceylance ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium mb-6">
              An Australian AI partner <span className="text-foreground/40">you can trust.</span>
            </h2>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              We combine deep AI engineering with Australian business context — practical use cases, local
              compliance, and a delivery team that's reachable in your timezone.
            </p>
            <div className="space-y-3">
              {[
                "Australia-based delivery team",
                "Privacy Act & APP-aligned data handling",
                "Cloud-agnostic — AWS, Azure, GCP Australian regions",
                "Fixed-scope POC in 2–4 weeks",
                "Production support and continuous model improvement",
              ].map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "2–4 wks", l: "POC Timeline" },
              { v: "100%", l: "AU Data Residency" },
              { v: "50+", l: "Projects Delivered" },
              { v: "24/7", l: "Production Support" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-3xl bg-muted/50 border border-border">
                <p className="font-display text-3xl md:text-4xl font-medium tracking-[-0.03em] text-foreground">{s.v}</p>
                <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/50">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">[ FAQ ]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium">
              Common <span className="text-foreground/40">questions.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-3xl border border-border bg-muted/50 p-6 hover:border-primary/40 transition-colors">
                <summary className="font-display text-lg font-medium tracking-[-0.02em] cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-sm text-foreground/60 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.045em] font-medium mb-6">
            Ready to build <br /><span className="text-foreground/40">with AI?</span>
          </h2>
          <p className="text-foreground/60 mb-10 max-w-lg mx-auto">
            Tell us about your data and we'll come back with a practical AI roadmap within 48 hours.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            Book a free consultation
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiSoftwareDevelopmentAustralia;