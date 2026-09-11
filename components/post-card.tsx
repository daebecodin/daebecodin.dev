import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostSummary } from "@/lib/posts";
import styles from "./post-card.module.css";

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`}>
        <div className={styles.meta}>
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <div className={styles.titleRow}>
          <h3>{post.title}</h3>
          <ArrowUpRight size={19} aria-hidden="true" />
        </div>
        <p>{post.description}</p>
        <ul aria-label="Article tags">
          {post.tags.map((tag) => <li key={tag}>#{tag}</li>)}
        </ul>
      </Link>
    </article>
  );
}
