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
      kicker: "Portfolio Comercial | Architect Mode",
      title: "Arquitectura cloud con impacto real en negocio",
      subtitle:
        "Arquitecto de soluciones con experiencia en diseno, desarrollo e implementacion de software cloud, escritorio y web; incluyendo servicios on-premise y serverless.",
      cta: "Agendar reunion",
      secondaryCta: "Ver certificaciones"
    },
    sections: {
      services: "Servicios",
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
      "Si quieres acelerar una modernizacion cloud, definir una arquitectura escalable o optimizar costos en AWS, conversemos.",
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
      kicker: "Commercial Portfolio | Architect Mode",
      title: "Cloud architecture with measurable business impact",
      subtitle:
        "Solutions architect with proven experience designing, building, and implementing cloud, desktop, and web software across both on-premise and serverless environments.",
      cta: "Book a call",
      secondaryCta: "View certifications"
    },
    sections: {
      services: "Services",
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
      "If you need to accelerate cloud modernization, define scalable architecture, or optimize AWS costs, let's talk.",
    calendly: "https://calendly.com/your-handle/30min"
  }
};

export const servicesByLocale: Record<Locale, ServiceOffering[]> = {
  es: [
    {
      title: "Cloud Architecture Assessment",
      summary:
        "Evaluacion de arquitectura actual con roadmap por fases para disponibilidad, seguridad y costo."
    },
    {
      title: "Diseno de soluciones AWS",
      summary:
        "Arquitecturas serverless y microservicios para productos nuevos o modernizacion de sistemas legacy."
    },
    {
      title: "Backend enterprise",
      summary:
        "Diseno e implementacion de APIs, integraciones y patrones de escalabilidad para cargas criticas."
    }
  ],
  en: [
    {
      title: "Cloud Architecture Assessment",
      summary:
        "Current-state architecture review with a phased roadmap for availability, security, and cost."
    },
    {
      title: "AWS Solution Design",
      summary:
        "Serverless and microservices architecture for greenfield products and legacy modernization."
    },
    {
      title: "Enterprise Backend Engineering",
      summary:
        "API, integration, and scalability patterns for critical workloads."
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
