export type Language = "en" | "pt";

export interface Translations {
  nav: {
    services: string;
    process: string;
    about: string;
    initialize: string;
  };
  hero: {
    status: string;
    headline1: string;
    headline2: string;
    headline3: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    scroll: string;
    stats: {
      uptime: string;
      response: string;
      scalability: string;
    };
  };
  services: {
    sectionHeader: string;
    service1: ServiceTranslation;
    service2: ServiceTranslation;
    service3: ServiceTranslation;
    status: string;
    specsLabel: string;
  };
  process: {
    sectionHeader: string;
    steps: ProcessStep[];
  };
  about: {
    sectionHeader: string;
    headline1: string;
    headline2: string;
    paragraph1: string;
    paragraph2: string;
    stats: {
      architecture: string;
      architectureValue: string;
      deployment: string;
      deploymentValue: string;
      monitoring: string;
      monitoringValue: string;
      support: string;
      supportValue: string;
    };
    terminal: {
      title: string;
      lines: TerminalLine[];
    };
  };
  contact: {
    sectionHeader: string;
    headline1: string;
    headline2: string;
    description: string;
    directLine: string;
    responseTime: string;
    responseValue: string;
    form: {
      header: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    status: string;
    rights: string;
    tagline: string;
  };
}

interface ServiceTranslation {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  industries: string[];
}

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  output: string;
}

