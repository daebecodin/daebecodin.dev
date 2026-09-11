import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  id?: string;
  link?: { href: string; label: string };
};

export function SectionHeading({ index, eyebrow, title, id, link }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div>
        <p>{index} / {eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {link && (
        <Link href={link.href}>{link.label} <ArrowRight size={15} aria-hidden="true" /></Link>
      )}
    </div>
  );
}
