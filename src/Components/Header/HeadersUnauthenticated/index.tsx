import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export const HeaderUnauthenticated = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header__container}>
      <h1 onClick={() => navigate("/")} className={styles.btn__home}>TaskList</h1>
      <div>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Cadastre-se</button>
      </div>
    </header>
  );
};
