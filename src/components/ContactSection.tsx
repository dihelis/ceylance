import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Loader2, Check } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ShaderField from "./ShaderField";

// Labeled pill input with animated focus ring + label lift.
type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
};
const Field = ({ name, label, type = "text", required, value, onChange, textarea }: FieldProps) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const commonCls =
    "peer w-full bg-background/60 border text-foreground text-sm placeholder-transparent focus:outline-none transition-all px-5 pt-6 pb-3 backdrop-blur-sm";
  const borderCls = focused
    ? "border-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
    : "border-border hover:border-foreground/30";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          required={required}
          name={name}
          rows={5}
          placeholder={label}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${commonCls} ${borderCls} resize-none rounded-3xl`}
        />
      ) : (
        <input
          required={required}
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${commonCls} ${borderCls} rounded-full`}
        />
      )}
      <label
        className={`pointer-events-none absolute left-5 font-mono uppercase tracking-[0.18em] transition-all ${
          active
            ? "top-1.5 text-[9px] text-primary"
            : "top-1/2 -translate-y-1/2 text-[11px] text-foreground/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

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
      {/* Shader echo */}
      <div className="absolute inset-0 opacity-40">
        <ShaderField />
      </div>
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute inset-0 bg-plus-pattern opacity-[0.15] pointer-events-none" />
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
                <span className="text-foreground text-sm">+61 404 173 536</span>
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
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden border border-primary/40 bg-background/70 backdrop-blur-md p-10 md:p-14 min-h-[420px] flex flex-col justify-between"
                >
                  {/* Ripple */}
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 6, opacity: 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25"
                  />
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0, opacity: 0.4 }}
                    animate={{ scale: 8, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.15 }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
                  />

                  <p className="relative text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                    [ Signal received ]
                  </p>

                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                      className="w-16 h-16 mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                    >
                      <Check size={28} strokeWidth={3} />
                    </motion.div>
                    <h3 className="font-display text-4xl md:text-5xl leading-[0.98] tracking-[-0.035em] font-medium mb-3">
                      Message received.
                    </h3>
                    <p className="text-foreground/60 text-sm max-w-sm">
                      We'll be in touch within 24 hours from Adelaide. Meanwhile — grab a
                      coffee, we've got this.
                    </p>
                  </div>

                  <div className="relative flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 pt-6 border-t border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Delivered to hello@ceylance.com
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative space-y-4 p-8 md:p-10 bg-background/60 border border-border backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Transmission open
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="name"    label="Name"    required value={formData.name}    onChange={handleChange} />
                    <Field name="email"   label="Email"   type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <Field name="company" label="Company" value={formData.company} onChange={handleChange} />
                  <Field name="message" label="Tell us about your project" required textarea value={formData.message} onChange={handleChange} />

                  {error && <p className="text-sm text-destructive">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-between gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group disabled:opacity-60"
                  >
                    <span className="py-2">{loading ? "Transmitting…" : "Send message"}</span>
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                      {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowUpRight size={14} strokeWidth={2.5} />}
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
