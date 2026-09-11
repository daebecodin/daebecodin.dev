import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main id="main-content" className={styles.page}>
      <p>soon enough</p>
    </main>
  );
}
