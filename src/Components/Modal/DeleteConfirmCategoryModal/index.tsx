import styles from "./styles.module.scss";
import { ControllerContentModalType } from "./@types";
import { useContext, useState } from "react";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";

export const DeleteConfirmCategoryModal = ({
  setDeleteConfirmCategoryIsOpen,
  categoryId,
}: ControllerContentModalType) => {
  const { deleteCategory } = useContext(TasksContext);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>Deseja excluir essa categoria?</h2>
        </div>
        <p className={styles.paragraph}>
          Caso aceite, essa categoria e todas as tarefa dela serão excluidas e
          não poderão ser recuperadas.
        </p>
        <div className={styles.btn__container}>
          <button
            onClick={() => {
              setDeleteConfirmCategoryIsOpen(false);
            }}
            className={styles.cancel__btn}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setDeleteConfirmCategoryIsOpen(false);
              deleteCategory(categoryId, setLoading);
            }}
            className={styles.confirm__btn}
            disabled={loading}
          >
            {loading ? "Carregando" : "Aceitar"}
          </button>
        </div>
      </div>
    </div>
  );
};
