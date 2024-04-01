import React, { createContext, useState } from "react";
import axios from "axios";
import {
  CategoryReturn,
  TaskReturn,
  CategoryCreate,
  TaskCreate,
  TaskUpdate,
  UserContextInterface,
  TaskReturnCategory,
} from "./@types";
import { useNavigate } from "react-router-dom";

export const TasksContext = createContext({} as UserContextInterface);

type TasksProviderProps = {
  children: React.ReactNode;
};

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [categories, setCategories] = useState<CategoryReturn[]>([]);
  const [tasks, setTasks] = useState<TaskReturnCategory[]>([]);
  const url = "https://kenzie-academy-brasil-developers-m5-5gcq.onrender.com";
  const navigate = useNavigate();

  const createCategory = async (
    payload: CategoryCreate,
    setCreateCategoryIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      setLoading(true);
      await axios.post<CategoryReturn>(`${url}/categories`, payload, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      await renderCategories();
      setCreateCategoryIsOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const renderCategories = async () => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      const { data } = await axios.get<CategoryReturn[]>(`${url}/categories`, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      setCategories(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    }
  };

  const deleteCategory = async (
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      setLoading(true);
      await axios.delete(`${url}/categories/${id}`, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      await renderCategories();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (
    payload: TaskCreate,
    setCreateCategoryIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      setLoading(true);
      await axios.post<TaskReturn>(`${url}/tasks`, payload, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      await readTasks();
      setCreateCategoryIsOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const readTasks = async () => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      const { data } = await axios.get<TaskReturnCategory[]>(`${url}/tasks`, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      setTasks(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    }
  };

  const updateTask = async (
    payload: TaskUpdate,
    setEditTaskIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      setLoading(true);
      await axios.patch<TaskReturn>(`${url}/tasks/${id}`, payload, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      setEditTaskIsOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      setLoading(true);
      await axios.delete(`${url}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      });
      await readTasks();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        createCategory,
        renderCategories,
        deleteCategory,
        categories,
        createTask,
        readTasks,
        updateTask,
        deleteTask,
        tasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
