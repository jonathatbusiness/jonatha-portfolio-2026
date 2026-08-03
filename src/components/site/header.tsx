"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getContent, localizedPath, type Locale } from "@/lib/content";
import { Container } from "./ui";

export function Header({ locale, path }: Readonly<{ locale: Locale; path: string }>) {
  const [menuState, setMenuState] = useState<"closed" | "open" | "closing">("closed");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const content = getContent(locale);
  const menuVisible = menuState !== "closed";

  const openMenu = () => setMenuState("open");
  const closeMenu = () => {
    setMenuState("closing");
    window.setTimeout(() => setMenuState("closed"), 240);
  };

  useEffect(() => {
    if (!menuVisible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuVisible]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-navy)] text-[var(--color-paper)]">
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link className="inline-flex items-center gap-3 text-base font-semibold text-[var(--color-paper)] transition-colors hover:text-[var(--color-accent)]" href={localizedPath(locale, "/")}>
          <Image className="h-8 w-8 object-contain" src="/Logo.png" alt="" width={32} height={32} priority unoptimized />
          Jonatha Teixeira
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {content.nav.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} path={path} />
          <Link className="inline-flex min-w-40 justify-center rounded-xl border border-white/55 px-4 py-2 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-navy)]" href={localizedPath(locale, "/#contact")}>
            {content.ui.letsTalk}
          </Link>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 text-[var(--color-paper)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] lg:hidden"
          onClick={openMenu}
          type="button"
          aria-expanded={menuVisible}
          aria-label={content.ui.menu}
        >
          <span className="grid gap-1" aria-hidden="true">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </Container>
      {menuVisible ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            className="mobile-menu-overlay absolute inset-0 bg-[rgba(35,57,91,0.42)] backdrop-blur-[2px]"
            data-state={menuState}
            onClick={closeMenu}
            type="button"
            aria-label={content.ui.close}
          />
          <aside className="mobile-menu-panel absolute bottom-0 right-0 top-0 flex w-[min(88vw,400px)] flex-col overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-linen)] shadow-[-24px_0_60px_rgba(35,57,91,0.24)]" data-state={menuState}>
            <div className="flex h-20 shrink-0 items-center justify-between bg-[var(--color-navy)] px-5 text-[var(--color-paper)]">
              <p className="text-base font-semibold text-[var(--color-paper)]">{content.ui.menu}</p>
              <button
                ref={closeButtonRef}
                className="rounded-xl border border-white/40 px-4 py-2 text-sm font-semibold text-[var(--color-paper)]"
                onClick={closeMenu}
                type="button"
              >
                {content.ui.close}
              </button>
            </div>
            <div className="relative flex-1 px-5 py-10">
              <div className="absolute right-6 top-8 h-36 w-36 rounded-full border border-[var(--color-accent)] opacity-40" aria-hidden="true" />
              <nav className="relative grid gap-5 text-4xl font-semibold text-[var(--color-graphite)]" aria-label="Mobile navigation">
                {content.nav.map((item, index) => (
                  <Link className="menu-stagger" href={item.href} key={item.href} onClick={closeMenu} style={{ "--stagger": index } as React.CSSProperties}>
                    <span className="mr-4 text-sm text-[var(--color-accent)]">{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="relative mt-12 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-graphite)]">
                <LanguageSwitcher locale={locale} path={path} onNavigate={closeMenu} variant="drawer" />
                <a href="https://www.linkedin.com/in/jonatha-l-teixeira-jlt/">LinkedIn</a>
                <a href="https://wa.me/5535984529241">WhatsApp</a>
                <a href="mailto:jonatha.teixeira.business@gmail.com">Email</a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitcher({
  locale,
  path,
  onNavigate,
  variant = "header",
}: Readonly<{
  locale: Locale;
  path: string;
  onNavigate?: () => void;
  variant?: "header" | "drawer";
}>) {
  const currentClass =
    variant === "header"
      ? "text-[var(--color-navy)]"
      : "text-[var(--color-paper)]";
  const inactiveClass =
    variant === "header"
      ? "text-[var(--color-paper)] hover:text-[var(--color-accent)]"
      : "text-[var(--color-graphite)] hover:text-[var(--color-accent)]";

  return (
    <div
      className={`language-switcher relative inline-grid w-[8.75rem] grid-cols-2 items-center rounded-xl border p-1 text-center text-xs font-semibold uppercase tracking-[0.08em] ${
        variant === "header" ? "border-white/40" : "border-[var(--color-border)]"
      }`}
      data-locale={locale}
      data-variant={variant}
      aria-label="Language selector"
    >
      <span className="language-switcher-thumb absolute bottom-1 top-1 rounded-lg transition-transform duration-300 ease-out" aria-hidden="true" />
      <Link className={`relative z-10 whitespace-nowrap rounded-lg px-2 py-2 transition-colors ${locale === "en" ? currentClass : inactiveClass}`} href={localizedPath("en", path)} onClick={onNavigate} aria-current={locale === "en" ? "true" : undefined}>
        EN
      </Link>
      <Link className={`relative z-10 whitespace-nowrap rounded-lg px-2 py-2 transition-colors ${locale === "pt-br" ? currentClass : inactiveClass}`} href={localizedPath("pt-br", path)} onClick={onNavigate} aria-current={locale === "pt-br" ? "true" : undefined}>
        PT-BR
      </Link>
    </div>
  );
}
