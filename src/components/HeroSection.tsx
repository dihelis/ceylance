import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, ShoppingCart, Building2, Sparkles, Shirt, Car, Truck, Factory, Home, GraduationCap, Radio } from "lucide-react";
import GradientMesh from "@/components/GradientMesh";

const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Building2, name: "Hospitality" },
  { icon: Sparkles, name: "Wellness" },
  { icon: Shirt, name: "Fashion & Textile" },
  { icon: Car, name: "Automotive" },
  { icon: Truck, name: "Logistics" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Home, name: "Real Estate" },
  { icon: GraduationCap, name: "Education" },
  { icon: Radio, name: "Telecommunication" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

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
          <p className="max-w-xl mx-auto text-lg mb-10 text-secondary-foreground">AI solutions, SaaS platforms, web & mobile apps, and workflow automations — engineered for growth across APAC and EMEA markets.</p>
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

        {/* Industry marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14 relative w-full"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-3 animate-marquee">
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-3 shrink-0">
                {industries.map((ind) => (
                  <div
                    key={`${dupeIdx}-${ind.name}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/40 backdrop-blur-sm shrink-0"
                  >
                    <ind.icon className="text-primary" size={14} />
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{ind.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;