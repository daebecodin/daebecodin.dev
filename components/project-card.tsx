import { ArrowUpRight, BookOpen, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./project-card.module.css";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    new Date(`${date}T12:00:00`),
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      {project.image && (
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={project.image.src}
            alt={project.image.alt}
            width={2286}
            height={977}
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{formatDate(project.publishedAt)}</span>
          <span aria-hidden="true">·</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className={styles.tags} aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveLabel ?? "View project"}
              <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={15} />
              GitHub
            </Link>
          )}
          {project.articleSlug && (
            <Link href={`/blog/${project.articleSlug}`}>
              <BookOpen aria-hidden="true" size={15} />
              Build notes
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
