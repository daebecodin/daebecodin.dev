import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPostContent } from "@/components/blog-post-content";
import { Container } from "@/components/container";
import { formatPostDate } from "@/components/post-card";
import { getAllPosts, getPost, getTableOfContents } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post || post.draft) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post || post.draft) notFound();

  const posts = getAllPosts();
  const postIndex = posts.findIndex((item) => item.slug === post.slug);
  const newerPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const olderPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const tableOfContents = getTableOfContents(post.content);

  return (
    <main id="main-content">
      <Container className={styles.layout}>
        <article className={styles.article}>
          <Link className={styles.back} href="/blog"><ArrowLeft size={14} aria-hidden="true" /> All notes</Link>
          <header className={styles.header}>
            <div className={styles.meta}>
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <ul aria-label="Article tags">
              {post.tags.map((tag) => <li key={tag}>#{tag}</li>)}
            </ul>
          </header>

          {tableOfContents.length >= 3 && (
            <nav className={styles.mobileToc} aria-label="Table of contents">
              <p>In this note</p>
              <ol>
                {tableOfContents.map((item) => (
                  <li data-level={item.level} key={item.id}><Link href={`#${item.id}`}>{item.title}</Link></li>
                ))}
              </ol>
            </nav>
          )}

          <div className={styles.prose}>
            <BlogPostContent source={post.content} />
          </div>

          <footer className={styles.articleFooter}>
            <p>Thanks for reading.</p>
            <Link href={`mailto:${siteConfig.email}`}>Have a question? Send me a note.</Link>
          </footer>

          {(newerPost || olderPost) && (
            <nav className={styles.postNav} aria-label="More articles">
              {olderPost ? (
                <Link href={`/blog/${olderPost.slug}`}><span>Older</span>{olderPost.title}</Link>
              ) : <span />}
              {newerPost && (
                <Link href={`/blog/${newerPost.slug}`}><span>Newer</span>{newerPost.title}<ArrowRight size={14} aria-hidden="true" /></Link>
              )}
            </nav>
          )}
        </article>

        {tableOfContents.length >= 3 && (
          <aside className={styles.toc}>
            <nav aria-label="Table of contents">
              <p>In this note</p>
              <ol>
                {tableOfContents.map((item) => (
                  <li data-level={item.level} key={item.id}><Link href={`#${item.id}`}>{item.title}</Link></li>
                ))}
              </ol>
            </nav>
          </aside>
        )}
      </Container>
    </main>
  );
}
