import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { SkillGrid } from "@/components/skill-grid";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Durand, a computer science student and software builder at San Francisco State University.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="About"
        title="Learning by building."
        description="I am Durand, a computer science student interested in the systems beneath the interface."
      />
      <Container className={styles.content}>
        <section className={styles.story} aria-labelledby="about-story">
          <p className={styles.label}>A little about me</p>
          <div>
            <h2 id="about-story">Curious about how software works — and how it breaks.</h2>
            <p>
              I build projects to turn ideas into practical experience. Right now, I am especially interested in game security, reverse engineering, and aim training.
            </p>
            <p>
              I am currently learning more about the Windows API and modern C++. This site is where I share the projects and notes that come out of that process.
            </p>
          </div>
        </section>

        <section className={styles.education} aria-labelledby="education-heading">
          <p className={styles.label}>Education</p>
          <div className={styles.educationCard}>
            <div>
              <h2 id="education-heading">San Francisco State University</h2>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <span>Expected 2027</span>
            <p className={styles.club}>Game Development Club</p>
            <p className={styles.club}>Hardware Engineering Club</p>
          </div>
        </section>

        <section className={styles.skills} aria-labelledby="skills-heading">
          <div className={styles.sectionTitle}>
            <p className={styles.label}>Skills & tools</p>
            <h2 id="skills-heading">What I work with</h2>
          </div>
          <SkillGrid />
        </section>

        <section className={styles.contact} aria-labelledby="contact-heading">
          <div>
            <p className={styles.label}>Contact</p>
            <h2 id="contact-heading">Have something in mind?</h2>
            <p>I am always open to meeting people, learning about opportunities, and talking through interesting software.</p>
          </div>
          <div className={styles.contactLinks}>
            <Link href={`mailto:${siteConfig.email}`}><Mail size={16} aria-hidden="true" /> Email me</Link>
            <SocialLinks />
            <Link className={styles.external} href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
