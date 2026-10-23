import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "./container";
import { navigation } from "@/lib/site";
import { ThemeMenu } from "./theme-menu";
import { MobileMenu } from "./mobile-menu";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div>
          <Link className={styles.brand} href="/" aria-label="daebecodin home">daebecodin</Link>
          <p className={styles.tagline}>Programming, projects, and notes along the way.</p>
        </div>
        <div className={styles.actions}><MobileMenu /><ThemeMenu /></div>
        <nav className={styles.nav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <form className={styles.search} action="/blog" method="get" role="search">
          <label className="sr-only" htmlFor="site-search">Search articles</label>
          <input id="site-search" name="q" type="search" placeholder="Search articles…" maxLength={200} />
          <button type="submit" aria-label="Search articles"><Search size={17} aria-hidden="true" /></button>
        </form>
      </Container>
    </header>
  );
}

