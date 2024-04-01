import { useState } from "react";
import styles from "./style.module.scss";
import editBtn from "../../../../assets/EditBtn.svg";
import deleteBtn from "../../../../assets/DeleteBtn.svg";
import { EditTaskModal } from "../../../Modal/EditTaskModal";
import { TaskCardInterface } from "./@types";
import { ContentTaskModal } from "../../../Modal/ContentTaskModal";
import { DeleteConfirmTaskModal } from "../../../Modal/DeleteConfirmTaskModal";

export const TaskCard = ({ task }: TaskCardInterface) => {
  const [editTaskIsOpen, setEditTaskIsOpen] = useState<boolean>(false);
  const [contentTaskIsOpen, setContentTaskIsOpen] = useState<boolean>(false);
  const [deleteConfirmTaskIsOpen, setDeleteConfirmTaskIsOpen] =
    useState<boolean>(false);

  return (
    <li className={styles.task__container}>
      <p
        className={styles.task__name}
        onClick={() => {
          setContentTaskIsOpen(true);
        }}
      >
        {task.title}
      </p>
      {contentTaskIsOpen ? (
        <ContentTaskModal
          setContentTaskIsOpen={setContentTaskIsOpen}
          task={task}
        />
      ) : null}
      <div className={styles.button__container}>
        <button
          className={styles.task__button}
          onClick={() => {
            setEditTaskIsOpen(true);
          }}
        >
          <img className={styles.button__img} src={editBtn} alt="" />
        </button>
        {editTaskIsOpen ? (
          <EditTaskModal setEditTaskIsOpen={setEditTaskIsOpen} task={task} />
        ) : null}
        <button
          className={styles.task__button}
          onClick={() => {
            setDeleteConfirmTaskIsOpen(true);
          }}
        >
          <img className={styles.button__img} src={deleteBtn} alt="" />
        </button>
        {deleteConfirmTaskIsOpen ? (
            <DeleteConfirmTaskModal
              setDeleteConfirmTaskIsOpen={setDeleteConfirmTaskIsOpen}
              task={task}
            />
          ) : null}
      </div>
    </li>
  );
};
