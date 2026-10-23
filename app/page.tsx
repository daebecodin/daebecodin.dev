import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { ContactDialog } from "@/components/contact-dialog";
import { PostCard } from "@/components/post-card";
import { ProjectCard } from "@/components/project-card";
import { getAllPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);
  const projects = getFeaturedProjects(2);
  return (
    <main id="main-content" className={styles.page}>
      <Container>
        <section className={styles.hero} aria-labelledby="intro-heading">
          <p className={styles.eyebrow}>Student · Builder · Always learning</p>
          <h1 id="intro-heading">
            Hi! I&apos;m Durand, and I like to <span>program.</span>
          </h1>
          <p className={styles.intro}>
            I build software projects, learn in public, and write down the useful parts along the way.
          </p>
          <div className={styles.heroLinks}>
            <Link className={styles.primary} href="/projects">
              See my work <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a className={styles.secondary} href="/Resume.pdf" download>
              Resume
            </a>
            <ContactDialog triggerClassName={styles.secondary} />
          </div>
        </section>
        <section className={styles.section} aria-labelledby="latest-heading">
          <div className={styles.sectionHeading}>
            <h2 id="latest-heading">Latest writing</h2>
            <Link href="/blog">All articles →</Link>
          </div>
          {posts.length ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <p className={styles.empty}>New notes are on the way.</p>}
        </section>
        <section className={styles.section} aria-labelledby="projects-heading">
          <div className={styles.sectionHeading}>
            <h2 id="projects-heading">From the workbench</h2>
            <Link href="/projects">All projects →</Link>
          </div>
          <div className={styles.projectList}>
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
      </Container>
    </main>
  );
}

