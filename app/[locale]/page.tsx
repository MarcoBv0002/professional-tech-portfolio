import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  casesByLocale,
  credentials,
  dictionaries,
  locales,
  profile,
  servicesByLocale,
  type Locale
} from "@/lib/content";

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
      ? "Arquitecto de Soluciones | Portafolio comercial"
      : "Solutions Architect | Commercial Portfolio";
  const description = dictionary.hero.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

function getStatusLabel(locale: Locale, status: "completed" | "in_progress") {
  const t = dictionaries[locale].labels;
  return status === "completed" ? t.completed : t.pending;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const t = dictionaries[locale];
  const services = servicesByLocale[locale];
  const cases = casesByLocale[locale];
  const primaryCredentials = credentials.filter(
    (credential) => credential.display_tier === "primary"
  );
  const secondaryCredentials = credentials.filter(
    (credential) => credential.display_tier === "secondary"
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: locale === "es" ? profile.roleEs : profile.roleEn,
    address: profile.location,
    url: localeAlternates[locale],
    knowsAbout: [
      "Cloud Architecture",
      "AWS",
      "Solution Design",
      "Modernization Strategy"
    ]
  };

  return (
    <main className="shell mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
      <header className="mb-10 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur md:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.hero.kicker}
          </span>
          <div className="inline-flex rounded-full border border-ink/10 bg-white p-1 text-sm shadow-sm">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-full px-3 py-1 font-medium ${
                  item === locale ? "bg-ink text-white" : "text-ink/70"
                }`}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <nav className="mb-8 hidden gap-6 text-sm font-semibold text-ink/70 md:flex">
          <a href="#services">{t.nav.services}</a>
          <a href="#cases">{t.nav.cases}</a>
          <a href="#credentials">{t.nav.credentials}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <h1 className="font-[var(--font-heading)] text-3xl font-bold leading-tight md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-ink/80 md:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={t.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
          >
            {t.hero.cta}
          </a>
          <a
            href="#credentials"
            className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </header>

      <section id="services" className="mb-12">
        <h2 className="mb-5 font-[var(--font-heading)] text-2xl font-bold">
          {t.sections.services}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-rise rounded-2xl border border-ink/10 bg-white p-5 shadow-card"
            >
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-ink/75">
                {service.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="mb-12">
        <h2 className="mb-5 font-[var(--font-heading)] text-2xl font-bold">
          {t.sections.cases}
        </h2>
        <div className="space-y-5">
          {cases.map((entry) => (
            <article
              key={entry.title}
              className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold">{entry.title}</h3>
              <p className="mt-3 text-sm text-ink/75">{entry.challenge}</p>
              <p className="mt-2 text-sm text-ink/75">{entry.solution}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 rounded-xl bg-accent/10 px-4 py-3 text-sm text-ink/85">
                <strong>{t.labels.impact}: </strong>
                {entry.outcome}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-ink/55">
                {t.labels.confidentiality}: {entry.confidentiality_note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="credentials" className="mb-12">
        <h2 className="mb-5 font-[var(--font-heading)] text-2xl font-bold">
          {t.sections.credentials}
        </h2>
        <div className="mb-6 grid gap-5 md:grid-cols-3">
          {primaryCredentials.map((credential) => (
            <article
              key={credential.title}
              className="card-rise rounded-2xl border border-warm/50 bg-gradient-to-br from-white to-[#fff9e8] p-5 shadow-card"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  {credential.issuer}
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-ink">
                  {getStatusLabel(locale, credential.status)}
                </span>
              </div>
              <h3 className="text-base font-semibold">{credential.title}</h3>
              {credential.verification_url ? (
                <a
                  className="mt-3 inline-block text-sm font-semibold text-brand underline decoration-brand/35 decoration-2 underline-offset-4"
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

        <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
            Secondary credentials
          </p>
          <div className="space-y-4">
            {secondaryCredentials.map((credential) => (
              <article
                key={credential.title}
                className="rounded-xl border border-ink/10 bg-bg p-4"
              >
                <h3 className="font-semibold">{credential.title}</h3>
                <p className="mt-1 text-sm text-ink/75">{credential.issuer}</p>
                <p className="mt-2 text-sm text-ink/75">
                  {t.labels.from}: {credential.start_date} | {t.labels.to}:{" "}
                  {credential.end_date} | {credential.hours} {t.labels.hours}
                </p>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {t.labels.verificationCode}: {credential.verification_code}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mb-12 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
        <h2 className="font-[var(--font-heading)] text-2xl font-bold">
          {t.sections.about}
        </h2>
        <p className="mt-4 max-w-4xl text-ink/80">{t.aboutText}</p>
      </section>

      <section id="contact" className="rounded-2xl border border-brand/20 bg-brand/10 p-6">
        <h2 className="font-[var(--font-heading)] text-2xl font-bold">
          {t.sections.contact}
        </h2>
        <p className="mt-3 max-w-3xl text-ink/80">{t.contactText}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={t.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
          >
            {t.hero.cta}
          </a>
          <a
            href="mailto:tu-correo@dominio.com"
            className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            Email
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </main>
  );
}
