import type { Metadata } from "next";
import { ExpertiseView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Especialidades",
  description: "Instructional Design, Visual Design e Digital Products conectados por uma mesma forma de resolver problemas.",
  alternates: {
    canonical: "/pt-br/expertise",
    languages: {
      en: "/expertise",
      "pt-BR": "/pt-br/expertise",
    },
  },
};

export default function ExpertisePtBrPage() {
  return <ExpertiseView locale="pt-br" />;
}
