import styles from "./styles.module.scss";
import { ControllerContentModalType } from "./@types";

export const ContentTaskModal = ({
  setContentTaskIsOpen,
  task,
}: ControllerContentModalType) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>{task.title}</h2>
          <button
            onClick={() => {
              setContentTaskIsOpen(false);
            }}
            className={styles.close__btn}
          >
            X
          </button>
        </div>
        <p className={styles.task__content}>{task.content}</p>
      </div>
    </div>
  );
};
