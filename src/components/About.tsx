import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stats.architecture, value: t.about.stats.architectureValue },
    { label: t.about.stats.deployment, value: t.about.stats.deploymentValue },
    { label: t.about.stats.monitoring, value: t.about.stats.monitoringValue },
    { label: t.about.stats.support, value: t.about.stats.supportValue },
  ];

  return (
    <section id="about" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-header mb-16"
        >
          <span>{t.about.sectionHeader}</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 font-mono text-3xl font-bold leading-tight md:text-4xl">
              {t.about.headline1}
              <br />
              <span className="text-primary">{t.about.headline2}</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-1 font-mono text-lg text-primary">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bento-card font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-4">
              <div className="h-3 w-3 rounded-full bg-destructive/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-primary/50" />
              <span className="ml-2 text-xs text-muted-foreground">{t.about.terminal.title}</span>
            </div>

            {/* Log Lines */}
            <div className="space-y-2 text-xs">
              {t.about.terminal.lines.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <span className="text-muted-foreground">[{log.time}]</span>
                  <span
                    className={
                      log.type === "success"
                        ? "text-primary"
                        : log.type === "pending"
                        ? "cursor-blink text-muted-foreground"
                        : "text-foreground"
                    }
                  >
                    {log.msg}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
