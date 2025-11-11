import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>El Gallo</h1>
      <h3>Lotería para todos</h3>
    </header>
  );
};
