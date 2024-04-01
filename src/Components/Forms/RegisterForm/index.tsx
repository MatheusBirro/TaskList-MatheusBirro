import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "../../../schemas/FormSchemas/RegisterFormSchema";
import { UserContext } from "../../../Providers/UserProvider/UserProvider";
import { useContext, useState } from "react";
import { RegisterReqForm, RegisterApiForm } from "../../TypesComponents/@types";

export const RegisterForm = () => {
  const { UserRegister } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterReqForm>({
    resolver: zodResolver(formRegisterSchema),
  });

  const submit = (payload: RegisterApiForm) => {
    UserRegister({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      
    },setLoading);
  };

  return (
    <div className={styles.container__form}>
      <h2 className={styles.title__2}>Entrar</h2>
      <form className={styles.login__form} onSubmit={handleSubmit(submit)}>
        <input type="name" placeholder="NOME" {...register("name")} />
        {errors.name ? <small>{errors.name.message}</small> : null}
        <input type="email" placeholder="EMAIL" {...register("email")} />
        {errors.email ? <small>{errors.email.message}</small> : null}
        <input type="password" placeholder="SENHA" {...register("password")} />
        {errors.password ? <small>{errors.password.message}</small> : null}
        <input
          type="password"
          placeholder="CONFIRMAR SENHA"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword ? (
          <small>{errors.confirmPassword.message}</small>
        ) : null}

        <div className={styles.btn__container}>
          <button className={styles.btn__login} type="submit" disabled={loading}>
            {loading? "Carregando" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
