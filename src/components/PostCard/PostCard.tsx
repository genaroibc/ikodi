import Link from "next/link";
import { Post } from "../../types";
import styles from "./PostCard.module.css";

export function PostCard({ date, title, slug }: Post) {
  return (
    <article className={styles.post_card}>
      <Link className={styles.post_card__link} href={`/${slug}`}>
        Read
      </Link>
      <h3>{title}</h3>
      <h4 className={styles.post_card__date}>{date}</h4>
    </article>
  );
}
