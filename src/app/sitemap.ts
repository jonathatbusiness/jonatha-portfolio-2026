import type { MetadataRoute } from "next";
import { content } from "@/lib/content";

const siteUrl = "https://jonathateixeira.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/contact"];
  const localizedStaticRoutes = ["/pt-br", "/pt-br/work", "/pt-br/about", "/pt-br/contact"];
  const projectRoutes = content.en.projects.flatMap((project) => [`/work/${project.slug}`, `/pt-br/work/${project.slug}`]);

  return [...staticRoutes, ...localizedStaticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/work/") ? "monthly" : "weekly",
    priority: route === "" || route === "/pt-br" ? 1 : 0.8,
  }));
}
