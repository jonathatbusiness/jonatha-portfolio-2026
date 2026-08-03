import type { Metadata } from "next";
import { AboutView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "About",
  description: "About Jonatha Teixeira, a multidisciplinary designer working across design, learning and technology.",
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      "pt-BR": "/pt-br/about",
    },
  },
};

export default function AboutPage() {
  return <AboutView locale="en" />;
}
