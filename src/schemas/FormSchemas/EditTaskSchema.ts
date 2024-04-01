import { z } from "zod";

export const formEditTaskSchema = z.object({
  title: z.string().min(1, "É obrigatório que a tarefa tenha um nome"),
  content: z.string().min(1, "É obrigatório que a tarefa tenha um conteúdo"),
  categoryId: z.number().nullish(),
});
