import { LoginButton } from "components/LoginButton/LoginButton";
import styles from "./LoginBox.module.css";

export function LoginBox() {
  return (
    <section className={styles.login_box}>
      <p className={styles.login_box__message}>Log in to comment</p>
      <LoginButton />
    </section>
  );
}
