import { z } from "zod";

export const formCreateCategorySchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
});
