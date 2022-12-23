import { CommentItem } from "./CommentItem/CommentItem";
import { v4 as uuid } from "uuid";
import styles from "./Comments.module.css";
import { useCommentsContext } from "context/CommentsContext";
import { useEffect } from "react";

type Props = {
  postId: string;
};

export function Comments({ postId }: Props) {
  const { comments, getComments } = useCommentsContext();

  useEffect(() => {
    getComments(postId);
    // eslint-disable-next-line
  }, [postId]);

  return (
    <div className={styles.comments}>
      <h3 className={styles.comments__title}>Comments:</h3>
      {comments?.map(comment => (
        <CommentItem key={uuid()} {...comment} />
      ))}
    </div>
  );
}
