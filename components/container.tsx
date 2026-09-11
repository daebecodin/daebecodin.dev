import type { ComponentProps } from "react";
import styles from "./container.module.css";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={[styles.container, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
