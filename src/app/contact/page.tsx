import type { Metadata } from "next";
import { ContactView } from "@/components/site/views";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jonatha Teixeira for remote and international opportunities, projects and digital solutions.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      "pt-BR": "/pt-br/contact",
    },
  },
};

export default function ContactPage() {
  return <ContactView locale="en" />;
}
