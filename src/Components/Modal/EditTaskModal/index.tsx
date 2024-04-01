import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formEditTaskSchema } from "../../../schemas/FormSchemas/EditTaskSchema";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";
import { EditTaskForm } from "../../TypesComponents/@types";
import { ControllerUpdateTaskModalType } from "./@types";

export const EditTaskModal = ({
  setEditTaskIsOpen,
  task,
}: ControllerUpdateTaskModalType) => {
  const { updateTask, readTasks } = useContext(TasksContext);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTaskForm>({
    values: {
      title: task.title,
      content: task.content,
    },
    resolver: zodResolver(formEditTaskSchema),
  });

  const submit = async (payload: EditTaskForm) => {
    await updateTask(payload, setEditTaskIsOpen, task.id, setLoading);
    readTasks();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>Alterando Tarefa</h2>
          <button
            onClick={() => {
              setEditTaskIsOpen(false);
            }}
            className={styles.close__btn}
          >
            X
          </button>
        </div>
        <form className={styles.category__form} onSubmit={handleSubmit(submit)}>
          <input type="title" placeholder="Título" {...register("title")} />
          {errors.title ? <small>{errors.title.message}</small> : null}
          <textarea
            placeholder="Conteúdo"
            {...register("content")}
            className={styles.category__content}
          />
          {errors.content ? <small>{errors.content.message}</small> : null}
          <div className={styles.btn__container}>
            <button
              className={styles.btn__create}
              type="submit"
              disabled={loading}
            >
              {loading ? "Carregando" : "Editar Tarefa"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
