import { CommentItem } from "./CommentItem/CommentItem";
import { v4 as uuid } from "uuid";
import styles from "./Comments.module.css";
import { useCommentsContext } from "context/CommentsContext";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { CommentId } from "types";

type Props = {
  postId: string;
};

export function Comments({ postId }: Props) {
  const { comments, handleGetComments, handleDeleteComment } =
    useCommentsContext();

  const { status } = useSession();

  const handleDelete = (commentId: CommentId) => {
    handleDeleteComment({
      commentId,
      postId
    });
  };

  useEffect(() => {
    handleGetComments(postId);
    // eslint-disable-next-line
  }, [postId]);
  return (
    <div className={styles.comments}>
      <h3 className={styles.comments__title}>Comments:</h3>
      {comments?.map(comment => (
        <CommentItem
          authenticated={status === "authenticated"}
          handleDelete={() => handleDelete(comment._id!)}
          key={uuid()}
          comment={comment}
        />
      ))}
    </div>
  );
}
