import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonathateixeira.com"),
  title: {
    default: "Jonatha Teixeira — Multidisciplinary Designer",
    template: "%s | Jonatha Teixeira",
  },
  description:
    "Portfolio of Jonatha Teixeira, a multidisciplinary designer working across Instructional Design, Visual Design and digital products with technology and AI-assisted workflows.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/pt-br",
    },
  },
  openGraph: {
    title: "Jonatha Teixeira — Multidisciplinary Designer",
    description:
      "Digital experiences across learning, visual communication and digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
