import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  industries: string[];
}

const ServiceCard = ({ service, index, status, specsLabel }: { 
  service: ServiceData; 
  index: number;
  status: string;
  specsLabel: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`bento-card group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <span className="font-mono text-xs text-muted-foreground">{service.id}</span>
          <h3 className="mt-1 font-mono text-xl font-semibold md:text-2xl">{service.title}</h3>
          <p className="mt-1 font-mono text-sm text-primary">{service.tagline}</p>
        </div>
        <div className="status-online text-xs">
          {status}
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-muted-foreground">{service.description}</p>

      {/* Specs - Revealed on Hover */}
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {specsLabel}
        </span>
        <ul className="mt-3 space-y-2">
          {service.specs.map((spec, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
              className="flex items-center gap-2 font-mono text-sm text-secondary-foreground"
            >
              <span className="h-1 w-1 bg-primary" />
              {spec}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Industries */}
      <div className="flex flex-wrap gap-2">
        {service.industries.map((industry, i) => (
          <span key={i} className="tech-tag">
            {industry}
          </span>
        ))}
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 h-16 w-16 border-l border-t border-border opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services: ServiceData[] = [
    {
      id: t.services.service1.id,
      title: t.services.service1.title,
      tagline: t.services.service1.tagline,
      description: t.services.service1.description,
      specs: [...t.services.service1.specs],
      industries: [...t.services.service1.industries],
    },
    {
      id: t.services.service2.id,
      title: t.services.service2.title,
      tagline: t.services.service2.tagline,
      description: t.services.service2.description,
      specs: [...t.services.service2.specs],
      industries: [...t.services.service2.industries],
    },
    {
      id: t.services.service3.id,
      title: t.services.service3.title,
      tagline: t.services.service3.tagline,
      description: t.services.service3.description,
      specs: [...t.services.service3.specs],
      industries: [...t.services.service3.industries],
    },
  ];

  return (
    <section id="services" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-header mb-16"
        >
          <span>{t.services.sectionHeader}</span>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={i} 
              status={t.services.status}
              specsLabel={t.services.specsLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
