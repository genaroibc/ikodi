import { CommentItem } from "./CommentItem/CommentItem";
import { Comment } from "types";
import { v4 as uuid } from "uuid";
import { getPostComments } from "services/getPostComments";
import { useEffect, useState } from "react";
import styles from "./Comments.module.css";

type Props = {
  postId: string;
};

export function Comments({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getPostComments({ postId });

        if (data.ok) {
          setComments(data.comments);
        }
      } catch (error) {
        console.error({ error });
      }
    };

    getComments();
  }, [postId]);

  return (
    <div className={styles.comments}>
      <h3 className={styles.comments__title}>Comments:</h3>
      {comments.map(comment => (
        <CommentItem key={uuid()} {...comment} />
      ))}
    </div>
  );
}
