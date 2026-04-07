import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const sectionLinks = ["Services", "Process", "Contact"];
const pageLinks = [{ label: "About Us", href: "/about" }];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Ceylance<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {link}
            </button>
          ))}
          {pageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {sectionLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {link}
                </button>
              ))}
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-left font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
