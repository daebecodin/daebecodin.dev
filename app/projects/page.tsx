import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects designed and built by Durand.",
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Projects"
        title="Work that made me better."
        description="A growing collection of software I have designed, built, and learned from — newest first."
      />
      <Container className={styles.content}>
        <div className={styles.projectList}>
          {sortedProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </Container>
    </main>
  );
}
