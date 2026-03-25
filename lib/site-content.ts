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
  icon: string;
  title: string;
  lead: string;
  summary: string;
  bullets: string[];
  outcome: string;
  note?: string;
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

export type SprintOffer = {
  title: string;
  intro: string;
  definition: string;
  includesTitle: string;
  audienceTitle: string;
  whyTitle: string;
  outcomesTitle: string;
  examples: string[];
  includes: string[];
  audience: string[];
  whyNow: string;
  outcomes: string[];
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
    sprint: string;
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
      sprint: "Digitaliza tu negocio en 30 dias",
      opportunity: "Por que actuar ahora",
      cases: "Casos de impacto (anonimos)",
      credentials: "Certificaciones y formacion",
      stack: "Stack y tecnologias",
      about: "SOBRE MI",
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
      "Soy arquitecto de soluciones especializado en cloud, automatizacion e integracion de sistemas, con mas de 7 anios de experiencia ayudando a empresas a mejorar su operacion mediante tecnologia.\n\nHe trabajado en proyectos de alto impacto en sectores como el financiero y servicios, liderando implementaciones que van desde automatizacion con IA hasta migraciones hacia la nube y modernizacion de sistemas legacy.\n\nMi enfoque esta en entender el negocio antes que la tecnologia, identificar oportunidades de mejora y diseniar soluciones que realmente generen eficiencia, control y crecimiento.\n\nTrabajo con una premisa clara: la tecnologia debe simplificar la operacion, no complicarla.",
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
      kicker: "Digital Transformation",
      title: "Let's design a solution for your technology challenges",
      subtitle:
        "Automate processes, reduce operating costs, and scale your business with AI and cloud implemented in a practical, frictionless way with measurable outcomes. Get professional advisory focused on identifying optimization opportunities and technology growth.",
      cta: "Book a call",
      secondaryCta: "Learn more"
    },
    sections: {
      services: "Service offerings",
      sprint: "Digitize your business in 30 days",
      opportunity: "Why act now",
      cases: "Impact case studies (anonymous)",
      credentials: "Certifications and education",
      stack: "Tech stack",
      about: "ABOUT ME",
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
      "I am a solutions architect specialized in cloud, automation, and systems integration, with more than 7 years of experience helping companies improve operations through technology.\n\nI have worked on high-impact projects in sectors such as financial services and business services, leading implementations ranging from AI automation to cloud migrations and legacy modernization.\n\nMy approach is to understand the business before the technology, identify improvement opportunities, and design solutions that truly deliver efficiency, control, and growth.\n\nI work with one clear premise: technology must simplify operations, not complicate them.",
    contactText:
      "Let's discuss how to move your operation toward applied AI, scalable cloud architecture, and end-to-end automation.",
    calendly: "https://calendly.com/your-handle/30min"
  }
};

