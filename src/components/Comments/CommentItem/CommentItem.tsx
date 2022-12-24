import Image from "next/image";
import { Comment } from "types";
import styles from "./CommentItem.module.css";

type Props = {
  comment: Comment;
  handleDelete: () => void;
  authenticated: boolean;
};

export function CommentItem({
  authenticated,
  comment: { authorName, content, date, authorId },
  handleDelete
}: Props) {
  console.log("object");
  return (
    <article className={styles.comment}>
      {authenticated ? (
        <nav className={styles.comment__actions}>
          <button onClick={handleDelete}>
            <Image
              src="/svg/edit.svg"
              alt="edit comment icon"
              width={20}
              height={20}
            />
          </button>
          <button onClick={handleDelete}>
            <Image
              src="/svg/trash.svg"
              alt="delete comment icon"
              width={20}
              height={20}
            />
          </button>
        </nav>
      ) : null}
      <header className={styles.comment_header}>
        <span>
          <Image
            className={styles.comment_header__avatar}
            src={`https://avatars.githubusercontent.com/u/${authorId}`}
            alt={`${authorName}'s user avatar`}
            title={`${authorName}'s user avatar`}
            width={50}
            height={50}
          />
        </span>
        <h3 className={styles.comment_header__author}>{authorName}</h3>
      </header>
      <h4 className={styles.comment__date}>{date}</h4>
      <p className={styles.comment__content}>{content}</p>
    </article>
  );
}
