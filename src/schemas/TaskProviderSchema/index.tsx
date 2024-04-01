import { z } from "zod";

export const categoryReturnSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const categoryCreateSchema = z.object({
  name: z.string(),
});

export const taskCreateSchema = z.object({
  title: z.string(),
  content: z.string(),
  categoryId: z.number().nullish(),
});

export const taskUpdateSchema = taskCreateSchema.partial();

export const taskReturnSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  finished: z.boolean(),
  userId: z.number(),
  categoryId: z.number().nullish(),
});

export const taskReturnCategorySchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  finished: z.boolean(),
  category: z.object({
    id: z.number(),
    name: z.string(),
  }),
});