export const servicesByLocale: Record<Locale, ServiceOffering[]> = {
  es: [
    {
      icon: "openai",
      title: "Automatiza con IA",
      lead: "Aplica inteligencia artificial en tu negocio sin complicarte",
      summary:
        "En 2026 ya no se habla solo de usar IA, sino de tener agentes que trabajan por ti. Hoy eso ya es accesible tambien para PYMES.",
      bullets: [
        "Asistente que responde clientes 24/7 por WhatsApp o web.",
        "Automatizacion de cotizaciones o respuestas frecuentes.",
        "Clasificacion automatica de clientes o leads.",
        "Generacion de reportes sin intervencion manual.",
        "Alertas inteligentes cuando ocurre algo importante en tu operacion."
      ],
      outcome:
        "Menos carga operativa, mas velocidad y mejor atencion al cliente.",
      note:
        "Inversion tipica PYME: soluciones concretas entre $500 y $1500 con impacto inmediato."
    },
    {
      icon: "amazonaws",
      title: "Migra hacia la nube",
      lead: "Pasa de procesos desordenados a sistemas que si controlan tu negocio",
      summary:
        "Muchas empresas en Peru siguen operando con Excel, procesos manuales o sistemas que ya no escalan. El problema no es Excel, es depender de el para todo.",
      bullets: [
        "Pasar de archivos dispersos a un sistema ordenado.",
        "Centralizar ventas, clientes y operaciones.",
        "Acceder al negocio desde cualquier lugar.",
        "Tener sistemas disponibles 24/7 sin servidores costosos.",
        "Reducir errores humanos y perdida de informacion."
      ],
      outcome:
        "Mas orden, mas control y menos dependencia de procesos manuales."
    },
    {
      icon: "vercel",
      title: "Obten aplicaciones a la medida de tu negocio",
      lead: "Haz que la tecnologia se adapte a tu empresa, no al reves",
      summary:
        "Tu negocio es unico, pero probablemente estas usando herramientas genericas. Ahi es donde se pierde eficiencia.",
      bullets: [
        "Landing pages que convierten visitas en clientes.",
        "Sistemas de gestion de ventas, clientes o inventario.",
        "Paneles con indicadores claros para tomar decisiones.",
        "Plataformas internas para organizar equipos y procesos."
      ],
      outcome:
        "Mas velocidad, mejor organizacion y diferenciacion frente a tu competencia."
    },
    {
      icon: "googlegemini",
      title: "Asesoria en transformacion digital para PYMES",
      lead: "Toma decisiones correctas antes de invertir de mas",
      summary:
        "La inteligencia artificial no es una moda. Es un cambio que va a redefinir como operan los negocios hacia el 2030.",
      bullets: [
        "Que procesos deberias automatizar primero.",
        "Donde realmente vale la pena usar IA.",
        "Que herramientas necesitas y cuales no.",
        "Como invertir sin desperdiciar dinero."
      ],
      outcome:
        "Claridad, menor riesgo y una hoja de ruta realista para crecer.",
      note:
        "La diferencia de los proximos anios sera clara: empresas que se adaptan vs empresas que se quedan atras."
    }
  ],
  en: [
    {
      icon: "openai",
      title: "Apply AI in your business",
      lead: "Bring AI into operations without unnecessary complexity",
      summary:
        "In 2026 the conversation is no longer only about using AI, but about having agents that work for your business. This is already accessible for SMEs.",
      bullets: [
        "An assistant that answers customers 24/7 on WhatsApp or the web.",
        "Automation of quotations or frequent responses.",
        "Automatic classification of customers or leads.",
        "Report generation without manual intervention.",
        "Smart alerts when something important happens in your operation."
      ],
      outcome:
        "Less operational load, more speed, and better customer service.",
      note:
        "Typical SME investment: concrete solutions between $500 and $1500 with immediate impact."
    },
    {
      icon: "amazonaws",
      title: "Migrate your solutions to modern technologies",
      lead: "Move from operational disorder to systems that truly control your business",
      summary:
        "Many companies in Peru still operate with Excel, manual workflows, or systems that no longer scale. The problem is not Excel itself, but depending on it for everything.",
      bullets: [
        "Move from scattered files to an organized system.",
        "Centralize sales, customers, and operations.",
        "Access the business from anywhere.",
        "Keep systems available 24/7 without expensive servers.",
        "Reduce human errors and information loss."
      ],
      outcome:
        "More order, more control, and less dependence on manual processes."
    },
    {
      icon: "vercel",
      title: "Get applications tailored to your business",
      lead: "Make technology adapt to your company, not the other way around",
      summary:
        "Your business is unique, but you are probably using generic tools. That is where efficiency gets lost.",
      bullets: [
        "Landing pages that convert visits into customers.",
        "Sales, customer, or inventory management systems.",
        "Dashboards with clear indicators for decision-making.",
        "Internal platforms to organize teams and processes."
      ],
      outcome:
        "More speed, better organization, and differentiation against competitors."
    },
    {
      icon: "googlegemini",
      title: "Digital transformation advisory for SMEs",
      lead: "Make better decisions before overspending on technology",
      summary:
        "Artificial intelligence is not a trend. It is a shift that will redefine how businesses operate toward 2030.",
      bullets: [
        "Which processes should be automated first.",
        "Where AI is actually worth using.",
        "Which tools you need and which you do not.",
        "How to invest without wasting money."
      ],
      outcome:
        "Clarity, lower risk, and a realistic roadmap for growth.",
      note:
        "The difference in the coming years will be clear: companies that adapt versus companies that stay behind."
    }
  ]
};

