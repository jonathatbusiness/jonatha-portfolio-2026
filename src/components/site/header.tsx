"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { alternatePath, getContent, localizedPath, type Locale } from "@/lib/content";
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
        <Link className="text-base font-semibold text-[var(--color-paper)] transition-colors hover:text-[var(--color-accent)]" href={localizedPath(locale, "/")}>
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
          <Link className="nav-link" href={alternatePath(locale, path)}>
            {locale === "en" ? "PT-BR" : "EN"}
          </Link>
          <Link className="rounded-xl border border-white/55 px-4 py-2 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-navy)]" href={localizedPath(locale, "/contact")}>
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
              <div className="relative mt-12 grid gap-4 text-lg text-[var(--color-muted)]">
                {content.expertise.map((item, index) => (
                  <Link className="menu-stagger" href={localizedPath(locale, `/${item.id}`)} key={item.id} onClick={closeMenu} style={{ "--stagger": index + 4 } as React.CSSProperties}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="relative mt-12 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-graphite)]">
                <Link href={alternatePath(locale, path)} onClick={closeMenu}>
                  {locale === "en" ? "PT-BR" : "EN"}
                </Link>
                <a href="https://www.linkedin.com/">LinkedIn</a>
                <a href="https://github.com/">GitHub</a>
                <a href="mailto:hello@example.com">Email</a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
