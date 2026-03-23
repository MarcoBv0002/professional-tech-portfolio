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
  };
  aboutText: string;
  contactText: string;
  calendly: string;
};

export const profile = {
  name: "Arquitecto de Soluciones",
  roleEs: "Arquitecto de Soluciones Cloud",
  roleEn: "Cloud Solutions Architect",
  location: "Lima, Perú"
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      services: "Servicios",
      cases: "Casos anónimos",
      credentials: "Certificaciones y formación",
      about: "Sobre mí",
      contact: "Contacto"
    },
    hero: {
      kicker: "Portafolio comercial",
      title: "Diseño arquitecturas cloud listas para escalar y vender",
      subtitle:
        "Transformo retos de negocio en soluciones técnicas medibles: mejor performance, menor costo operativo y más velocidad de entrega.",
      cta: "Agendar reunión",
      secondaryCta: "Ver credenciales"
    },
    sections: {
      services: "Servicios",
      cases: "Casos de impacto (anónimos)",
      credentials: "Certificaciones y formación",
      about: "Sobre mí",
      contact: "Contacto"
    },
    labels: {
      completed: "Completado",
      pending: "Pendiente",
      from: "Desde",
      to: "Hasta",
      hours: "horas",
      verificationCode: "Código de verificación",
      confidentiality: "Confidencialidad",
      impact: "Impacto"
    },
    aboutText:
      "Arquitecto de soluciones con enfoque en modernización, diseño cloud y optimización de plataformas para objetivos comerciales. Trabajo con liderazgo técnico, diseño orientado a negocio y ejecución pragmática.",
    contactText:
      "Si quieres validar una arquitectura, planear una migración o acelerar tu roadmap cloud, conversemos.",
    calendly: "https://calendly.com/your-handle/30min"
  },
  en: {
    nav: {
      services: "Services",
      cases: "Anonymous case studies",
      credentials: "Certifications and education",
      about: "About",
      contact: "Contact"
    },
    hero: {
      kicker: "Commercial portfolio",
      title: "I design cloud architectures built to scale and deliver business value",
      subtitle:
        "I turn business constraints into measurable technical outcomes: better performance, lower operating cost, and faster delivery.",
      cta: "Book a call",
      secondaryCta: "View credentials"
    },
    sections: {
      services: "Services",
      cases: "Impact case studies (anonymous)",
      credentials: "Certifications and education",
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
      impact: "Impact"
    },
    aboutText:
      "Solutions architect focused on modernization, cloud design, and platform optimization to support commercial outcomes. I combine technical leadership with pragmatic execution.",
    contactText:
      "If you need to validate an architecture, define a migration plan, or speed up your cloud roadmap, let's talk.",
    calendly: "https://calendly.com/your-handle/30min"
  }
};

export const servicesByLocale: Record<Locale, ServiceOffering[]> = {
  es: [
    {
      title: "Assessment de arquitectura",
      summary:
        "Evaluación técnica y plan de mejora para disponibilidad, seguridad, costos y escalabilidad."
    },
    {
      title: "Diseño de soluciones cloud",
      summary:
        "Arquitectura end-to-end para nuevas iniciativas o modernización de sistemas existentes."
    },
    {
      title: "Estrategia de modernización",
      summary:
        "Roadmap por fases con foco en impacto de negocio, riesgo controlado y entrega incremental."
    }
  ],
  en: [
    {
      title: "Architecture assessment",
      summary:
        "Technical evaluation and action plan to improve availability, security, cost, and scalability."
    },
    {
      title: "Cloud solution design",
      summary:
        "End-to-end architecture for new initiatives and modernization of existing workloads."
    },
    {
      title: "Modernization strategy",
      summary:
        "Phased roadmap focused on business impact, risk control, and incremental delivery."
    }
  ]
};

export const casesByLocale: Record<Locale, CaseStudy[]> = {
  es: [
    {
      title: "Plataforma de integración empresarial",
      challenge:
        "Altos tiempos de entrega y complejidad operativa en integraciones entre sistemas críticos.",
      solution:
        "Arquitectura orientada a eventos con patrones de desacoplamiento y gobierno técnico por dominios.",
      stack: ["AWS", "API Gateway", "Serverless", "Observabilidad"],
      outcome:
        "Reducción de tiempo de entrega en 35% y mejora de confiabilidad en flujos críticos.",
      confidentiality_note:
        "Caso anonimizado por acuerdos de confidencialidad con cliente corporativo."
    },
    {
      title: "Optimización de costos cloud en entorno productivo",
      challenge:
        "Gasto cloud creciente sin trazabilidad de consumo por servicio y entorno.",
      solution:
        "Modelo FinOps con etiquetado estandarizado, derechosizing y políticas de ciclo de vida.",
      stack: ["AWS", "Cost Explorer", "IaC", "Dashboards"],
      outcome:
        "Ahorro operativo mensual de 22% sin degradar SLAs comprometidos.",
      confidentiality_note:
        "Métricas agregadas para proteger datos contractuales."
    }
  ],
  en: [
    {
      title: "Enterprise integration platform",
      challenge:
        "Slow delivery and high operational complexity across critical system integrations.",
      solution:
        "Event-driven architecture with decoupling patterns and domain-based technical governance.",
      stack: ["AWS", "API Gateway", "Serverless", "Observability"],
      outcome:
        "35% faster delivery cycle and improved reliability for critical flows.",
      confidentiality_note:
        "Anonymized case due to corporate confidentiality agreements."
    },
    {
      title: "Cloud cost optimization in production",
      challenge:
        "Growing cloud spend with limited visibility across services and environments.",
      solution:
        "FinOps model with standardized tagging, rightsizing, and lifecycle policies.",
      stack: ["AWS", "Cost Explorer", "IaC", "Dashboards"],
      outcome: "22% monthly operational savings without SLA degradation.",
      confidentiality_note:
        "Aggregated metrics to protect contractual information."
    }
  ]
};

export const credentials: Credential[] = [
  {
    title: "AWS Certification (Solutions Architecture track)",
    issuer: "Amazon Web Services",
    status: "completed",
    display_tier: "primary",
    verification_url: "https://www.credly.com"
  },
  {
    title: "Cursos PUCP (Campus Virtual)",
    issuer: "Pontificia Universidad Católica del Perú",
    status: "completed",
    display_tier: "primary"
  },
  {
    title: "Diplomado en Arquitectura de Software",
    issuer: "Por confirmar",
    status: "in_progress",
    display_tier: "primary"
  },
  {
    title: "Curso de Capacitación en AWS Academy Solutions Architect Associate",
    issuer:
      "FABRICUM - Centro de Vinculación de Ingeniería de la Pontificia Universidad Católica del Perú",
    start_date: "2025-12-17",
    end_date: "2026-01-16",
    hours: 24,
    status: "completed",
    verification_code: "6TEQG9GL",
    display_tier: "secondary"
  }
];

export const locales: Locale[] = ["es", "en"];
