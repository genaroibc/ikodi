import { FormEventHandler } from "react";
import { createComment } from "services/createComment";
import { getFormData } from "utils/getFormData";
import styles from "./CommentForm.module.css";

type Props = {
  postId: string;
};

type FormData = {
  commentAuthor: string;
  commentContent: string;
};

export function CommentForm({ postId }: Props) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const formData = getFormData<FormData>(e.target as HTMLFormElement);

    console.log({
      formData: {
        author: formData.commentAuthor,
        content: formData.commentContent,
        date: new Date().toISOString().slice(0, 10),
        postId
      }
    });

    createComment({
      commentData: {
        author: formData.commentAuthor,
        content: formData.commentContent,
        date: new Date().toISOString().slice(0, 10),
        postId
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.comment_form}>
      <input
        required={true}
        minLength={3}
        maxLength={26}
        autoComplete="off"
        type="text"
        name="commentAuthor"
        id="commentAuthor"
      />

      <textarea
        required={true}
        minLength={4}
        maxLength={956}
        name="commentContent"
        id="commentContent"
        rows={6}
      />

      <button className={styles.comment_form__submit_btn} type="submit">
        Comment
      </button>
    </form>
  );
}
