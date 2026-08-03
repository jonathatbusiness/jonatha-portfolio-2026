import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { ProjectView } from "@/components/site/views";

export function generateStaticParams() {
  return content.en.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Readonly<{ params: Promise<{ slug: string }> }>): Promise<Metadata> {
  const { slug } = await params;
  const project = content.en.projects.find((item) => item.slug === slug);

  if (!project) return {};

  const title = project.seo?.title ?? project.title;
  const description = project.seo?.description ?? project.summary;
  const image = project.coverImage ?? "/og-image.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${slug}`,
      languages: {
        en: `/work/${slug}`,
        "pt-BR": `/pt-br/work/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/work/${slug}`,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const project = content.en.projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectView locale="en" slug={slug} />;
}
