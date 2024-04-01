import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  UserAutoLoginRes,
  UserContextInterface,
  UserLoginReq,
  UserLoginRes,
  UserRegisterReq,
  UserRegisterRes,
} from "./@types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({} as UserContextInterface);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [adminProfile, setAdminProfile] = useState<UserAutoLoginRes | null>(
    null
  );
  const [protectedRouter, setProtectedRouter] = useState<UserLoginRes | null>(
    null
  );
  const url = "https://kenzie-academy-brasil-developers-m5-5gcq.onrender.com";

  const UserLogin = async (
    payload: UserLoginReq,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await axios.post<UserLoginRes>(
        `${url}/users/login`,
        payload
      );
      setProtectedRouter(data);
      localStorage.setItem("@tokenUserTask", JSON.stringify(data.accessToken));
      navigate("/task");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data.message === "Email and password doesn't match"
        ) {
          toast.warning("Email ou senha incorreto");
        } else if (error.response?.data.message === "User not exists") {
          toast.warning("Email não existe");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const UserAutoLogin = async () => {
    const tokenUser: string = JSON.parse(
      localStorage.getItem("@tokenUserTask") || '""'
    );
    try {
      const { data } = await axios.get<UserAutoLoginRes>(
        `${url}/users/profile`,
        { headers: { Authorization: `Bearer ${tokenUser}` } }
      );
      setAdminProfile(data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/error401");
        }
      }
      return null;
    }
  };

  const UserRegister = async (
    payload: UserRegisterReq,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await axios.post<UserRegisterRes>(`${url}/users`, payload);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data.message === "This email is already registered"
        ) {
          toast.warning("Email já cadastrado");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        UserRegister,
        UserAutoLogin,
        UserLogin,
        adminProfile,
        protectedRouter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
