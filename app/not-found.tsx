import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <p>404</p>
      <h1>This page wandered off.</h1>
      <Link href="/"><ArrowLeft size={15} aria-hidden="true" /> Back home</Link>
    </main>
  );
}
