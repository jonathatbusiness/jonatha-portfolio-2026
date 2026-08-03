import type { Metadata } from "next";
import { ExpertiseView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Instructional Design, Visual Design and Digital Products connected by one problem-solving approach.",
  alternates: {
    canonical: "/expertise",
    languages: {
      en: "/expertise",
      "pt-BR": "/pt-br/expertise",
    },
  },
};

export default function ExpertisePage() {
  return <ExpertiseView locale="en" />;
}
