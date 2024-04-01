import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CreateTaskModal } from "../../Modal/CreateTaskModal";
import plusBtn from "../../../assets/PlusBtn.svg";
import { TaskCard } from "./TaskCard";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";
import { CategoryCardInterface } from "./@types";
import { TaskReturnCategory } from "../../../Providers/TaskProvider/@types";
import { DeleteConfirmCategoryModal } from "../../Modal/DeleteConfirmCategoryModal";

export const CategoryCard = ({ category }: CategoryCardInterface) => {
  const [createTaskIsOpen, setCreateTaskIsOpen] = useState<boolean>(false);
  const [deleteConfirmCategoryIsOpen, setDeleteConfirmCategoryIsOpen] =
    useState<boolean>(false);

  const { tasks, readTasks } =
    useContext(TasksContext);

  useEffect(() => {
    readTasks();
  }, []);

  return (
    <ul className={styles.tasklist__container}>
      <div className={styles.header__category}>
        <h2 className={styles.tasklist__category}>{category.name}</h2>
        <button
          className={styles.delete__category}
          onClick={async () => {
            setDeleteConfirmCategoryIsOpen(true);
          }}
        >
          x
        </button>
      </div>
      {deleteConfirmCategoryIsOpen ? (
        <DeleteConfirmCategoryModal
          setDeleteConfirmCategoryIsOpen={setDeleteConfirmCategoryIsOpen}
          categoryId={category.id}
        />
      ) : null}
      {tasks.map((task: TaskReturnCategory) => {
        if (task.category.id === category.id) {
          return <TaskCard key={task.id} task={task} />;
        }
      })}
      <div className={styles.btn__container_task}>
        <div
          className={styles.btn__body}
          onClick={() => setCreateTaskIsOpen(true)}
        >
          <img src={plusBtn} alt="" />
          <button className={styles.add__btn_task}>Nova Tarefa</button>
        </div>
      </div>
      {createTaskIsOpen ? (
        <CreateTaskModal
          setCreateTaskIsOpen={setCreateTaskIsOpen}
          categoryId={category.id}
        />
      ) : null}
    </ul>
  );
};
