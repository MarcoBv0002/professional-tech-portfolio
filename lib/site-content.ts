export type Locale = "es" | "en";

export type CredentialStatus = "completed" | "in_progress";
export type CredentialTier = "primary" | "secondary";

export type Credential = {
  title: string;
  issuer: string;
  start_date?: string;
  end_date?: string;
  hours?: number;
  status: CredentialStatus;
  verification_code?: string;
  verification_url?: string;
  display_tier: CredentialTier;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcome: string;
  confidentiality_note: string;
};

export type ServiceOffering = {
  title: string;
  summary: string;
};

export type TechItem = {
  name: string;
  logo: string;
  category: "backend" | "database" | "cloud" | "devops" | "frontend";
};

export type MarketInsight = {
  stat: string;
  headline: string;
  detail: string;
  sourceLabel: string;
  sourceUrl: string;
};

type Dictionary = {
  nav: {
    services: string;
    cases: string;
    credentials: string;
    about: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  sections: {
    services: string;
    opportunity: string;
    cases: string;
    credentials: string;
    stack: string;
    about: string;
    contact: string;
  };
  labels: {
    completed: string;
    pending: string;
    from: string;
    to: string;
    hours: string;
    verificationCode: string;
    confidentiality: string;
    impact: string;
    secondaryCredentials: string;
  };
  aboutText: string;
  contactText: string;
  calendly: string;
};

export const profile = {
  name: "Marco Antonio Brea",
  roleEs: "Arquitecto de Soluciones Cloud",
  roleEn: "Cloud Solutions Architect",
  location: "Lima, Peru",
  linkedin: "https://www.linkedin.com/in/marco-brea-16811b1b2/",
  github: "https://github.com/MarcoBv0002"
};

export const locales: Locale[] = ["es", "en"];

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      services: "Servicios",
      cases: "Casos anonimos",
      credentials: "Certificaciones",
      about: "Perfil",
      contact: "Contacto"
    },
    hero: {
      kicker: "Transformación Digital",
      title: "Diseñemos una solución a tus problemas tecnológicos",
      subtitle: "Automatiza procesos, reduce costos operativos y escala tu negocio con IA y cloud implementados de forma práctica, sin fricción y con resultados medibles a tu empresa. Accede a una asesoría profesional enfocada en identificar oportunidades de optimización y crecimiento tecnológico.",
      cta: "Agendar reunion",
      secondaryCta: "Conocer un poco más"
    },
    sections: {
      services: "Servicios ofrecidos",
      opportunity: "Por que actuar ahora",
      cases: "Casos de impacto (anonimos)",
      credentials: "Certificaciones y formacion",
      stack: "Stack y tecnologias",
      about: "Sobre mi",
      contact: "Contacto"
    },
    labels: {
      completed: "Completado",
      pending: "Pendiente",
      from: "Desde",
      to: "Hasta",
      hours: "horas",
      verificationCode: "Codigo de verificacion",
      confidentiality: "Confidencialidad",
      impact: "Impacto",
      secondaryCredentials: "Credenciales secundarias"
    },
    aboutText:
      "Ingeniero de sistemas y arquitecto de soluciones con foco en cloud, automatizacion y modernizacion de aplicaciones. Experiencia liderando migraciones, integraciones y arquitecturas para entornos on-premise, web, escritorio y serverless en sectores financiero, educacion y servicios.",
    contactText:
      "Conversemos sobre como llevar tu operacion hacia IA aplicada, cloud escalable y automatizacion de punta a punta.",
    calendly: "https://calendly.com/your-handle/30min"
  },
  en: {
    nav: {
      services: "Services",
      cases: "Anonymous cases",
      credentials: "Certifications",
      about: "Profile",
      contact: "Contact"
    },
    hero: {
      kicker: "Digital Transformation Services",
      title: "AI and Cloud services to accelerate your business",
      subtitle:
        "Automate workflows with AI, migrate critical workloads to the cloud, and modernize architecture with clear business outcomes.",
      cta: "Book a call",
      secondaryCta: "View services"
    },
    sections: {
      services: "Service offerings",
      opportunity: "Why act now",
      cases: "Impact case studies (anonymous)",
      credentials: "Certifications and education",
      stack: "Tech stack",
      about: "About",
      contact: "Contact"
    },
    labels: {
      completed: "Completed",
      pending: "Pending",
      from: "From",
      to: "To",
      hours: "hours",
      verificationCode: "Verification code",
      confidentiality: "Confidentiality",
      impact: "Impact",
      secondaryCredentials: "Secondary credentials"
    },
    aboutText:
      "Systems engineer and solutions architect focused on cloud, automation, and application modernization. Experience leading migrations, integrations, and architectures spanning on-premise, web, desktop, and serverless environments for financial, education, and service companies.",
    contactText:
      "Let's discuss how to move your operation toward applied AI, scalable cloud architecture, and end-to-end automation.",
    calendly: "https://calendly.com/your-handle/30min"
  }
};

