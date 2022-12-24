import { Loader } from "components/Loader/Loader";
import { LoginBox } from "components/LoginBox/LoginBox";
import { useCommentsContext } from "context/CommentsContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEventHandler } from "react";
import { getFormData } from "utils/getFormData";
import styles from "./CommentForm.module.css";

type Props = {
  postId: string;
};

type FormData = {
  commentContent: string;
};

export function CommentForm({ postId }: Props) {
  const { data: session, status } = useSession();

  const { handleAddComment } = useCommentsContext();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const formData = getFormData<FormData>(e.target as HTMLFormElement);

    const commentData = {
      authorName: session!.user!.name!,
      content: formData.commentContent,
      date: new Date().toISOString().slice(0, 10),
      authorId: session!.user!.image!.split("/").at(-1)!.replace(/\?.*/, "")!,
      postId
    };

    handleAddComment(commentData);

    // @ts-ignore
    e.target.reset();
  };

  return (
    <>
      {status === "authenticated" ? (
        <form onSubmit={handleSubmit} className={styles.comment_form}>
          <header className={styles.comment_form__header}>
            <Image
              className={styles.comment_form__header__avatar}
              src={session.user?.image ?? "/img/user-placeholder.jpg"}
              alt="Your profile photo"
              width={50}
              height={50}
            />
            <h4>{session.user?.name}</h4>
          </header>

          <textarea
            required={true}
            minLength={4}
            maxLength={1956}
            name="commentContent"
            id="commentContent"
            rows={6}
          />

          <button className={styles.comment_form__submit_btn} type="submit">
            Comment
          </button>
        </form>
      ) : status === "loading" ? (
        <Loader height={50} width={50} />
      ) : (
        <LoginBox />
      )}
    </>
  );
}
