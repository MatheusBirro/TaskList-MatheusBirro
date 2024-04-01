import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "../../../schemas/FormSchemas/LoginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../Providers/UserProvider/UserProvider";
import { LoginReqForm } from "../../TypesComponents/@types";

export const LoginForm = () => {
  const { UserLogin } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginReqForm>({
    resolver: zodResolver(formLoginSchema),
  });

  const submit = (payload: LoginReqForm) => {
    UserLogin(payload, setLoading);
  };

  return (
    <div className={styles.container__form}>
      <h2 className={styles.title__2}>Entrar</h2>
      <form className={styles.login__form} onSubmit={handleSubmit(submit)}>
        <input type="email" placeholder="EMAIL" {...register("email")} />
        {errors.email ? <small>{errors.email.message}</small> : null}
        <input type="password" placeholder="SENHA" {...register("password")} />
        {errors.password ? <small>{errors.password.message}</small> : null}

        <div className={styles.btn__container}>
          <button
            className={styles.btn__login}
            type="submit"
            disabled={loading}
          >
            {loading ? "Carregando" : "Login"}
          </button>
          <a
            onClick={() => {
              navigate("/register");
            }}
            className={styles.btn__register}
          >
            Criar nova conta
          </a>
        </div>
      </form>
    </div>
  );
};
