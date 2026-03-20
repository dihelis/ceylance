import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return <section id="contact" className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're launching a new product or modernising existing systems, 
              we'd love to hear about your project.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">hello@ceylance.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">+61 0404 173 536</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">6/89 Edward Street, Norwood SA 5067</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            {submitted ? <div className="h-full flex items-center justify-center rounded-xl bg-card border border-border p-12 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
                </div>
              </div> : <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl bg-card border border-border" style={{
            boxShadow: "var(--shadow-card)"
          }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input required type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                  <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                <textarea required rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
