import { CommentItem } from "./CommentItem/CommentItem";
import { v4 as uuid } from "uuid";
import styles from "./Comments.module.css";
import { useCommentsContext } from "context/CommentsContext";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Comment, CommentId, CommentPostId } from "types";
import { CommentForm } from "components/CommentForm/CommentForm";

type Props = {
  postId: CommentPostId;
};

export function Comments({ postId }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState<Comment | null>(null);

  const { comments, handleGetComments, handleDeleteComment } =
    useCommentsContext();

  const { data: session, status } = useSession();

  const handleDelete = (commentId: CommentId) => {
    handleDeleteComment({
      commentId,
      postId
    });
  };

  const handleEdit = (commentData: Comment) => {
    setCommentToEdit(commentData);
    setModalOpen(true);
  };

  useEffect(() => {
    handleGetComments(postId);
    // eslint-disable-next-line
  }, [postId]);

  return (
    <section className={styles.comments}>
      <h3 className={styles.comments__title}>
        {comments.length ? "Comments:" : "✨ You can be the first comment!! ✨"}
      </h3>

      {comments?.map(comment => (
        <CommentItem
          showActionsBox={
            status === "authenticated" &&
            comment.authorName === session.user?.name
          }
          handleDelete={() => handleDelete(comment._id!)}
          handleEdit={() => handleEdit(comment)}
          key={uuid()}
          comment={comment}
        />
      ))}

      <dialog className={styles.modal} open={modalOpen}>
        <CommentForm
          afterSubmit={() => setModalOpen(false)}
          action={{ type: "updateComment", commentData: commentToEdit }}
          postId={postId}
        />
        <nav className={styles.modal__nav}>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </nav>
      </dialog>
    </section>
  );
}
