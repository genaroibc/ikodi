import { Comment } from "types";
import styles from "./CommentItem.module.css";

export function CommentItem({ authorName, content, date }: Comment) {
  return (
    <article className={styles.comment}>
      <h3 className={styles.comment__author}>{authorName}</h3>
      <h4 className={styles.comment__date}>{date}</h4>
      <p className={styles.comment__content}>{content}</p>
    </article>
  );
}
