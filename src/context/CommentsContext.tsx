import { createContext, useContext, useState } from "react";
import { getPostComments } from "services/getPostComments";
import { Comment, CommentId } from "types";
import { createComment } from "services/createComment";
import { deleteComment } from "services/deleteComment";

type HandleDeleteComment = (ids: {
  commentId: CommentId;
  postId: string;
}) => Promise<void>;

type CommentsContext = {
  comments: Comment[];
  handleGetComments: (postId: string) => Promise<void>;
  handleAddComment: (commentData: Comment) => Promise<void>;
  handleDeleteComment: HandleDeleteComment;
};

const CommentsContext = createContext<CommentsContext | null>(null);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleGetComments = async (postId: string) => {
    try {
      const { data } = await getPostComments({ postId });

      if (!data.ok) {
        throw new Error(data);
      }

      setComments(data.comments);
    } catch (error) {
      console.error({ error });
    }
  };

  const handleAddComment = async (commentData: Comment) => {
    try {
      const { data } = await createComment({ commentData });

      if (!data.ok) {
        throw new Error(data);
      }

      setComments(prevState => [...prevState, data.createdComment]);
    } catch (error) {
      console.error({ error });
    }
  };

  const handleDeleteComment: HandleDeleteComment = async ({
    commentId,
    postId
  }) => {
    try {
      const { data } = await deleteComment({
        commentId,
        postId
      });

      if (!data.ok) {
        throw new Error(data);
      }

      setComments(prevState =>
        prevState.filter(comment => comment._id !== commentId)
      );
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        handleAddComment,
        handleDeleteComment,
        handleGetComments
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export const useCommentsContext = () => {
  const context = useContext(CommentsContext);

  if (!context) throw new Error("'Comments Context' is not defined here ._.");

  return context;
};
