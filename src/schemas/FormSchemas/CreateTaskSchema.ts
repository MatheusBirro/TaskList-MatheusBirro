import { z } from "zod";

export const formCreateTaskSchema = z.object({
  title: z.string().min(1, "Nome da tarefa é obrigatório"),
  content: z.string().min(1, "Conteúdo da tarefa é obrigatório"),
  categoryId: z.number().nullish(),
});
