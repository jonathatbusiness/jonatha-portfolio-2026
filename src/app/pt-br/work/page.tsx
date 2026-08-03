import type { Metadata } from "next";
import { WorkView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos em aprendizagem, comunicação visual e produtos digitais de Jonatha Teixeira.",
  alternates: {
    canonical: "/pt-br/work",
    languages: {
      en: "/work",
      "pt-BR": "/pt-br/work",
    },
  },
};

export default function WorkPtBrPage() {
  return <WorkView locale="pt-br" />;
}
