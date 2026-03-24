import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroPortrait from "@/components/hero-portrait";
import ParticleField from "@/components/particle-field";
import {
  casesByLocale,
  credentials,
  dictionaries,
  locales,
  profile,
  servicesByLocale,
  techStack,
  type Locale
} from "@/lib/site-content";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const localeAlternates: Record<Locale, string> = {
  es: "/es",
  en: "/en"
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function formatDate(locale: Locale, date?: string) {
  if (!date) {
    return "";
  }
  const formatter = new Intl.DateTimeFormat(locale === "es" ? "es-PE" : "en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  return formatter.format(new Date(`${date}T00:00:00`));
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = dictionaries[locale];
  const title =
    locale === "es"
      ? "Marco Brea | Arquitecto de Soluciones Cloud"
      : "Marco Brea | Cloud Solutions Architect";

  return {
    title,
    description: dictionary.hero.subtitle,
    openGraph: {
      title,
      description: dictionary.hero.subtitle,
      locale,
      type: "website"
    },
    alternates: {
      canonical: localeAlternates[locale],
      languages: {
        es: localeAlternates.es,
        en: localeAlternates.en
      }
    }
  };
}

function statusLabel(locale: Locale, status: "completed" | "in_progress") {
  const labels = dictionaries[locale].labels;
  return status === "completed" ? labels.completed : labels.pending;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const t = dictionaries[locale];
  const services = servicesByLocale[locale];
  const cases = casesByLocale[locale];
  const primaryCredentials = credentials.filter((credential) => credential.display_tier === "primary");
  const secondaryCredentials = credentials.filter((credential) => credential.display_tier === "secondary");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: locale === "es" ? profile.roleEs : profile.roleEn,
    address: profile.location,
    url: localeAlternates[locale],
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: techStack.map((tech) => tech.name)
  };

  return (
    <main className="site-shell">
      <ParticleField />
      <div className="bg-aurora" />
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-cyan" />
      <div className="bg-glow bg-glow-blue" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
        <header className="glass-panel reveal mb-10 rounded-3xl p-6 md:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <span className="neon-pill">{t.hero.kicker}</span>
            <div className="inline-flex rounded-full border border-white/20 bg-[#070a15] p-1 text-sm">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`rounded-full px-3 py-1 font-medium ${
                    item === locale ? "bg-cyan-300 text-slate-900" : "text-slate-300"
                  }`}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <nav className="mb-8 hidden gap-6 text-sm font-semibold text-slate-300 md:flex">
            <a href="#services">{t.nav.services}</a>
            <a href="#cases">{t.nav.cases}</a>
            <a href="#credentials">{t.nav.credentials}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-[var(--font-heading)] text-3xl font-bold leading-tight text-slate-50 md:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={t.calendly} target="_blank" rel="noreferrer" className="btn-neon">
                  {t.hero.cta}
                </a>
                <a href="#credentials" className="btn-muted">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <HeroPortrait />
          </div>
        </header>

        <section id="stack" className="reveal delay-1 mb-12">
          <h2 className="section-title">{t.sections.stack}</h2>
          <div className="tech-marquee">
            <div className="tech-track">
              {[...techStack, ...techStack].map((tech, index) => (
                <article key={`${tech.name}-${index}`} className="tech-card">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.logo}/22d3ee`}
                    alt={tech.name}
                    width={18}
                    height={18}
                  />
                  <span>{tech.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="reveal delay-2 mb-12">
          <h2 className="section-title">{t.sections.services}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass-panel rounded-2xl p-5 card-rise-dark">
                <h3 className="mb-3 text-lg font-semibold text-slate-100">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className="reveal delay-2 mb-12">
          <h2 className="section-title">{t.sections.cases}</h2>
          <div className="space-y-5">
            {cases.map((entry) => (
              <article key={entry.title} className="glass-panel rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-slate-100">{entry.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{entry.challenge}</p>
                <p className="mt-2 text-sm text-slate-300">{entry.solution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="tag-neon">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                  <strong>{t.labels.impact}: </strong>
                  {entry.outcome}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-400">
                  {t.labels.confidentiality}: {entry.confidentiality_note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="reveal delay-3 mb-12">
          <h2 className="section-title">{t.sections.credentials}</h2>
          <div className="mb-6 grid gap-5 md:grid-cols-3">
            {primaryCredentials.map((credential) => (
              <article key={credential.title} className="glass-panel rounded-2xl p-5 card-rise-dark">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {credential.issuer}
                  </span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {statusLabel(locale, credential.status)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-100">{credential.title}</h3>
                {credential.verification_url ? (
                  <a
                    className="mt-3 inline-block text-sm font-semibold text-cyan-300 underline decoration-cyan-600 decoration-2 underline-offset-4"
                    href={credential.verification_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {t.labels.secondaryCredentials}
            </p>
            <div className="space-y-4">
              {secondaryCredentials.map((credential) => (
                <article key={credential.title} className="rounded-xl border border-white/10 bg-[#0b1020] p-4">
                  <h3 className="font-semibold text-slate-100">{credential.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{credential.issuer}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    {t.labels.from}: {formatDate(locale, credential.start_date)} | {t.labels.to}:{" "}
                    {formatDate(locale, credential.end_date)} | {credential.hours} {t.labels.hours}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cyan-300">
                    {t.labels.verificationCode}: {credential.verification_code}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="glass-panel reveal delay-3 mb-12 rounded-2xl p-6">
          <h2 className="section-title">{t.sections.about}</h2>
          <p className="mt-4 max-w-4xl text-slate-300">{t.aboutText}</p>
        </section>

        <section id="contact" className="glass-panel reveal delay-3 rounded-2xl border border-cyan-400/25 p-6">
          <h2 className="section-title">{t.sections.contact}</h2>
          <p className="mt-3 max-w-3xl text-slate-300">{t.contactText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={t.calendly} target="_blank" rel="noreferrer" className="btn-neon">
              {t.hero.cta}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-muted">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-muted">
              GitHub
            </a>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </main>
  );
}
