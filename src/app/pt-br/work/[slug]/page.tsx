import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { ProjectView } from "@/components/site/views";

export function generateStaticParams() {
  return content["pt-br"].projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPtBrPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const project = content["pt-br"].projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectView locale="pt-br" slug={slug} />;
}
