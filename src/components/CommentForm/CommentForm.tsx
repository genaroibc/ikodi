import { Loader } from "components/Loader/Loader";
import { LoginBox } from "components/LoginBox/LoginBox";
import { useCommentsContext } from "context/CommentsContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEventHandler } from "react";
import { Comment, CommentContent, CommentPostId } from "types";
import { getFormData } from "utils/getFormData";
import styles from "./CommentForm.module.css";

type Props = {
  afterSubmit?: () => void;
  postId: CommentPostId;
  action: {
    type: "updateComment" | "createComment";
    commentData?: Comment | null;
  };
};

type FormData = {
  commentContent: CommentContent;
};

export function CommentForm({ afterSubmit, postId, action }: Props) {
  const { data: session, status } = useSession();

  const { handleAddComment, handleUpdateComment } = useCommentsContext();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const formData = getFormData<FormData>(e.target as HTMLFormElement);
    const authorId = session!
      .user!.image!.split("/")
      .at(-1)!
      .replace(/\?.*/, "")!;

    // const { data } = await axios.get(`http://api.github.com/user/${authorId}`);

    if (action.type === "createComment") {
      const commentData = {
        authorName: session!.user!.name!,
        content: formData.commentContent,
        date: new Date().toISOString().slice(0, 10),
        authorId,
        postId
      };

      handleAddComment(commentData);

      // @ts-ignore
      e.target.reset();
    } else if (action.type === "updateComment") {
      if (!action.commentData || !action.commentData?._id) return;

      const data = {
        commentData: {
          commentContent: formData.commentContent,
          commentId: action.commentData._id
        },
        postId
      };

      handleUpdateComment(data);
    }

    afterSubmit && afterSubmit();
  };

  return (
    <>
      {status === "authenticated" ? (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <header className={styles.commentForm__header}>
            <Image
              className={styles.commentForm__header__avatar}
              src={session?.user?.image ?? "/img/user-placeholder.jpg"}
              alt="Your profile photo"
              width={50}
              height={50}
            />
            <h4>{session?.user?.name}</h4>
          </header>

          <textarea
            required={true}
            minLength={4}
            maxLength={1956}
            name="commentContent"
            id="commentContent"
            rows={6}
            defaultValue={action.commentData?.content}
          />

          <button className={styles.commentForm__submitBtn} type="submit">
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
