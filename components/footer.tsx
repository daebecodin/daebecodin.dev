import Link from "next/link";
import { Container } from "./container";
import { SocialLinks } from "./social-links";
import { siteConfig } from "@/lib/site";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>© {new Date().getFullYear()} Durand · {siteConfig.name}.dev</p>
        <SocialLinks />
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
      </Container>
    </footer>
  );
}