export const servicesByLocale: Record<Locale, ServiceOffering[]> = {
  es: [
    {
      title: "Automatiza con IA",
      summary:
        "Diseno e implementacion de asistentes, flujos inteligentes y automatizaciones con IA para reducir tiempos operativos."
    },
    {
      title: "Migra hacia la nube",
      summary:
        "Migracion progresiva de aplicaciones on-premise a AWS con enfoque en continuidad, seguridad y performance."
    },
    {
      title: "Adopta IA en tu operacion",
      summary:
        "Estrategia de adopcion de IA para equipos y procesos con casos de uso priorizados por impacto."
    },
    {
      title: "Arquitectura cloud y serverless",
      summary:
        "Diseno de plataformas modernas con microservicios, Lambda y APIs para crecer sin friccion."
    }
  ],
  en: [
    {
      title: "Automate with AI",
      summary:
        "Design and implementation of AI assistants, smart workflows, and automations to reduce operational time."
    },
    {
      title: "Migrate to cloud",
      summary:
        "Phased migration from on-premise systems to AWS with continuity, security, and performance as core goals."
    },
    {
      title: "Adopt AI across operations",
      summary:
        "AI adoption strategy for teams and business processes with impact-driven use case prioritization."
    },
    {
      title: "Cloud and serverless architecture",
      summary:
        "Modern platform design with microservices, Lambda, and APIs to scale with lower operational friction."
    }
  ]
};

export const insightsByLocale: Record<Locale, MarketInsight[]> = {
  es: [
    {
      stat: "99.3%",
      headline: "Las MIPYME son el nucleo del mercado formal peruano",
      detail:
        "En Peru, las MIPYME representan el 99.3% de empresas formales (mas de 2.3 millones). La ventaja competitiva vendra de automatizar antes que el resto.",
      sourceLabel: "PRODUCE OGEIEE (Estadistica MIPYME 2024)",
      sourceUrl: "https://ogeiee.produce.gob.pe/index.php/shortcode/estadistica-oee/estadisticas-miPyme"
    },
    {
      stat: "40%",
      headline: "IA impactara una gran parte de los trabajos",
      detail:
        "El FMI estima que la IA afectara cerca del 40% del empleo global. Para empresas, esto exige redisenar procesos y capacitar equipos, no solo comprar herramientas.",
      sourceLabel: "IMF (enero 2024)",
      sourceUrl:
        "https://meetings.imf.org/en/IMF/Home/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity"
    },
    {
      stat: "86%",
      headline: "Los empleadores ya esperan transformacion por IA",
      detail:
        "El WEF reporta que 86% de empleadores espera que la IA transforme su negocio hacia 2030. Esperar suele costar mas que ejecutar una adopcion gradual hoy.",
      sourceLabel: "WEF Future of Jobs Report 2025",
      sourceUrl:
        "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/1-drivers-of-labour-market-transformation/"
    }
  ],
  en: [
    {
      stat: "99.3%",
      headline: "SMEs dominate Peru's formal business landscape",
      detail:
        "In Peru, SMEs represent 99.3% of formal companies (over 2.3 million firms). Competitive advantage will come from automating earlier.",
      sourceLabel: "PRODUCE OGEIEE (MIPYME 2024)",
      sourceUrl: "https://ogeiee.produce.gob.pe/index.php/shortcode/estadistica-oee/estadisticas-miPyme"
    },
    {
      stat: "40%",
      headline: "AI will affect a large share of jobs",
      detail:
        "IMF analysis estimates AI will impact about 40% of global employment. For companies, that means redesigning workflows and skills, not just buying tools.",
      sourceLabel: "IMF (Jan 2024)",
      sourceUrl:
        "https://meetings.imf.org/en/IMF/Home/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity"
    },
    {
      stat: "86%",
      headline: "Employers already expect AI-driven transformation",
      detail:
        "WEF reports 86% of employers expect AI to transform their business by 2030. Delaying usually costs more than phased adoption now.",
      sourceLabel: "WEF Future of Jobs Report 2025",
      sourceUrl:
        "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/1-drivers-of-labour-market-transformation/"
    }
  ]
};

