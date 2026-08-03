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
  applicationName: "Jonatha Teixeira Portfolio",
  creator: "Jonatha Teixeira",
  publisher: "Jonatha Teixeira",
  authors: [{ name: "Jonatha Teixeira", url: "https://jonathateixeira.com" }],
  category: "portfolio",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "mask-icon", url: "/Logo.png", color: "#23395B" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Jonatha Teixeira",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Jonatha Teixeira — Multidisciplinary Designer",
    description:
      "Digital experiences across learning, visual communication and digital products.",
    url: "/",
    siteName: "Jonatha Teixeira Portfolio",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jonatha Teixeira — Multidisciplinary Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonatha Teixeira — Multidisciplinary Designer",
    description:
      "Digital experiences across learning, visual communication and digital products.",
    images: ["/og-image.png"],
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
