import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Post = PostSummary & {
  content: string;
};

function isFrontmatter(value: unknown): value is PostFrontmatter {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.publishedAt === "string" &&
    Array.isArray(data.tags) &&
    data.tags.every((tag) => typeof tag === "string") &&
    typeof data.draft === "boolean"
  );
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post | null {
  const normalizedSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const filePath = path.join(postsDirectory, `${normalizedSlug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  if (!isFrontmatter(data)) {
    throw new Error(`Invalid frontmatter in content/blog/${normalizedSlug}.mdx`);
  }

  return {
    ...data,
    slug: normalizedSlug,
    content,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts({ includeDrafts = false } = {}): PostSummary[] {
  return getPostSlugs()
    .map(getPost)
    .filter((post): post is Post => Boolean(post))
    .filter((post) => includeDrafts || !post.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      tags: post.tags,
      draft: post.draft,
      readingTime: post.readingTime,
    }));
}

export type TableOfContentsItem = { id: string; title: string; level: 2 | 3 };

export function getTableOfContents(content: string): TableOfContentsItem[] {
  return Array.from(content.matchAll(/^(##|###)\s+(.+)$/gm)).map((match) => ({
    level: match[1].length as 2 | 3,
    title: match[2].trim(),
    id: match[2]
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }));
}
