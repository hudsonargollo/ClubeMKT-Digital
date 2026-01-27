import { motion } from "framer-motion";
import GridVisualization from "./GridVisualization";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      {/* Animated Grid Visualization */}
      <GridVisualization />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-6 pt-16">
        <div className="max-w-4xl">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="status-online mb-8"
          >
            {t.hero.status}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{t.hero.headline1}</span>
            <br />
            <span className="text-foreground">{t.hero.headline2}</span>
            <br />
            <span className="text-primary">{t.hero.headline3}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 max-w-xl font-sans text-lg text-muted-foreground md:text-xl"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-industrial-solid">
              {t.hero.cta1}
            </a>
            <a href="#services" className="btn-industrial">
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-8"
          >
            {[
              { value: "99.9%", label: t.hero.stats.uptime },
              { value: "<50ms", label: t.hero.stats.response },
              { value: "∞", label: t.hero.stats.scalability },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-mono text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
