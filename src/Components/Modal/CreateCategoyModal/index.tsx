import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formCreateCategorySchema } from "../../../schemas/FormSchemas/CreateCategorySchema copy";
import { TasksContext } from "../../../Providers/TaskProvider/TaskProvider";
import { CreateCategoryForm } from "../../TypesComponents/@types";
import { ControllerCategoryModalType } from "./@types";

export const CreateCategoryModal = ({
  setCreateCategoryIsOpen,
}: ControllerCategoryModalType) => {
  const { createCategory } = useContext(TasksContext);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryForm>({
    resolver: zodResolver(formCreateCategorySchema),
  });

  const submit = async (payload: CreateCategoryForm) => {
    await createCategory(payload, setCreateCategoryIsOpen, setLoading);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.header__container}>
          <h2 className={styles.title__2}>Nova Categoria</h2>
          <button
            onClick={() => {
              setCreateCategoryIsOpen(false);
            }}
            className={styles.close__btn}
          >
            X
          </button>
        </div>
        <form className={styles.category__form} onSubmit={handleSubmit(submit)}>
          <input type="name" placeholder="Nome" {...register("name")} />
          {errors.name ? <small>{errors.name.message}</small> : null}
          <div className={styles.btn__container}>
            <button className={styles.btn__create} type="submit" disabled={loading}>
              {loading? "Carregando":"Criar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
