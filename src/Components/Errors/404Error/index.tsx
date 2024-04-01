import styles from "./style.module.scss";

export const NotFoundError = () => {
  return (
    <div className={styles.body__container}>
      <div className={styles.error__container}>
        <h2 className={styles.title__2}>404</h2>
        <h3 className={styles.title__3}>Not Found</h3>
        <p>The resource requested could not be found on this server!</p>
      </div>
    </div>
  );
};