export const casesByLocale: Record<Locale, CaseStudy[]> = {
  es: [
    {
      title: "Chatbot + Voicebot para entidad financiera",
      challenge:
        "Canales digitales con baja automatizacion y tiempos de atencion altos.",
      solution:
        "Arquitectura cloud con integraciones de voz y flujos conversacionales desplegados en AWS.",
      stack: ["AWS Connect", "Lambda", "API Gateway", "Node.js"],
      outcome:
        "Aceleracion de atencion y reduccion de friccion operativa en campanas de entrada y salida.",
      confidentiality_note:
        "Datos y nombres de cliente anonimizados por acuerdos de confidencialidad."
    },
    {
      title: "Migracion de VB6 a .NET",
      challenge:
        "Sistema legacy con riesgo operativo y baja velocidad para evolucion funcional.",
      solution:
        "Liderazgo tecnico de migracion hacia arquitectura modular en .NET con capas y APIs.",
      stack: [".NET", "C#", "SQL Server", "SOAP/REST"],
      outcome:
        "Modernizacion tecnologica con base mantenible para nuevas funcionalidades.",
      confidentiality_note:
        "Detalle tecnico limitado por restriccion contractual."
    }
  ],
  en: [
    {
      title: "Chatbot + Voicebot for financial services",
      challenge:
        "Digital channels lacked automation and had long response times.",
      solution:
        "Cloud architecture integrating voice and conversational flows on AWS.",
      stack: ["AWS Connect", "Lambda", "API Gateway", "Node.js"],
      outcome:
        "Faster customer interactions and reduced operational friction for inbound/outbound campaigns.",
      confidentiality_note:
        "Customer identity and raw data are anonymized due to confidentiality constraints."
    },
    {
      title: "VB6 to .NET modernization",
      challenge:
        "Legacy system with operational risk and low feature delivery speed.",
      solution:
        "Technical leadership to migrate into layered .NET architecture with API capabilities.",
      stack: [".NET", "C#", "SQL Server", "SOAP/REST"],
      outcome:
        "Modernized, maintainable foundation for future growth.",
      confidentiality_note:
        "Technical depth intentionally restricted by contract."
    }
  ]
};

export const credentials: Credential[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "completed",
    display_tier: "primary"
  },
  {
    title: "Formacion PUCP (Campus Virtual)",
    issuer: "Pontificia Universidad Catolica del Peru",
    status: "completed",
    display_tier: "primary"
  },
  {
    title: "Diplomado en Arquitectura de Software",
    issuer: "Pendiente de certificado",
    status: "in_progress",
    display_tier: "primary"
  },
  {
    title: "Curso de Capacitacion en AWS Academy Solutions Architect Associate",
    issuer:
      "FABRICUM - Centro de Vinculacion de Ingenieria de la Pontificia Universidad Catolica del Peru",
    start_date: "2025-12-17",
    end_date: "2026-01-16",
    hours: 24,
    status: "completed",
    verification_code: "6TEQG9GL",
    display_tier: "secondary"
  }
];

export const techStack: TechItem[] = [
  { name: "C#", logo: "dotnet", category: "backend" },
  { name: ".NET", logo: "dotnet", category: "backend" },
  { name: "Python", logo: "python", category: "backend" },
  { name: "TypeScript", logo: "typescript", category: "backend" },
  { name: "JavaScript", logo: "javascript", category: "backend" },
  { name: "Node.js", logo: "nodedotjs", category: "backend" },
  { name: "SQL Server", logo: "microsoftsqlserver", category: "database" },
  { name: "PostgreSQL", logo: "postgresql", category: "database" },
  { name: "MySQL", logo: "mysql", category: "database" },
  { name: "DynamoDB", logo: "amazondynamodb", category: "database" },
  { name: "AWS", logo: "amazonaws", category: "cloud" },
  { name: "AWS Lambda", logo: "awslambda", category: "cloud" },
  { name: "API Gateway", logo: "amazonapigateway", category: "cloud" },
  { name: "Amazon RDS", logo: "amazonrds", category: "cloud" },
  { name: "Amazon S3", logo: "amazons3", category: "cloud" },
  { name: "AWS Connect", logo: "amazonconnect", category: "cloud" },
  { name: "OpenShift", logo: "redhatopenshift", category: "devops" },
  { name: "Jenkins", logo: "jenkins", category: "devops" },
  { name: "Blazor", logo: "blazor", category: "frontend" }
];
