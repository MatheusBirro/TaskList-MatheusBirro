import styles from "./style.module.scss";

export const DefaultBody = () => {
  return (
    <div className={styles.body__container}>
      <h2 className={styles.title__2}>
        Cadastre-se para fazer sua lista de tarefas
      </h2>
    </div>
  );
};
