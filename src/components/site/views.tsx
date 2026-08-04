import Link from "next/link";
import Image from "next/image";
import { FiBookOpen, FiCpu, FiGlobe, FiLayers, FiMail, FiPenTool, FiTarget, FiTool, FiZap } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { areaColors, getContent, getExpertise, getProject, localizedPath, type AreaId, type Locale } from "@/lib/content";
import { Footer } from "./footer";
import { Header } from "./header";
import { MediaGallery } from "./media-gallery";
import { WorkFilter } from "./work-filter";
import { AreaMark, ButtonLink, Container, ProjectPreview, ProjectVisual, Section, SectionHeading } from "./ui";

function PageFrame({
  locale,
  path,
  children,
}: Readonly<{
  locale: Locale;
  path: string;
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale={locale} path={path} />
      <main className="route-content flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

function HeroActions({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href={localizedPath(locale, "/work")}>{content.ui.viewProjects}</ButtonLink>
      <ButtonLink href={localizedPath(locale, "/about")} variant="secondary">
        {content.ui.viewExperience}
      </ButtonLink>
    </div>
  );
}

function ExpertiseCards({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <div className="grid gap-12 pt-12 lg:grid-cols-3">
      {content.expertise.map((item) => (
        <article
          className="expertise-card relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-warm-white)] px-6 pb-7 pt-16 text-center"
          key={item.id}
          style={{ "--area-color": areaColors[item.id] } as React.CSSProperties}
        >
          <div className="expertise-icon-wrap absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper)]">
            <ExpertiseIcon area={item.id} />
          </div>
          <h3 className="text-xl font-semibold text-[var(--area-color)]">{item.title}</h3>
          <p className="mx-auto mt-5 max-w-sm leading-7 text-[var(--color-muted)]">{item.short}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {item.skills.slice(0, 6).map((skill) => (
              <li className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-muted)]" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-block pt-6 font-semibold text-[var(--area-color)]">{item.cta}</span>
        </article>
      ))}
    </div>
  );
}

function ExpertiseIcon({ area }: Readonly<{ area: AreaId }>) {
  const color = areaColors[area];

  if (area === "instructional-design") {
    return (
      <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M10 43C19 30 32 22 51 18" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <path d="M13 49C26 47 39 39 52 29" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
        <circle cx="18" cy="34" r="5.5" fill={color} />
        <circle cx="34" cy="23" r="5.5" fill={color} />
        <circle cx="50" cy="17" r="5.5" fill={color} />
        <path d="M25 49H50" stroke={color} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (area === "visual-design") {
    return (
      <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="15" y="10" width="31" height="31" rx="9" transform="rotate(10 15 10)" fill={color} opacity="0.16" />
        <rect x="15" y="10" width="31" height="31" rx="9" transform="rotate(10 15 10)" stroke={color} strokeWidth="4.5" />
        <circle cx="26" cy="24" r="6.5" fill={color} />
        <circle cx="43" cy="39" r="12" fill={color} opacity="0.42" />
        <path d="M14 48H50" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <path d="M47 16V49" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.48" />
      </svg>
    );
  }

  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="13" width="19" height="17" rx="5" fill={color} />
      <rect x="33" y="13" width="19" height="22" rx="5" fill={color} opacity="0.88" />
      <rect x="12" y="34" width="24" height="16" rx="5" fill={color} opacity="0.74" />
      <rect x="38" y="38" width="14" height="12" rx="4" fill={color} />
      <path d="M29 22C36 22 35 29 42 29" stroke="var(--color-paper)" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 42C35 41 38 38 43 35" stroke="var(--color-paper)" strokeWidth="3.5" strokeLinecap="round" opacity="0.76" />
    </svg>
  );
}

function ProjectGrid({ locale, limit, area }: Readonly<{ locale: Locale; limit?: number; area?: AreaId }>) {
  const content = getContent(locale);
  const sourceProjects = area ? content.projects.filter((project) => project.area === area) : content.projects;
  const projects = limit ? sourceProjects.slice(0, limit) : sourceProjects;
  const areaLabels = Object.fromEntries(content.expertise.map((item) => [item.id, item.title])) as Record<AreaId, string>;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <Link className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-warm-white)]" href={localizedPath(locale, `/work/${project.slug}`)} key={project.slug}>
          <ProjectPreview project={project} />
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: areaColors[project.area] }}>
              <AreaMark area={project.area} />
              {areaLabels[project.area]}
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-tight text-[var(--color-graphite)] group-hover:underline group-hover:decoration-[var(--color-accent)] group-hover:underline-offset-4">
              {project.title}
            </h3>
            <p className="mt-3 text-sm font-semibold text-[var(--color-subtle)]">{Array.isArray(project.role) ? project.role.slice(0, 2).join(" · ") : project.role}</p>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">{project.cardSummary ?? project.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags?.slice(0, 3).map((tag) => (
                <li className="rounded-lg bg-[var(--color-linen)] px-3 py-1 text-sm text-[var(--color-muted)]" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function HomeView({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <PageFrame locale={locale} path="/">
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-18">
          <div className="hero-copy">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{content.home.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-[2.35rem] font-semibold leading-[1.05] text-[var(--color-graphite)] sm:text-6xl lg:text-7xl">
              {content.home.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">{content.home.hero.text}</p>
            <HeroActions locale={locale} />
            <p className="mt-8 text-sm font-semibold text-[var(--color-muted)]">{content.home.hero.availability}</p>
          </div>
          <div className="hero-panel relative grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-linen)] p-4 sm:p-6 lg:min-h-[380px] lg:p-0">
            <div className="hidden lg:absolute lg:inset-0 lg:block lg:rounded-[2rem] lg:border lg:border-[var(--color-border)] lg:bg-[var(--color-linen)]" />
            <div className="hidden lg:absolute lg:left-8 lg:right-8 lg:top-8 lg:block lg:h-px lg:bg-[var(--color-accent)]" />
            <div className="relative grid gap-4 lg:absolute lg:bottom-8 lg:left-8 lg:right-8">
              {content.expertise.map((item, index) => (
                <Link className="hero-card grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]" href={localizedPath(locale, "/about#areas")} key={item.id} style={{ "--stagger": index } as React.CSSProperties}>
                  <span className="text-sm font-semibold" style={{ color: areaColors[item.id] }}>
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-xl font-semibold text-[var(--color-graphite)]">{item.title}</span>
                    <span className="mt-1 block leading-7 text-[var(--color-muted)]">{item.short}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow={content.home.about.eyebrow} title={content.home.about.title} />
          <div className="space-y-6 text-lg leading-8 text-[var(--color-muted)]">
            {content.home.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ButtonLink href={localizedPath(locale, "/about")} variant="secondary">
              {content.home.about.cta}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-linen)] scroll-mt-24" id="areas">
        <Container>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading {...content.home.featured} />
            <ButtonLink href={localizedPath(locale, "/work")} variant="secondary">
              {content.home.featured.cta}
            </ButtonLink>
          </div>
          <ProjectGrid locale={locale} limit={3} />
        </Container>
      </Section>

      <Section className="scroll-mt-24" id="contact">
        <Container>
          <div className="rounded-3xl bg-[var(--color-graphite)] p-5 text-[var(--color-paper)] sm:p-12 lg:p-16">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{content.home.contact.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{content.home.contact.text}</p>
            <div className="mt-10 grid min-w-0 gap-3 lg:grid-cols-3">
              <ContactLink icon={<FaWhatsapp />} label="WhatsApp" value="+55 35 98452-9241" href="https://wa.me/5535984529241" />
              <ContactLink icon={<FiMail />} label={locale === "en" ? "Email" : "E-mail"} value="jonatha.teixeira.business@gmail.com" href="mailto:jonatha.teixeira.business@gmail.com" />
              <ContactLink icon={<FaLinkedinIn />} label="LinkedIn" value="jonatha-l-teixeira-jlt" href="https://www.linkedin.com/in/jonatha-l-teixeira-jlt/" />
            </div>
          </div>
        </Container>
      </Section>
    </PageFrame>
  );
}

export function WorkView({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <PageFrame locale={locale} path="/work">
      <PageHero locale={locale} page={content.pages.work} />
      <Section>
        <Container>
          <WorkFilter
            locale={locale}
            projects={content.projects}
            labels={{
              all: content.ui.all,
              caseStudy: content.ui.caseStudy,
              areas: Object.fromEntries(content.expertise.map((item) => [item.id, item.title])) as Record<AreaId, string>,
            }}
          />
        </Container>
      </Section>
    </PageFrame>
  );
}

export function ExpertiseView({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <PageFrame locale={locale} path="/expertise">
      <PageHero locale={locale} page={content.pages.expertise} />
      <Section>
        <Container>
          <ExpertiseCards locale={locale} />
        </Container>
      </Section>
    </PageFrame>
  );
}

export function AreaView({ locale, area }: Readonly<{ locale: Locale; area: AreaId }>) {
  const content = getContent(locale);
  const item = getExpertise(locale, area);

  if (!item) return null;

  return (
    <PageFrame locale={locale} path={`/${area}`}>
      <PageHero locale={locale} page={{ eyebrow: item.title, title: item.description.split(".")[0] + ".", text: item.description }} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={content.home.skills.eyebrow} title={item.title} />
            <ul className="mt-8 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-muted)]" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
            {item.aiNote ? <p className="mt-8 rounded-2xl bg-[var(--color-linen)] p-6 leading-7 text-[var(--color-muted)]">{item.aiNote}</p> : null}
          </div>
          <div>
            <SectionHeading eyebrow="Process" title={locale === "en" ? "How I approach the work." : "Como eu conduzo o trabalho."} />
            <ol className="mt-8 grid gap-4">
              {item.process.map((step, index) => (
                <li className="grid grid-cols-[auto_1fr] gap-4 border-t border-[var(--color-border)] pt-4" key={step}>
                  <span className="font-semibold" style={{ color: areaColors[item.id] }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--color-muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--color-linen)]">
        <Container>
          <div className="mb-10">
            <SectionHeading eyebrow={content.ui.relatedProjects} title={locale === "en" ? `Selected ${item.title} projects.` : `Projetos selecionados em ${item.title}.`} />
          </div>
          <ProjectGrid locale={locale} area={area} />
        </Container>
      </Section>
    </PageFrame>
  );
}

export function AboutView({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);
  const page = content.pages.about;

  return (
    <PageFrame locale={locale} path="/about">
      <PageHero locale={locale} page={page} imageSrc="/jonatha-teixeira.webp" imageAlt="Jonatha Teixeira" />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.65fr]">
          <div className="space-y-6 text-lg leading-8 text-[var(--color-muted)]">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-linen)] p-6">
            <EducationGroup icon={<FiBookOpen />} title={locale === "en" ? "Education" : "Formação"} items={page.education} />
            <EducationGroup icon={<FiGlobe />} title={locale === "en" ? "Languages" : "Idiomas"} items={page.languages} className="mt-8" />
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--color-linen)]">
        <Container>
          <div className="mb-12">
            <SectionHeading {...content.home.expertise} />
          </div>
          <ExpertiseCards locale={locale} />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-12">
            <SectionHeading {...content.home.skills} />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.home.skills.groups.map((group, index) => (
              <article className="border-t border-[var(--color-border)] pt-6" key={group.title}>
                <AboutIcon index={index} />
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-graphite)]">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li className="rounded-lg bg-[var(--color-linen)] px-3 py-2 text-sm text-[var(--color-muted)]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--color-linen)]">
        <Container>
          <div className="mb-12">
            <SectionHeading {...content.home.experience} />
          </div>
          <div className="grid gap-5">
            {page.experience.map((item) => (
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6" key={`${item.company}-${item.period}`}>
                <p className="text-sm font-semibold text-[var(--color-accent)]">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--color-graphite)]">{item.company}</h3>
                <p className="mt-1 font-semibold text-[var(--color-muted)]">{item.role}</p>
                <p className="mt-4 max-w-5xl leading-7 text-[var(--color-muted)]">{item.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <li className="rounded-lg bg-[var(--color-linen)] px-3 py-2 text-sm text-[var(--color-muted)]" key={tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.principles.map((principle, index) => (
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6" key={principle.title}>
                <AboutIcon index={index} />
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-graphite)]">{principle.title}</h3>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">{principle.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </PageFrame>
  );
}

export function ContactView({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);
  const page = content.pages.contact;

  return (
    <PageFrame locale={locale} path="/contact">
      <PageHero locale={locale} page={page} />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <ContactLink icon={<FaWhatsapp />} label="WhatsApp" value="+55 35 98452-9241" href="https://wa.me/5535984529241" dark={false} />
          <ContactLink icon={<FiMail />} label={locale === "en" ? "Email" : "E-mail"} value="jonatha.teixeira.business@gmail.com" href="mailto:jonatha.teixeira.business@gmail.com" dark={false} />
          <ContactLink icon={<FaLinkedinIn />} label="LinkedIn" value="jonatha-l-teixeira-jlt" href="https://www.linkedin.com/in/jonatha-l-teixeira-jlt/" dark={false} />
        </Container>
      </Section>
    </PageFrame>
  );
}

export function ProjectView({ locale, slug }: Readonly<{ locale: Locale; slug: string }>) {
  const content = getContent(locale);
  const project = getProject(locale, slug);
  const projectIndex = content.projects.findIndex((item) => item.slug === slug);
  const previousProject = content.projects[(projectIndex - 1 + content.projects.length) % content.projects.length];
  const nextProject = content.projects[(projectIndex + 1) % content.projects.length];

  if (!project) return null;

  return (
    <PageFrame locale={locale} path={`/work/${slug}`}>
      <PageHero locale={locale} page={{ eyebrow: content.ui.caseStudy, title: project.title, text: project.subtitle ?? project.summary }} compact />
      <Section>
        <Container className={project.media?.[0]?.type === "video" ? "max-w-5xl" : "grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"}>
          <div>
            <ProjectMediaBlock project={project} locale={locale} />
            {project.media?.[0]?.type !== "video" && project.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent-hover)]" href={link.href} key={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <div className={project.media?.[0]?.type === "video" ? "mt-10 grid gap-8 md:grid-cols-3" : "space-y-8"}>
            <MetaList title={locale === "en" ? "Role" : "Papel"} items={Array.isArray(project.role) ? project.role : [project.role]} />
            <MetaList title={locale === "en" ? "Services" : "Serviços"} items={project.services ?? []} />
            <MetaList title={locale === "en" ? "Tools" : "Ferramentas"} items={project.tools ?? []} />
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--color-linen)]">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading eyebrow={project.client ?? project.status} title={project.summary} className="case-summary-heading" />
          <div className="space-y-10">
            {project.content ? (
              <>
                <CaseBlock title={locale === "en" ? "Overview" : "Visão geral"} paragraphs={project.content.overview} />
                <CaseBlock title={locale === "en" ? "Challenge" : "Desafio"} paragraphs={project.content.challenge} />
                <CaseBlock title={locale === "en" ? "My role" : "Meu papel"} paragraphs={project.content.role} />
                <CaseBlock title={locale === "en" ? "Approach" : "Abordagem"} paragraphs={project.content.approach} />
                <CaseBlock title={locale === "en" ? "Solution" : "Solução"} paragraphs={project.content.solution} />
                <CaseBlock title={locale === "en" ? "Outcome" : "Resultado"} paragraphs={project.content.outcome} />
                {project.content.note ? <CaseBlock title={locale === "en" ? "Note" : "Observação"} paragraphs={project.content.note} /> : null}
              </>
            ) : null}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-3 border-y border-[var(--color-border)] py-5 md:flex-row">
            <Link className="group inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]" href={localizedPath(locale, `/work/${previousProject.slug}`)}>
              <span aria-hidden="true">←</span>
              <span>{locale === "en" ? "Previous" : "Anterior"}: <span className="text-[var(--color-graphite)] group-hover:text-[var(--color-accent)]">{previousProject.title}</span></span>
            </Link>
            <Link className="group inline-flex items-center justify-end gap-3 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]" href={localizedPath(locale, `/work/${nextProject.slug}`)}>
              <span>{locale === "en" ? "Next" : "Próximo"}: <span className="text-[var(--color-graphite)] group-hover:text-[var(--color-accent)]">{nextProject.title}</span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12">
            <SectionHeading eyebrow={content.ui.relatedProjects} title={locale === "en" ? "More in this area." : "Mais projetos nesta área."} />
            <div className="mt-8">
              <ProjectGrid locale={locale} area={project.area} limit={2} />
            </div>
          </div>
        </Container>
      </Section>
    </PageFrame>
  );
}

function PageHero({
  locale,
  page,
  compact = false,
  imageSrc,
  imageAlt = "",
}: Readonly<{
  locale: Locale;
  page: { eyebrow: string; title: string; text: string };
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}>) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-linen)]">
      <Container className={`page-hero ${compact ? "py-14 sm:py-16 lg:py-20" : "py-20 sm:py-24 lg:py-28"}`}>
        <div className={imageSrc ? "grid items-center gap-12 lg:grid-cols-[1fr_360px]" : ""}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{page.eyebrow}</p>
            <h1 className={`${compact ? "mt-5 max-w-4xl text-[2.15rem] sm:text-5xl lg:text-6xl" : "mt-5 max-w-5xl text-[2.65rem] sm:text-6xl lg:text-7xl"} font-semibold leading-tight text-[var(--color-graphite)]`}>{page.title}</h1>
            {page.text ? <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--color-muted)]">{page.text}</p> : null}
            <div className="mt-10">
              <ButtonLink href={localizedPath(locale, "/#contact")} variant="secondary">
                {getContent(locale).ui.letsTalk}
              </ButtonLink>
            </div>
          </div>
          {imageSrc ? (
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[0_24px_60px_rgba(43,42,40,0.08)]">
              <Image className="object-cover" src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 360px, 100vw" priority />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function EducationGroup({
  icon,
  title,
  items,
  className = "",
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  items: string[];
  className?: string;
}>) {
  return (
    <section className={className}>
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--color-graphite)]">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-lg text-[var(--color-paper)]">{icon}</span>
        {title}
      </h2>
      <ul className="mt-5 list-disc space-y-3 pl-6 text-[var(--color-muted)] marker:text-[var(--color-accent)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function CaseBlock({ title, paragraphs }: Readonly<{ title: string; paragraphs: string[] }>) {
  return (
    <section className="border-t border-[var(--color-border)] pt-6">
      <h2 className="text-2xl font-semibold text-[var(--color-graphite)]">{title}</h2>
      <div className="mt-3 space-y-4 leading-7 text-[var(--color-muted)]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function MetaList({ title, items }: Readonly<{ title: string; items: string[] }>) {
  if (!items.length) return null;

  return (
    <section className="border-t border-[var(--color-border)] pt-6">
      <h2 className="text-2xl font-semibold text-[var(--color-graphite)]">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li className="rounded-lg bg-[var(--color-linen)] px-3 py-2 text-sm text-[var(--color-muted)]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectMediaBlock({ project, locale }: Readonly<{ project: NonNullable<ReturnType<typeof getProject>>; locale: Locale }>) {
  const primary = project.media?.[0];
  const imageMedia = project.media?.filter((item): item is typeof item & { src: string } => Boolean(item.src)) ?? [];

  if (imageMedia.length) {
    return <MediaGallery items={imageMedia} />;
  }

  if (primary?.type === "video" && primary.videoId) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-graphite)]">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${primary.videoId}`}
          title={primary.alt}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (primary?.type === "carousel") {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-warm-white)] p-5">
        <ProjectVisual area={project.area} />
        <p className="mt-4 text-sm text-[var(--color-muted)]">{locale === "en" ? "Carousel prepared for six real social media assets." : "Carrossel preparado para seis assets reais de social media."}</p>
      </div>
    );
  }

  if (primary?.type === "external-demo" || primary?.type === "website") {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-warm-white)] p-5">
        <ProjectVisual area={project.area} />
        <p className="mt-4 text-sm text-[var(--color-muted)]">{primary.alt}</p>
      </div>
    );
  }

  return <ProjectVisual area={project.area} />;
}

function AboutIcon({ index }: Readonly<{ index: number }>) {
  const icons = [FiTarget, FiTool, FiPenTool, FiZap, FiLayers, FiCpu];
  const Icon = icons[index % icons.length];
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-linen)] text-xl text-[var(--color-accent)]">
      <Icon aria-hidden="true" />
    </span>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
  dark = true,
}: Readonly<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  dark?: boolean;
}>) {
  return (
    <a
      className={`group min-w-0 max-w-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
        dark ? "border-white/15 bg-white/5 text-[var(--color-paper)] hover:border-[var(--color-accent)]" : "border-[var(--color-border)] bg-[var(--color-warm-white)] text-[var(--color-graphite)] hover:border-[var(--color-accent)]"
      }`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-xl text-[var(--color-paper)]">{icon}</span>
      <span className={`mt-4 block text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-[var(--color-muted)]"}`}>{label}</span>
      <span className="mt-2 block min-w-0 font-semibold [overflow-wrap:anywhere]">{value}</span>
    </a>
  );
}
