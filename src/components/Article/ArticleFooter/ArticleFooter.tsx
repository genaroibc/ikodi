import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleFooter.module.css";

export function ArticleFooter() {
  return (
    <>
      <p className={styles.thanks}>Thanks for reading!!</p>
      <Link className={styles.backToHome} href="/">
        <Image
          src="/svg/arrow-right.svg"
          alt="arrow icon"
          height={20}
          width={20}
        />
        Back to home
      </Link>
    </>
  );
}
