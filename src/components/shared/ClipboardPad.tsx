import React from 'react';
import styles from './ClipboardPad.module.css';

type ClipboardPadProps = {
  children: React.ReactNode;
};

export function ClipboardPad({ children }: ClipboardPadProps) {
  return (
    <div className={styles.board}>
      <div className={styles.clipWrapper}>
        <div className={styles.clipRing} />
        <div className={styles.clipBody} />
      </div>

      <div className={`${styles.stack} ${styles.back}`} aria-hidden />
      <div className={`${styles.stack} ${styles.mid}`} aria-hidden />

      <div className={styles.sheet}>
        <div className={styles.headerStrip} aria-hidden />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
