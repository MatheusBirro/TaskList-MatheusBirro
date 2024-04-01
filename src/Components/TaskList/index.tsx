import styles from "./style.module.scss";
import plusBtn from "../../assets/PlusBtn.svg";
import { useContext, useEffect, useState } from "react";
import { CreateCategoryModal } from "../Modal/CreateCategoyModal";
import { TasksContext } from "../../Providers/TaskProvider/TaskProvider";
import { CategoryCard } from "./CategoryCard";
import { CategoryReturn } from "../../Providers/TaskProvider/@types";

export const TaskList = () => {
  const [createCategoryIsOpen, setCreateCategoryIsOpen] =
    useState<boolean>(false);

  const { renderCategories, categories } = useContext(TasksContext);

  useEffect(() => {
    renderCategories();
  }, []);

  return (
    <section className={styles.homepage__body}>
      <div className={styles.btn__container_category}>
        <div
          className={styles.btn__category}
          onClick={() => {
            setCreateCategoryIsOpen(true);
          }}
        >
          <img src={plusBtn} alt="" />
          <button className={styles.add__btn_category}>Nova Categoria</button>
        </div>
      </div>
      {createCategoryIsOpen ? (
        <CreateCategoryModal
          setCreateCategoryIsOpen={setCreateCategoryIsOpen}
        />
      ) : null}
      {categories.map((category: CategoryReturn) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </section>
  );
};