export const sprintOfferByLocale: Record<Locale, SprintOffer> = {
  es: {
    title: "Digitaliza tu negocio en 30 dias",
    intro:
      "Hoy en 2026, las empresas que crecen no necesariamente son las mas grandes: son las que tienen procesos mas ordenados y automatizados.",
    definition:
      "En menos de 30 dias puedes pasar de trabajar con procesos manuales a tener un negocio mas organizado, automatizado y listo para crecer.",
    includesTitle: "Que incluye",
    audienceTitle: "Ideal si",
    whyTitle: "Por que 30 dias",
    outcomesTitle: "Resultados que puedes esperar",
    examples: [
      "Pasar de manejar ventas en Excel o WhatsApp a tener un sistema ordenado.",
      "Automatizar respuestas a clientes sin depender de una persona todo el dia.",
      "Tener reportes claros sin armarlos manualmente cada semana.",
      "Centralizar toda tu informacion en un solo lugar."
    ],
    includes: [
      "Automatizacion basica de procesos de ventas, atencion o reportes.",
      "Implementacion de herramientas digitales adaptadas a tu negocio.",
      "Organizacion de tu flujo de trabajo.",
      "Integracion de IA en tareas clave sin complicaciones.",
      "Entrega de una solucion funcional, no solo una idea."
    ],
    audience: [
      "Tu negocio esta creciendo pero sientes desorden.",
      "Pierdes tiempo en tareas repetitivas.",
      "Dependes demasiado de Excel o procesos manuales.",
      "No tienes claridad de tus datos o indicadores.",
      "Quieres modernizarte sin gastar de mas."
    ],
    whyNow:
      "El objetivo no es hacer un sistema perfecto. El objetivo es generar impacto rapido con soluciones iterativas que empiecen a dar valor desde el inicio.",
    outcomes: [
      "Ahorro de tiempo operativo.",
      "Menos errores humanos.",
      "Mejor atencion al cliente.",
      "Mayor control del negocio.",
      "Base lista para seguir creciendo."
    ]
  },
  en: {
    title: "Digitize your business in 30 days",
    intro:
      "In 2026, the companies that grow are not necessarily the biggest ones. They are the ones with more organized and automated processes.",
    definition:
      "In less than 30 days you can move from manual work to a business that is more organized, automated, and ready to scale.",
    includesTitle: "What is included",
    audienceTitle: "Ideal if",
    whyTitle: "Why 30 days",
    outcomesTitle: "Expected results",
    examples: [
      "Move from Excel or WhatsApp-based sales handling to an organized system.",
      "Automate customer responses without depending on one person all day.",
      "Get clear reports without building them manually every week.",
      "Centralize all your information in one place."
    ],
    includes: [
      "Basic automation for sales, support, or reporting processes.",
      "Implementation of digital tools adapted to your business.",
      "Organization of your workflow.",
      "AI integration in key tasks without unnecessary complexity.",
      "Delivery of a functional solution, not only an idea."
    ],
    audience: [
      "Your business is growing but operations feel messy.",
      "You lose time on repetitive tasks.",
      "You depend too much on Excel or manual processes.",
      "You do not have clear data or indicators.",
      "You want modernization without overspending."
    ],
    whyNow:
      "The goal is not to build a perfect system first. The goal is to create fast impact with iterative solutions that deliver value from the start.",
    outcomes: [
      "Operational time savings.",
      "Fewer human errors.",
      "Better customer service.",
      "More business control.",
      "A stronger base for future growth."
    ]
  }
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
  { name: "C#", logo: "c-sharp", category: "backend" },
  { name: "NestJS", logo: "nest-js", category: "backend" },
  { name: "Python", logo: "python", category: "backend" },
  { name: "TypeScript", logo: "typescript", category: "backend" },
  { name: "JavaScript", logo: "javascript", category: "backend" },
  { name: "Node.js", logo: "node", category: "backend" },
  { name: "React", logo: "react", category: "frontend" },
  { name: "SQL Server", logo: "sql-server", category: "database" },
  { name: "PostgreSQL", logo: "postgresql", category: "database" },
  { name: "MySQL", logo: "mysql", category: "database" },
  { name: "DynamoDB", logo: "aws-dynamodb", category: "database" },
  { name: "AWS", logo: "amazonaws", category: "cloud" },
  { name: "AWS Lambda", logo: "aws-lambda", category: "cloud" },
  { name: "Amazon RDS", logo: "aws-rds", category: "cloud" },
  { name: "Amazon S3", logo: "aws-s3", category: "cloud" },
  { name: "WhatsApp API", logo: "api-whatsapp", category: "cloud" },
  { name: "Docker", logo: "docker", category: "devops" },
  { name: "GitHub Actions", logo: "github-actions", category: "devops" },
  { name: "Jenkins", logo: "jenkins", category: "devops" }
];
