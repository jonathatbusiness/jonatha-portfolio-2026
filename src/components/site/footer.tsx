import Link from "next/link";
import { getContent, localizedPath, type Locale } from "@/lib/content";
import { ButtonLink, Container } from "./ui";

export function Footer({ locale }: Readonly<{ locale: Locale }>) {
  const content = getContent(locale);

  return (
    <footer className="bg-[var(--color-navy)] py-16 text-[var(--color-paper)] sm:py-20">
      <Container>
        <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{content.footer.title}</h2>
            <p className="mt-4 text-xl text-white/75">{content.footer.text}</p>
          </div>
          <div className="lg:justify-self-end lg:self-end">
            <ButtonLink href={localizedPath(locale, "/contact")} variant="light">
              {content.footer.button}
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {content.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{column.title}</h3>
              <ul className="mt-5 grid gap-3 text-white/75">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="transition-colors hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/65 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base font-semibold text-[var(--color-paper)]">Jonatha Teixeira</p>
            <p className="mt-2 max-w-xl">{content.footer.signature}</p>
          </div>
          <p>
            {content.footer.location} · {content.footer.availability}
          </p>
        </div>
      </Container>
    </footer>
  );
}
