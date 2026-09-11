import Link from "next/link";
import { siteConfig } from "@/lib/site";
import styles from "./social-links.module.css";

const links = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export function SocialLinks() {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link href={link.href} key={link.label} target="_blank" rel="noreferrer">
          {link.label}<span className="sr-only"> (opens in a new tab)</span>
        </Link>
      ))}
    </div>
  );
}
