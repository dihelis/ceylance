const Footer = () => (
  <footer className="relative border-t border-border bg-background overflow-hidden">
    <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
            [ Ceylance® / AU · UK · UAE ]
          </p>
          <h3 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-[-0.045em] font-medium max-w-3xl">
            Building intelligent products <span className="text-foreground/40">from the inside out.</span>
          </h3>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          {["Services", "Process", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={l === "About" ? "/about" : `/#${l.toLowerCase()}`}
              className="hover:text-primary transition-colors text-foreground/80"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
        <p className="font-display text-lg tracking-[-0.04em] font-semibold">
          ceylance<span className="text-primary">®</span>
        </p>
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-foreground/50">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
