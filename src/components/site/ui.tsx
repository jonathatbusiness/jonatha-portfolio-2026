import Link from "next/link";
import { areaColors, type AreaId } from "@/lib/content";
import { RevealSection } from "./reveal-section";

export function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <RevealSection className={`py-20 sm:py-24 lg:py-32 ${className}`}>{children}</RevealSection>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: Readonly<{
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
}>) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--color-graphite)] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">{text}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}>) {
  const variants = {
    primary: "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-paper)] hover:border-[var(--color-accent-hover)] hover:bg-[var(--color-accent-hover)]",
    secondary: "border-[var(--color-graphite)] text-[var(--color-graphite)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)]",
    light: "border-[var(--color-paper)] text-[var(--color-paper)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]",
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-xl border px-5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function AreaMark({ area }: Readonly<{ area: AreaId }>) {
  return <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: areaColors[area] }} />;
}

export function ProjectVisual({ area }: Readonly<{ area: AreaId }>) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-linen)]"
      style={{ "--area-color": areaColors[area] } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="absolute inset-x-8 top-8 h-px bg-[var(--area-color)]" />
      <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border border-[var(--area-color)]" />
      <div className="absolute bottom-14 right-8 grid h-32 w-32 grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="rounded-md bg-[var(--color-paper)] shadow-[inset_0_0_0_1px_var(--color-border)]" />
        ))}
      </div>
      <div className="absolute left-8 top-14 h-20 w-44 rounded-2xl bg-[var(--color-paper)] shadow-[inset_0_0_0_1px_var(--color-border)]" />
    </div>
  );
}
