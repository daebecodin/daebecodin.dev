import { skillGroups } from "@/lib/profile";
import styles from "./skill-grid.module.css";

export function SkillGrid() {
  return (
    <div className={styles.grid}>
      {skillGroups.map((group) => (
        <section className={styles.group} key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
