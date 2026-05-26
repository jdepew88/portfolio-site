import styles from "./TerminalWindow.module.scss";

type TerminalWindowProps = {
  src: string;
  title?: string;
};

export function TerminalWindow({
  src,
  title = "joey_depew@portfolio: ~",
}: TerminalWindowProps) {
  return (
    <div className={styles.frame} role="region" aria-label="Interactive terminal bio">
      <div className={styles.titleBar}>
        <div className={styles.buttons} aria-hidden="true">
          <span className={`${styles.dot} ${styles.close}`} />
          <span className={`${styles.dot} ${styles.minimize}`} />
          <span className={`${styles.dot} ${styles.maximize}`} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.host}>bash</div>
      </div>
      <div className={styles.viewport}>
        <iframe
          className={styles.iframe}
          src={src}
          title="Joseph Depew command-line bio"
          loading="lazy"
        />
      </div>
    </div>
  );
}
