import { z } from "zod";
import {
  loginApiSchema,
  loginReturnSchema,
  autoLoginReturnSchema,
} from "../../schemas/UserProviderSchemas/LoginUserSchema";
import {
  registerApiSchema,
  registerReturnSchema,
} from "../../schemas/UserProviderSchemas/RegisterUserSchema";

export interface UserContextInterface {
  UserLogin: (
    payload: UserLoginReq,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  UserAutoLogin: () => Promise<{
    email: string;
    name: string;
    id: number;
  } | null>;

  UserRegister: (
    payload: UserRegisterReq,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  adminProfile: {
    id: number;
    name: string;
    email: string;
  } | null;

  protectedRouter: {
    accessToken: string;
    user: {
      email: string;
      name: string;
      id: number;
    };
  } | null;
}

export type UserRegisterReq = z.infer<typeof registerApiSchema>;
export type UserRegisterRes = z.infer<typeof registerReturnSchema>;
export type UserLoginReq = z.infer<typeof loginApiSchema>;
export type UserLoginRes = z.infer<typeof loginReturnSchema>;
export type UserAutoLoginRes = z.infer<typeof autoLoginReturnSchema>;
