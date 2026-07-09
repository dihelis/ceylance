import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const capabilities = ["AI", "SaaS", "Mobile", "Web", "Automation"];

const HeroSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Adelaide",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Plus / dot pattern background */}
      <div className="absolute inset-0 bg-plus-pattern opacity-60" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, hsl(var(--background)) 75%)",
        }}
      />
      {/* Ambient orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-32 md:pt-40 pb-8">
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl"
        >
          <h1 className="font-display text-[13vw] md:text-[7.5vw] leading-[0.95] font-medium tracking-[-0.045em] text-foreground">
            AI-native product<br />
            studio for <span className="text-primary">SaaS</span>,<br />
            mobile, web &amp; AI.
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              We don't work for your team — we become part of it.
              Ceylance embeds with founders across AU, UK &amp; UAE to design, build,
              and ship intelligent products from the inside out.
            </p>

            <button
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              Book a strategy call
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Bottom corner meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs uppercase tracking-[0.15em] text-foreground/60"
        >
          <div className="flex flex-col gap-1">
            <span className="text-foreground/40">Studio</span>
            <span>Opinionated · AI-native · Operators</span>
          </div>
          <div className="hidden md:flex flex-col gap-1 items-center text-center">
            <span className="text-foreground/40">Global impact</span>
            <span>Adelaide, AU — {time}</span>
          </div>
          <div className="flex flex-col gap-1 md:items-end md:text-right">
            <span className="text-foreground/40">Capabilities</span>
            <div className="flex flex-wrap gap-x-3 md:justify-end">
              {capabilities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
