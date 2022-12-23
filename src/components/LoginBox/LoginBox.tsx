import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./LoginBox.module.css";

export function LoginBox() {
  return (
    <section className={styles.login_box}>
      <p className={styles.login_box__message}>Log in to comment</p>
      <button
        onClick={() => signIn("github")}
        className={styles.login_box__btn}
      >
        Log in
        <Image alt="GitHub logo" src="/svg/github.svg" width={30} height={30} />
      </button>
    </section>
  );
}
