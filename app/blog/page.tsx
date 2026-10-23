import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from Durand on programming, projects, and what he is learning.",
};

export default async function BlogPage({ searchParams }: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = (typeof params.q === "string" ? params.q : "").trim().slice(0, 200);
  const posts = getAllPosts().filter((post) =>
    [post.title, post.description, ...post.tags].join(" ").toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Blog"
        title="Notes from the workbench."
        description="Programming notes, project write-ups, and useful things I learn along the way."
      />
      <Container className={`${styles.content} ${styles.narrow}`}>
        {query && <p className={styles.searchSummary} role="status">{posts.length} {posts.length === 1 ? "article" : "articles"} for “{query}”. <Link href="/blog">Clear search</Link></p>}
        <div className={styles.postList}>
          {posts.map((post) => <PostCard post={post} key={post.slug} />)}
          {!posts.length && <p className={styles.note}>{query ? "No matching articles. Try another title, topic, or tag." : "New notes are on the way."}</p>}
        </div>
      </Container>
    </main>
  );
}

