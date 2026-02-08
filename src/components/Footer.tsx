const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold">
        Ceylance<span className="text-primary">.</span>
      </p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ceylance. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Services", "About", "Contact"].map((l) => (
          <button
            key={l}
            onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
