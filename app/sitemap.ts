import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/blog", "/about", "/experience"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [...routes, ...posts];
}
