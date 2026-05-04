import { motion } from "framer-motion";
import { ArrowRight, Brain, CheckCircle2, Cog, Database, LineChart, ShieldCheck } from "lucide-react";
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
    provider: { "@type": "Organization", name: "Ceylance", url: "https://www.ceylance.com/" },
    areaServed: { "@type": "Country", name: "Australia" },
    description:
      "Custom AI software development in Australia — LLMs, machine learning, computer vision, and AI workflow automation, built and operated by an Australia-based team.",
    url: "https://www.ceylance.com/ai-software-development-australia",
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
        title="AI Software Development Australia | Custom AI & ML — Ceylance"
        description="Australia-based AI software development company. Custom AI, LLM integration, machine learning, and AI automation built for Australian businesses. Book a free consultation."
        canonical="https://www.ceylance.com/ai-software-development-australia"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
          >
            AI Software Development — Australia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto"
          >
            AI Software Development <span className="text-gradient">in Australia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10"
          >
            Ceylance is an Australia-based AI software consulting company. We design, build, and ship custom AI
            products — LLM integrations, machine learning, computer vision, and intelligent automation — for
            Australian startups and enterprises.
          </motion.p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
          >
            Book a Free AI Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What we build</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              End-to-end AI <span className="text-gradient">capabilities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-7 rounded-xl glass glass-hover">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">How we work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              From idea to production <span className="text-gradient">AI</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-7 rounded-xl border border-border bg-card">
                <p className="font-display text-3xl font-bold text-primary mb-3">{p.step}</p>
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Australia */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Why Ceylance</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              An Australian AI partner <span className="text-gradient">you can trust</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
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
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: "2–4 wks", l: "POC Timeline" },
              { v: "100%", l: "AU Data Residency" },
              { v: "50+", l: "Projects Delivered" },
              { v: "24/7", l: "Production Support" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-xl glass glass-hover text-center">
                <p className="font-display text-3xl font-bold text-primary mb-1">{s.v}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Common <span className="text-gradient">questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-6">
                <summary className="font-display text-lg font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to build with <span className="text-gradient">AI</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your data and we'll come back with a practical AI roadmap within 48 hours.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
          >
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiSoftwareDevelopmentAustralia;