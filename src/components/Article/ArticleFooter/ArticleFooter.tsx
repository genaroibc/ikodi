import { Icon } from "components/Icon/Icon";
import Link from "next/link";
import styles from "./ArticleFooter.module.css";

export function ArticleFooter() {
  return (
    <>
      <p className={styles.thanks}>Thanks for reading!!</p>
      <Link className={styles.backToHome} href="/">
        <Icon name="arrow" size="tiny" />
        Back to home
      </Link>
    </>
  );
}
