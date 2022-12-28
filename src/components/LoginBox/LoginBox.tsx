import { LoginButton } from "components/LoginButton/LoginButton";
import styles from "./LoginBox.module.css";

export function LoginBox() {
  return (
    <section className={styles.loginBox}>
      <p className={styles.loginBox__message}>Log in to comment</p>
      <LoginButton />
    </section>
  );
}
