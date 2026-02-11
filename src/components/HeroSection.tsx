import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GeometricMesh from "@/components/GeometricMesh";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GeometricMesh />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-6">
            Your Technology Partner — Australia, UK and UAE  
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            We Build the
            <br />
            <span className="text-gradient">Future of Tech</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">AI solutions, SaaS platforms, web & mobile apps, and workflow automations — engineered for growth across APAC and EMEA markets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContact} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow">
              Start a Project <ArrowRight size={18} />
            </button>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({
            behavior: "smooth"
          })} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 transition-colors">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;