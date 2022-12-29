import { Icon } from "components/Icon/Icon";
import { signIn } from "next-auth/react";
import styles from "./LoginButton.module.css";

export function LoginButton() {
  return (
    <button onClick={() => signIn("github")} className={styles.loginBtn}>
      Log in
      <Icon name="github" size="small" />
    </button>
  );
}
