import styles from "./style.module.scss";

export const UnauthorizedError = () => {
  return (
    <div className={styles.body__container}>
      <div className={styles.error__container}>
        <h2 className={styles.title__2}>401</h2>
        <h3 className={styles.title__3}>Unauthorized</h3>
        <p>You do not have permission to view this directory or page using the credentials that ypi supplied.</p>
      </div>
    </div>
  );
};
