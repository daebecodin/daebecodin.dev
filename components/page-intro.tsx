import { Container } from "./container";
import styles from "./page-intro.module.css";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <Container>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div className={styles.rule} />
        <span>{description}</span>
      </Container>
    </header>
  );
}
