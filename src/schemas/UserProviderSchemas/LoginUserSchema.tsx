import { z } from "zod";

export const loginReturnSchema = z.object({
  accessToken: z.string(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
  }),
});

export const autoLoginReturnSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const loginApiSchema = z.object({
  email: z.string(),
  password: z.string(),
});
