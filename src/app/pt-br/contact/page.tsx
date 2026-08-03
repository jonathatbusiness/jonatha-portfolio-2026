import type { Metadata } from "next";
import { ContactView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Jonatha Teixeira para oportunidades remotas e internacionais, projetos e soluções digitais.",
  alternates: {
    canonical: "/pt-br/contact",
    languages: {
      en: "/contact",
      "pt-BR": "/pt-br/contact",
    },
  },
};

export default function ContactPtBrPage() {
  return <ContactView locale="pt-br" />;
}
