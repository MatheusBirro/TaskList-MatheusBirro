import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <p>
        Direitos Autorais
        <a href="https://github.com/MatheusBirro"> @Matheus Birro</a>
      </p>
    </footer>
  );
};
