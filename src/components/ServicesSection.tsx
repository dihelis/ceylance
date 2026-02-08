import { motion } from "framer-motion";
import { Brain, Globe, Smartphone, Workflow, Code2, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI models, natural language processing, computer vision, and intelligent automation tailored to your business.",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "End-to-end SaaS platform design, development, and scaling — from MVP to enterprise-grade products.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance, responsive websites and web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android, designed for seamless user experiences.",
  },
  {
    icon: Workflow,
    title: "Workflow Automations",
    description: "Streamline operations with intelligent automation, API integrations, and custom business process workflows.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic technology consulting to align your digital initiatives with business objectives and market demands.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => (
  <section id="services" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Our Services</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
