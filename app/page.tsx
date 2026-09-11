import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { ContactDialog } from "@/components/contact-dialog";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <p className={styles.eyebrow}>Student · Builder · Always learning</p>
          <h1>
            Hi! I&apos;m Durand, and I like to <span>program.</span>
          </h1>
          <p className={styles.intro}>
            I build software projects, learn in public, and write down the useful parts along the way.
          </p>
          <div className={styles.heroLinks}>
            <Link className={styles.primary} href="/projects">
              See my work <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <ContactDialog triggerClassName={styles.secondary} />
          </div>
        </Container>
      </section>
    </main>
  );
}
