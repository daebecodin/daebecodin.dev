import Link from "next/link";
import { Container } from "./container";
import { navigation } from "@/lib/site";
import { ThemeMenu } from "./theme-menu";
import { MobileMenu } from "./mobile-menu";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="daebecodin home">
          daebecodin
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <MobileMenu />
          <ThemeMenu />
        </div>
      </Container>
    </header>
  );
}
