import styles from './Content.module.css';

export const Content = () => {
  return (
    <section className={styles.content}>
      <a
        className={`${styles['boton-picado']} ${styles.join}`}
        href="#/join"
        tabIndex={0}
      >
        Join
      </a>
      <a
        className={`${styles['boton-picado']} ${styles.host}`}
        href="#/host"
        tabIndex={0}
      >
        Host
      </a>
    </section>
  );
};
