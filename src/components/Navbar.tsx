import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logoUrl from "@/assets/ceylance-logo.png";

const sectionLinks = ["Services", "Process", "Contact"];
const pageLinks = [{ label: "About", href: "/about" }];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + id.toLowerCase());
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="px-6 md:px-10 py-6 flex items-start justify-between">
        {/* Left — stacked links */}
        <div className="hidden md:flex flex-col gap-1 text-sm font-medium text-foreground/90 pointer-events-auto">
          {sectionLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="w-fit text-left hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          {pageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center — wordmark logo */}
        <a
          href="/"
          aria-label="Ceylance home"
          className="pointer-events-auto flex items-center"
        >
          <img
            src={logoUrl}
            alt="Ceylance logo"
            className="h-6 md:h-7 w-auto"
          />
        </a>

        {/* Right — CTA */}
        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:inline-flex pointer-events-auto items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
        >
          Let's work together
          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden pointer-events-auto text-foreground p-2 rounded-full bg-card border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pointer-events-auto mx-6 rounded-3xl bg-card border border-border overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {sectionLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-left font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollTo("Contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium"
              >
                Let's work together <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
