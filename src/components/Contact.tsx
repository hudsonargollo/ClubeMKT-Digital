import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { submitLead } from "@/lib/leadCapture";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toast.error(language === "pt" ? "Por favor insira um e-mail válido." : "Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitLead({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        company: formData.company,
        source: "classic_contact_form",
        channel: "clubemkt.digital/classic",
        language: language,
      });

      if (res.success) {
        setIsSubmitted(true);
        toast.success(
          language === "pt"
            ? "Solicitação transmitida com sucesso! Entraremos em contato em breve."
            : "Request transmitted successfully! Our architecture team will be in touch."
        );
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        toast.error(res.error || "Transmission failed. Please try again.");
      }
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-card py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-header mb-16"
        >
          <span>{t.contact.sectionHeader}</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 font-mono text-3xl font-bold leading-tight md:text-4xl">
              {t.contact.headline1}
              <br />
              <span className="text-primary">{t.contact.headline2}</span>
            </h2>

            <p className="mb-8 max-w-md text-muted-foreground">
              {t.contact.description}
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <span className="font-mono text-xs text-primary">@</span>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.contact.directLine}
                  </div>
                  <div className="font-mono text-sm">contact@clubemkt.digital</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <span className="font-mono text-xs text-primary">⌘</span>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.contact.responseTime}
                  </div>
                  <div className="font-mono text-sm">{t.contact.responseValue}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bento-card"
          >
            {/* Form Header */}
            <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
              <span className="h-2 w-2 bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.contact.form.header}
              </span>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full resize-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-industrial-solid w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>{language === "pt" ? "Transmitindo..." : "Transmitting..."}</span>
                  </>
                ) : isSubmitted ? (
                  <span>{language === "pt" ? "✓ Transmitido" : "✓ Transmitted"}</span>
                ) : (
                  <span>{t.contact.form.submit}</span>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
