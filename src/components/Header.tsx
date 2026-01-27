import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10">
            <span className="font-mono text-sm font-bold text-primary">C</span>
          </div>
          <span className="font-mono text-sm font-semibold tracking-wider">CLUBEMKT</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#process" className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#about" className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-industrial text-xs">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Initialize
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
