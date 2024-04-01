import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formCreateTaskSchema } from "../../../schemas/FormSchemas/CreateTaskSchema";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";
import { CreateTaskForm } from "../../TypesComponents/@types";
import { ControllerTaskModalType } from "./@types";

export const CreateTaskModal = ({
  setCreateTaskIsOpen,
  categoryId,
}: ControllerTaskModalType) => {
  const { createTask } = useContext(TasksContext);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskForm>({
    resolver: zodResolver(formCreateTaskSchema),
  });

  const submit = (payload: CreateTaskForm) => {
    createTask(
      { ...payload, categoryId: categoryId },
      setCreateTaskIsOpen,
      setLoading
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>Nova Tarefa</h2>
          <button
            onClick={() => {
              setCreateTaskIsOpen(false);
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
              {loading ? "Carregando" : "Criar Tarefa"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
