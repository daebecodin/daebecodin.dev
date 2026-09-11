import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from Durand on programming, projects, and what he is learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Blog"
        title="Notes from the workbench."
        description="Programming notes, project write-ups, and useful things I learn along the way."
      />
      <Container className={`${styles.content} ${styles.narrow}`}>
        <div className={styles.postList}>
          {posts.map((post) => <PostCard post={post} key={post.slug} />)}
        </div>
      </Container>
    </main>
  );
}
