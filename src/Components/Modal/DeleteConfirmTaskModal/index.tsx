import styles from "./styles.module.scss";
import { ControllerContentModalType } from "./@types";
import { useContext, useState } from "react";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";

export const DeleteConfirmTaskModal = ({
  setDeleteConfirmTaskIsOpen,
  task,
}: ControllerContentModalType) => {
  const { deleteTask } = useContext(TasksContext);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>Deseja excluir essa tarefa?</h2>
        </div>
        <p className={styles.paragraph}>
          Caso aceite, essa tarefa será excluida e não poderá ser recuperada.
        </p>
        <div className={styles.btn__container}>
          <button
            onClick={() => {
              setDeleteConfirmTaskIsOpen(false);
            }}
            className={styles.cancel__btn}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setDeleteConfirmTaskIsOpen(false);
              deleteTask(task.id, setLoading);
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
