import { z } from "zod";
import { formLoginSchema } from "../../schemas/FormSchemas/LoginFormSchema";
import { formCreateCategorySchema } from "../../schemas/FormSchemas/CreateCategorySchema copy";
import { formCreateTaskSchema } from "../../schemas/FormSchemas/CreateTaskSchema";
import { formEditTaskSchema } from "../../schemas/FormSchemas/EditTaskSchema";
import { formRegisterSchema } from "../../schemas/FormSchemas/RegisterFormSchema";
import { taskReturnSchema } from "../../schemas/TaskProviderSchema";
import { registerApiSchema } from "../../schemas/UserProviderSchemas/RegisterUserSchema";

export type LoginReqForm = z.infer<typeof formLoginSchema>;
export type RegisterReqForm = z.infer<typeof formRegisterSchema>;
export type RegisterApiForm = z.infer<typeof registerApiSchema>;
export type CreateCategoryForm = z.infer<typeof formCreateCategorySchema>;
export type CreateTaskForm = z.infer<typeof formCreateTaskSchema>;
export type EditTaskForm = z.infer<typeof formEditTaskSchema>;
export type TaskReturn = z.infer<typeof taskReturnSchema>;
