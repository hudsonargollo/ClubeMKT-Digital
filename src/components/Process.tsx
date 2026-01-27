import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    phase: "01",
    title: "Discovery",
    description: "System audit and requirement analysis. We map your current infrastructure, identify bottlenecks, and define automation targets.",
    output: "Requirements Document",
  },
  {
    phase: "02",
    title: "Blueprint",
    description: "Architecture design and workflow mapping. Technical specifications, integration points, and deployment strategy documented.",
    output: "Technical Blueprint",
  },
  {
    phase: "03",
    title: "Build",
    description: "Development and integration execution. Iterative builds with continuous testing against defined parameters.",
    output: "Functional System",
  },
  {
    phase: "04",
    title: "Deploy & Monitor",
    description: "Production deployment with real-time monitoring. Performance metrics, error tracking, and continuous optimization.",
    output: "Live Operations",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative bg-card py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay-dense opacity-30" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-header mb-16"
        >
          <span>Execution Protocol</span>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-border to-transparent md:left-1/2"
          />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 top-0 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center border border-primary bg-background">
                    <span className="font-mono text-xs text-primary">{step.phase}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bento-card">
                    <h3 className="mb-2 font-mono text-2xl font-semibold">{step.title}</h3>
                    <p className="mb-4 text-muted-foreground">{step.description}</p>
                    <div className="inline-flex items-center gap-2">
                      <span className="h-px w-4 bg-primary" />
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {step.output}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty Space for Alternating */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
