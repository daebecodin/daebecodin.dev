"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Check, Copy, Mail, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import styles from "./contact-dialog.module.css";

export function ContactDialog({ triggerClassName }: { triggerClassName?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
  }

  return (
    <Dialog.Root onOpenChange={(open) => !open && setCopied(false)}>
      <Dialog.Trigger className={triggerClassName}>
        <Mail size={16} aria-hidden="true" /> Get in touch
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close className={styles.close} aria-label="Close contact dialog">
            <X size={17} aria-hidden="true" />
          </Dialog.Close>

          <p className={styles.eyebrow}>Contact</p>
          <Dialog.Title className={styles.title}>Get in touch.</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Copy my email address or open a new message in your default email app.
          </Dialog.Description>

          <div className={styles.emailRow}>
            <span>{siteConfig.email}</span>
            <Tooltip.Provider delayDuration={250}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className={styles.copyButton} type="button" onClick={copyEmail} aria-label="Copy email address">
                    {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className={styles.tooltip} sideOffset={7}>
                    {copied ? "Copied!" : "Copy email address"}
                    <Tooltip.Arrow className={styles.tooltipArrow} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <p className={styles.status} aria-live="polite">
            {copied ? "Email address copied to your clipboard." : ""}
          </p>

          <Link className={styles.emailButton} href={`mailto:${siteConfig.email}`}>
            <Mail size={16} aria-hidden="true" /> Open email app
          </Link>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
