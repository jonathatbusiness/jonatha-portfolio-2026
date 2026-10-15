"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/lib/content";

const AiAtWorkEvidence = dynamic(
  () => import("./ai-at-work-evidence").then((mod) => mod.AiAtWorkEvidence),
  {
    ssr: false,
    loading: () => <div className="py-8">Loading project materials...</div>,
  },
);

export function AiAtWorkEvidenceClient({ locale }: { locale: Locale }) {
  return <AiAtWorkEvidence locale={locale} />;
}
