"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./theme-menu.module.css";

const options = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
] as const;

export function ThemeMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger} aria-label="Change color theme">
        <Sun className={styles.sun} aria-hidden="true" />
        <Moon className={styles.moon} aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={10} align="end">
          <DropdownMenu.Label className={styles.label}>Appearance</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={theme ?? "dark"} onValueChange={setTheme}>
            {options.map(({ value, label, icon: Icon }) => (
              <DropdownMenu.RadioItem className={styles.item} value={value} key={value}>
                <Icon size={15} aria-hidden="true" />
                <span>{label}</span>
                <DropdownMenu.ItemIndicator className={styles.indicator}>
                  <Check size={14} aria-hidden="true" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
