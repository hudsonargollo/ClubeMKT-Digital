import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10">
              <span className="font-mono text-sm font-bold text-primary">C</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wider">CLUBEMKT</span>
          </div>

          {/* Status */}
          <div className="status-online text-xs">
            All Systems Operational
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} CLUBEMKT. All rights reserved.
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-border pt-8 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Automation Architecture · Precision Engineering · Intelligent Systems
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
