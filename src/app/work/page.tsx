import type { Metadata } from "next";
import { WorkView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects in learning, visual communication and digital products by Jonatha Teixeira.",
  alternates: {
    canonical: "/work",
    languages: {
      en: "/work",
      "pt-BR": "/pt-br/work",
    },
  },
};

export default function WorkPage() {
  return <WorkView locale="en" />;
}
