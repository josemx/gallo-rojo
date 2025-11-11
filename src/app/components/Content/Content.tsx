import styles from './Content.module.css';

export const Content = () => {
  return (
    <section className={styles.content}>
      <a href="#/join" className={`${styles['boton-picado']} ${styles.join}`}>
        Join
      </a>
      <a href="#/host" className={`${styles['boton-picado']} ${styles.host}`}>
        Host
      </a>
    </section>
  );
};
