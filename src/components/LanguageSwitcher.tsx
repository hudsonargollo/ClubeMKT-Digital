import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border bg-secondary/50 p-0.5">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-2 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
          language === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 bg-primary"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`relative px-2 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
          language === "pt" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "pt" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 bg-primary"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">PT</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
