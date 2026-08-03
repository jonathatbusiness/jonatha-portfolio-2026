"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { areaColors, localizedPath, type AreaId, type Locale, type Project } from "@/lib/content";
import { AreaMark, ProjectVisual } from "./ui";

export function WorkFilter({
  locale,
  projects,
  labels,
}: Readonly<{
  locale: Locale;
  projects: Project[];
  labels: {
    all: string;
    caseStudy: string;
    areas: Record<AreaId, string>;
  };
}>) {
  const [active, setActive] = useState<AreaId | "all">("all");
  const filteredProjects = useMemo(() => (active === "all" ? projects : projects.filter((project) => project.area === active)), [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Project filters">
        {(["all", "instructional-design", "visual-design", "digital-products"] as const).map((filter) => (
          <button
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
              active === filter
                ? "border-[var(--color-graphite)] bg-[var(--color-graphite)] text-[var(--color-paper)]"
                : "border-[var(--color-border)] text-[var(--color-graphite)] hover:border-[var(--color-accent)]"
            }`}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter === "all" ? labels.all : labels.areas[filter]}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]" href={localizedPath(locale, `/work/${project.slug}`)} key={project.slug}>
            <ProjectVisual area={project.area} />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: areaColors[project.area] }}>
                <AreaMark area={project.area} />
                {labels.areas[project.area]}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-graphite)]">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--color-muted)]">{Array.isArray(project.role) ? project.role.slice(0, 2).join(" · ") : project.role}</p>
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
    </div>
  );
}
