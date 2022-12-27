import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./LoginButton.module.css";

export function LoginButton() {
  return (
    <button onClick={() => signIn("github")} className={styles.login_btn}>
      Log in
      <Image width={30} height={30} src="/svg/github.svg" alt="GitHub logo" />
    </button>
  );
}
