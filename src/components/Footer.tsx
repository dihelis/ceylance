import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ---------- Live Adelaide clock ---------- */
const useAdelaideNow = () => {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Adelaide",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setNow(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

/* ---------- Signal waveform ---------- */
const SignalWave = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const { width, height } = c.getBoundingClientRect();
      c.width = width * dpr;
      c.height = height * dpr;
    };
    resize();
    window.addEventListener("resize", resize);
    let t = 0;
    const draw = () => {
      t += 0.012;
      const w = c.width;
      const h = c.height;
      ctx.clearRect(0, 0, w, h);
      // primary line
      ctx.lineWidth = 1 * dpr;
      ctx.strokeStyle = "hsla(174, 72%, 56%, 0.55)";
      ctx.beginPath();
      const step = 6 * dpr;
      for (let x = 0; x <= w; x += step) {
        const nx = x / w;
        const y =
          h / 2 +
          Math.sin(nx * 12 + t * 2) * (h * 0.22) +
          Math.sin(nx * 4 - t * 1.4) * (h * 0.12);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      // ghost line
      ctx.strokeStyle = "hsla(174, 72%, 56%, 0.18)";
      ctx.beginPath();
      for (let x = 0; x <= w; x += step) {
        const nx = x / w;
        const y =
          h / 2 +
          Math.sin(nx * 8 - t * 1.7) * (h * 0.32);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="w-full h-full block" />;
};

/* ---------- Marquee ticker ---------- */
const TICKER = [
  "OPEN FOR Q1 2026",
  "AI · SAAS · WEB · MOBILE",
  "EMBEDDED PRODUCT TEAMS",
  "ADELAIDE ↔ LONDON ↔ DUBAI",
  "SHIPPING WEEKLY",
  "NO JARGON. NO BLOAT.",
];
const Ticker = () => {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <div className="flex gap-10 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {items.map((s, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-[-0.03em] font-medium text-foreground/70"
          >
            {s}
            <span className="text-primary ml-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Magnetic transmit CTA ---------- */
const TransmitCTA = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15 });
  const sy = useSpring(y, { stiffness: 180, damping: 15 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      ref={ref}
      href="mailto:hello@ceylance.com"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.25em]"
    >
      <span className="w-2 h-2 bg-primary-foreground animate-pulse" />
      Transmit a brief
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
    </motion.a>
  );
};

/* ---------- Footer ---------- */
const Footer = () => {
  const time = useAdelaideNow();
  const year = new Date().getFullYear();
  const status = useMemo(
    () => ["STUDIO ONLINE", "TAKING BRIEFS", "SHIPPING"][Math.floor(Date.now() / 3000) % 3],
    [time]
  );

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />

      {/* Broadcast console */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-12 gap-px bg-border">
          {/* Frequency / status */}
          <div className="col-span-12 md:col-span-5 bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
              [ CH.01 / BROADCAST ]
            </p>
            <h3 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-[-0.045em] font-medium">
              Studio<br />signal<br /><span className="text-foreground/40">on air.</span>
            </h3>
          </div>

          {/* Waveform */}
          <div className="col-span-12 md:col-span-7 bg-background relative min-h-[220px]">
            <SignalWave />
            <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
                <span>SIG · {status}</span>
                <span className="text-primary">● LIVE</span>
              </div>
              <div className="flex justify-between items-end text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
                <span>ADL {time || "--:--:--"}</span>
                <span>34.9285° S · 138.6007° E</span>
              </div>
            </div>
          </div>

          {/* Contact block */}
          <div className="col-span-12 md:col-span-5 bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-3">
              [ Direct line ]
            </p>
            <a
              href="mailto:hello@ceylance.com"
              className="font-display text-2xl md:text-3xl tracking-[-0.03em] hover:text-primary transition-colors"
            >
              hello@ceylance.com
            </a>
            <div className="mt-6">
              <TransmitCTA />
            </div>
          </div>

          {/* Nav cluster */}
          <div className="col-span-6 md:col-span-4 bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-4">
              [ Navigate ]
            </p>
            <ul className="space-y-2">
              {[
                { l: "Services", h: "/#services" },
                { l: "Process", h: "/#process" },
                { l: "About", h: "/about" },
                { l: "Contact", h: "/#contact" },
              ].map((n) => (
                <li key={n.l}>
                  <a
                    href={n.h}
                    className="group inline-flex items-center gap-2 font-display text-xl tracking-[-0.02em] text-foreground/80 hover:text-primary transition-colors"
                  >
                    <span className="w-4 h-px bg-foreground/30 group-hover:w-8 group-hover:bg-primary transition-all" />
                    {n.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates */}
          <div className="col-span-6 md:col-span-3 bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-4">
              [ Stations ]
            </p>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <span className="text-primary">AU</span> · Adelaide
              </li>
              <li>
                <span className="text-primary">UK</span> · London
              </li>
              <li>
                <span className="text-primary">AE</span> · Dubai
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <Ticker />

      {/* Colophon */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
          © {year} Ceylance® — Built in Adelaide, deployed worldwide.
        </p>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
          v2.6 · Signal stable
        </p>
      </div>
    </footer>
  );
};

export default Footer;
