import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { ProjectView } from "@/components/site/views";

export function generateStaticParams() {
  return content.en.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const project = content.en.projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectView locale="en" slug={slug} />;
}
