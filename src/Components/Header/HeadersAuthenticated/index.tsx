import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import profileDefault from "../../../assets/ProfileDefault.svg";
import { UserContext } from "../../../Providers/UserProvider/UserProvider";
import { useContext, useEffect } from "react";

export const HeaderAuthenticated = () => {
  const navigate = useNavigate();
  const { adminProfile, UserAutoLogin } = useContext(UserContext);

  useEffect(() => {
    UserAutoLogin();
  }, []);

  return (
    <header className={styles.header__container}>
      <h1 onClick={() => navigate("/")} className={styles.btn__home}>TaskList</h1>
      <div
        className={styles.profile__container}
        onClick={() => {
          navigate("/task");
        }}
      >
        <img src={profileDefault} alt="" className={styles.img__profile} />
        <p className={styles.name__profile}>
          {adminProfile ? adminProfile.name : "Default"}
        </p>
      </div>
    </header>
  );
};