interface TerminalLine {
  time: string;
  msg: string;
  type: "info" | "success" | "pending";
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      initialize: "Initialize",
    },
    hero: {
      status: "System Online",
      headline1: "Automation",
      headline2: "Architecture",
      headline3: "Deployed.",
      subheadline: "We replace manual, repetitive business processes with intelligent workflows. Precision-engineered automation for operations that demand reliability.",
      cta1: "Request Blueprint",
      cta2: "View Systems",
      scroll: "Scroll",
      stats: {
        uptime: "Uptime SLA",
        response: "Avg Response",
        scalability: "Scalability",
      },
    },
    services: {
      sectionHeader: "Core Systems",
      service1: {
        id: "01",
        title: "AI Agents & Chatbots",
        tagline: "Revenue-Generating Intelligence",
        description: "Not generic support bots. Purpose-built agents that schedule appointments, qualify leads, and manage orders—transforming conversations into conversions.",
        specs: [
          "Lead qualification protocols",
          "Appointment scheduling",
          "Order management systems",
          "Multi-channel deployment",
        ],
        industries: ["Clinics", "Delivery", "Service Providers"],
      },
      service2: {
        id: "02",
        title: "Workflow Orchestration",
        tagline: "Autopilot Operations",
        description: "Connect disparate applications—CRMs, payment gateways, spreadsheets—into unified workflows that run without intervention.",
        specs: [
          "Event-driven triggers",
          "Conditional logic chains",
          "Error handling protocols",
          "Real-time monitoring",
        ],
        industries: ["E-commerce", "SaaS", "Finance"],
      },
      service3: {
        id: "03",
        title: "Custom API Integration",
        tagline: "Bridge Architecture",
        description: "Building precise bridges between systems that don't natively communicate. Data flows where it needs to, when it needs to.",
        specs: [
          "REST/GraphQL adapters",
          "Webhook orchestration",
          "Data transformation layers",
          "Authentication handling",
        ],
        industries: ["Enterprise", "Startups", "Agencies"],
      },
      status: "Operational",
      specsLabel: "Technical Specs",
    },
    process: {
      sectionHeader: "Execution Protocol",
      steps: [
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
      ],
    },
    about: {
      sectionHeader: "System Overview",
      headline1: "Precision Engineering",
      headline2: "For Digital Operations",
      paragraph1: "CLUBEMKT operates as an automation architect. We don't sell software—we engineer systems. Each deployment is custom-built to replace inefficient manual processes with reliable, scalable workflows.",
      paragraph2: "Our methodology prioritizes stability over novelty. We implement proven patterns, test rigorously, and monitor continuously. The result: operations that run without intervention.",
      stats: {
        architecture: "Architecture",
        architectureValue: "Custom",
        deployment: "Deployment",
        deploymentValue: "Managed",
        monitoring: "Monitoring",
        monitoringValue: "24/7",
        support: "Support",
        supportValue: "Direct",
      },
      terminal: {
        title: "system.log",
        lines: [
          { time: "00:00:01", msg: "Initializing CLUBEMKT core...", type: "info" },
          { time: "00:00:02", msg: "Loading automation modules", type: "info" },
          { time: "00:00:03", msg: "Connecting integration layer", type: "info" },
          { time: "00:00:04", msg: "All systems operational", type: "success" },
          { time: "00:00:05", msg: "Ready to accept connections", type: "success" },
          { time: "00:00:06", msg: "Waiting for initialization...", type: "pending" },
        ],
      },
    },
    contact: {
      sectionHeader: "Initialize Connection",
      headline1: "Ready to Deploy?",
      headline2: "Start Your Build.",
      description: "Submit your project parameters. Our team will analyze requirements and respond with a preliminary architecture assessment within 48 hours.",
      directLine: "Direct Line",
      responseTime: "Response Time",
      responseValue: "< 48 hours",
      form: {
        header: "New Project Request",
        nameLabel: "Identifier",
        namePlaceholder: "Your name or company",
        emailLabel: "Communication Protocol",
        emailPlaceholder: "email@domain.com",
        messageLabel: "Project Parameters",
        messagePlaceholder: "Describe your automation requirements...",
        submit: "Transmit Request",
      },
    },
    footer: {
      status: "All Systems Operational",
      rights: "All rights reserved.",
      tagline: "Automation Architecture · Precision Engineering · Intelligent Systems",
    },
  },
  pt: {
    nav: {
      services: "Serviços",
      process: "Processo",
      about: "Sobre",
      initialize: "Iniciar",
    },
    hero: {
      status: "Sistema Online",
      headline1: "Arquitetura",
      headline2: "de Automação",
      headline3: "Implantada.",
      subheadline: "Substituímos processos manuais e repetitivos por workflows inteligentes. Automação de precisão para operações que exigem confiabilidade.",
      cta1: "Solicitar Blueprint",
      cta2: "Ver Sistemas",
      scroll: "Rolar",
      stats: {
        uptime: "SLA de Uptime",
        response: "Resposta Média",
        scalability: "Escalabilidade",
      },
    },
    services: {
      sectionHeader: "Sistemas Principais",
      service1: {
        id: "01",
        title: "Agentes de IA & Chatbots",
        tagline: "Inteligência Geradora de Receita",
        description: "Não são bots de suporte genéricos. Agentes desenvolvidos para agendar consultas, qualificar leads e gerenciar pedidos—transformando conversas em conversões.",
        specs: [
          "Protocolos de qualificação de leads",
          "Agendamento de consultas",
          "Sistemas de gestão de pedidos",
          "Deploy multicanal",
        ],
        industries: ["Clínicas", "Delivery", "Prestadores de Serviço"],
      },
      service2: {
        id: "02",
        title: "Orquestração de Workflows",
        tagline: "Operações no Piloto Automático",
        description: "Conecte aplicações dispersas—CRMs, gateways de pagamento, planilhas—em workflows unificados que rodam sem intervenção.",
        specs: [
          "Gatilhos orientados a eventos",
          "Cadeias de lógica condicional",
          "Protocolos de tratamento de erros",
          "Monitoramento em tempo real",
        ],
        industries: ["E-commerce", "SaaS", "Finanças"],
      },
      service3: {
        id: "03",
        title: "Integração de APIs Customizada",
        tagline: "Arquitetura de Pontes",
        description: "Construindo pontes precisas entre sistemas que não se comunicam nativamente. Os dados fluem onde e quando precisam.",
        specs: [
          "Adaptadores REST/GraphQL",
          "Orquestração de webhooks",
          "Camadas de transformação de dados",
          "Gestão de autenticação",
        ],
        industries: ["Enterprise", "Startups", "Agências"],
      },
      status: "Operacional",
      specsLabel: "Especificações Técnicas",
    },
    process: {
      sectionHeader: "Protocolo de Execução",
      steps: [
        {
          phase: "01",
          title: "Descoberta",
          description: "Auditoria de sistemas e análise de requisitos. Mapeamos sua infraestrutura atual, identificamos gargalos e definimos alvos de automação.",
          output: "Documento de Requisitos",
        },
        {
          phase: "02",
          title: "Blueprint",
          description: "Design de arquitetura e mapeamento de workflows. Especificações técnicas, pontos de integração e estratégia de deploy documentados.",
          output: "Blueprint Técnico",
        },
        {
          phase: "03",
          title: "Construção",
          description: "Desenvolvimento e execução de integrações. Builds iterativos com testes contínuos contra parâmetros definidos.",
          output: "Sistema Funcional",
        },
        {
          phase: "04",
          title: "Deploy & Monitoramento",
          description: "Deploy em produção com monitoramento em tempo real. Métricas de performance, rastreamento de erros e otimização contínua.",
          output: "Operações Live",
        },
      ],
    },
    about: {
      sectionHeader: "Visão do Sistema",
      headline1: "Engenharia de Precisão",
      headline2: "Para Operações Digitais",
      paragraph1: "A CLUBEMKT opera como arquiteta de automação. Não vendemos software—engenheiramos sistemas. Cada deploy é construído sob medida para substituir processos manuais ineficientes por workflows confiáveis e escaláveis.",
      paragraph2: "Nossa metodologia prioriza estabilidade sobre novidade. Implementamos padrões comprovados, testamos rigorosamente e monitoramos continuamente. O resultado: operações que rodam sem intervenção.",
      stats: {
        architecture: "Arquitetura",
        architectureValue: "Custom",
        deployment: "Deploy",
        deploymentValue: "Gerenciado",
        monitoring: "Monitoramento",
        monitoringValue: "24/7",
        support: "Suporte",
        supportValue: "Direto",
      },
      terminal: {
        title: "sistema.log",
        lines: [
          { time: "00:00:01", msg: "Inicializando núcleo CLUBEMKT...", type: "info" },
          { time: "00:00:02", msg: "Carregando módulos de automação", type: "info" },
          { time: "00:00:03", msg: "Conectando camada de integração", type: "info" },
          { time: "00:00:04", msg: "Todos os sistemas operacionais", type: "success" },
          { time: "00:00:05", msg: "Pronto para aceitar conexões", type: "success" },
          { time: "00:00:06", msg: "Aguardando inicialização...", type: "pending" },
        ],
      },
    },
    contact: {
      sectionHeader: "Iniciar Conexão",
      headline1: "Pronto para Implantar?",
      headline2: "Comece Seu Build.",
      description: "Envie os parâmetros do seu projeto. Nossa equipe analisará os requisitos e responderá com uma avaliação preliminar de arquitetura em até 48 horas.",
      directLine: "Linha Direta",
      responseTime: "Tempo de Resposta",
      responseValue: "< 48 horas",
      form: {
        header: "Nova Solicitação de Projeto",
        nameLabel: "Identificador",
        namePlaceholder: "Seu nome ou empresa",
        emailLabel: "Protocolo de Comunicação",
        emailPlaceholder: "email@dominio.com",
        messageLabel: "Parâmetros do Projeto",
        messagePlaceholder: "Descreva seus requisitos de automação...",
        submit: "Transmitir Solicitação",
      },
    },
    footer: {
      status: "Todos os Sistemas Operacionais",
      rights: "Todos os direitos reservados.",
      tagline: "Arquitetura de Automação · Engenharia de Precisão · Sistemas Inteligentes",
    },
  },
};
