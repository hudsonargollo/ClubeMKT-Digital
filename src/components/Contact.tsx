import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
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
          <span>Initialize Connection</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 font-mono text-3xl font-bold leading-tight md:text-4xl">
              Ready to Deploy?
              <br />
              <span className="text-primary">Start Your Build.</span>
            </h2>

            <p className="mb-8 max-w-md text-muted-foreground">
              Submit your project parameters. Our team will analyze requirements 
              and respond with a preliminary architecture assessment within 
              48 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <span className="font-mono text-xs text-primary">@</span>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Direct Line
                  </div>
                  <div className="font-mono text-sm">contact@clubemkt.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <span className="font-mono text-xs text-primary">⌘</span>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Response Time
                  </div>
                  <div className="font-mono text-sm">&lt; 48 hours</div>
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
                New Project Request
              </span>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Identifier
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name or company"
                  className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Communication Protocol
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@domain.com"
                  className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Project Parameters
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Describe your automation requirements..."
                  className="w-full resize-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-industrial-solid w-full">
                Transmit Request
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
