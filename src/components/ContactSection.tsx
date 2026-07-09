import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const id = crypto.randomUUID();
      const { error: fnError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "hello@ceylance.com",
          idempotencyKey: `contact-notify-${id}`,
          templateData: formData,
        },
      });
      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-plus-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
              [ Let's talk ]
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.045em] font-medium mb-8">
              Start with a <br />
              <span className="text-foreground/40">conversation.</span>
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed max-w-md">
              Whether you're launching a new product or modernising existing systems — tell us the shape of it and we'll respond within 24 hours.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">hello@ceylance.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">+61 0404 173 536</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">Norwood SA 5067</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center rounded-3xl bg-muted/50 border border-border p-12 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] mb-2">Message sent</h3>
                  <p className="text-foreground/60 text-sm">We'll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 md:p-10 rounded-3xl bg-muted/50 border border-border backdrop-blur-sm"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-3xl bg-background border border-border text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group disabled:opacity-60"
                >
                  <span className="py-2">{loading ? "Sending…" : "Send message"}</span>
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowUpRight size={14} strokeWidth={2.5} />}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
