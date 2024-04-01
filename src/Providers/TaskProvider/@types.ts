import { z } from "zod";
import {
  categoryReturnSchema,
  categoryCreateSchema,
  taskCreateSchema,
  taskUpdateSchema,
  taskReturnSchema,
  taskReturnCategorySchema,
} from "../../schemas/TaskProviderSchema";

export interface UserContextInterface {
  createCategory: (
    payload: CategoryCreate,
    setCreateCategoryIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  renderCategories: () => Promise<void>;

  deleteCategory: (
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  createTask: (
    payload: TaskCreate,
    setCreateCategoryIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  readTasks: () => Promise<void>;

  updateTask: (
    payload: TaskUpdate,
    setEditTaskIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  deleteTask: (
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  categories: {
    id: number;
    name: string;
  }[];

  tasks: {
    title: string;
    content: string;
    id: number;
    finished: boolean;
    category: {
      name: string;
      id: number;
    };
  }[];
}

export type CategoryReturn = z.infer<typeof categoryReturnSchema>;
export type CategoryCreate = z.infer<typeof categoryCreateSchema>;
export type TaskCreate = z.infer<typeof taskCreateSchema>;
export type TaskUpdate = z.infer<typeof taskUpdateSchema>;
export type TaskReturn = z.infer<typeof taskReturnSchema>;
export type TaskReturnCategory = z.infer<typeof taskReturnCategorySchema>;
