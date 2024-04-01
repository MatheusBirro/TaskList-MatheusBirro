import { z } from "zod";

export const registerReturnSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const registerApiSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
