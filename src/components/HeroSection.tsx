import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ShaderField from "./ShaderField";

const capabilities = ["AI", "SaaS", "Mobile", "Web", "Automation"];

const EASE = [0.22, 1, 0.36, 1] as const;

interface Market {
  adjective: string;
}

const DEFAULT_MARKET: Market = { adjective: "Australian" };

const detectMarket = async (): Promise<Market> => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const code = data.country_code as string;

    if (code === "AU") return { adjective: "Australian" };
    if (code === "GB" || code === "IE") return { adjective: "UK" };
    if (["AE", "SA", "QA", "BH", "KW", "OM"].includes(code)) return { adjective: "UAE" };
  } catch {
    // Silent fallback to default market
  }
  return DEFAULT_MARKET;
};

const HeroSection = () => {
  const [time, setTime] = useState("");
  const [market, setMarket] = useState<Market>(DEFAULT_MARKET);

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

  useEffect(() => {
    detectMarket().then(setMarket);
  }, []);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  // Split into lines, each an array of words. Words that should render in
  // the primary accent color are prefixed with "*".
  const HEADLINE: string[][] = [
    ["Your", "*software", "&", "*AI", "partner"],
    ["for", `*${market.adjective}`, "businesses"],
    ["and", "*founders", "with", "*ambition."],
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Live WebGL shader field */}
      <ShaderField />
      {/* Subtle grid overlay to keep design DNA */}
      <div className="absolute inset-0 bg-plus-pattern opacity-[0.18] mix-blend-overlay pointer-events-none" />
      {/* Bottom fade into page */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--background)) 90%)",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-32 md:pt-40 pb-8">
        {/* Kinetic headline */}
        <div className="max-w-6xl">
          <h1 className="font-display text-[13vw] md:text-[7.5vw] leading-[0.95] font-medium tracking-[-0.045em] text-foreground">
            {HEADLINE.map((line, li) => {
              const base = HEADLINE.slice(0, li).reduce((n, l) => n + l.length, 0);
              return (
                <span
                  key={li}
                  className="block overflow-hidden pb-[0.08em]"
                  style={{ perspective: 800 }}
                >
                  {line.map((word, wi) => {
                    const isAccent = word.startsWith("*");
                    const text = isAccent ? word.slice(1) : word;
                    return (
                      <motion.span
                        key={wi}
                        initial={{ y: "110%", opacity: 0, rotateX: -35, skewY: 6 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0, skewY: 0 }}
                        transition={{
                          duration: 0.9,
                          ease: EASE,
                          delay: 0.08 + (base + wi) * 0.06,
                        }}
                        className={`inline-block mr-[0.22em] will-change-transform ${
                          isAccent ? "text-primary italic" : ""
                        }`}
                        style={{ transformOrigin: "0% 100%" }}
                      >
                        {text}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
            className="mt-10 max-w-xl"
          >
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              We help Australian businesses automate operations and help
              non-technical founders turn ideas into production-ready software
              — without the jargon, bloated teams, or year-long timelines.
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
          </motion.div>
        </div>

        {/* Bottom corner meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
