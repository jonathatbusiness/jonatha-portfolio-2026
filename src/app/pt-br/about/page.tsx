import type { Metadata } from "next";
import { AboutView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre Jonatha Teixeira, designer multidisciplinar atuando entre design, aprendizagem e tecnologia.",
  alternates: {
    canonical: "/pt-br/about",
    languages: {
      en: "/about",
      "pt-BR": "/pt-br/about",
    },
  },
};

export default function AboutPtBrPage() {
  return <AboutView locale="pt-br" />;
}
