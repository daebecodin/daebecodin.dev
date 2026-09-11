"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/lib/site";
import styles from "./mobile-menu.module.css";

export function MobileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger} aria-label="Open navigation">
        <Menu size={17} aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={10} align="end">
          <DropdownMenu.Label className={styles.label}>Navigate</DropdownMenu.Label>
          {navigation.map((item) => (
            <DropdownMenu.Item asChild key={item.href}>
              <Link className={styles.item} href={item.href}>{item.label}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
