import { createContext, useContext, useEffect, useState } from "react";
import { getPostComments } from "services/getPostComments";
import { Comment } from "types";
import { createComment } from "services/createComment";

type CommentsContext = {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  getComments: (postId: string) => Promise<void>;
  addComment: (comment: Comment) => Promise<void>;
};

const CommentsContext = createContext<CommentsContext | null>(null);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = async (postId: string) => {
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

  const addComment = async (commentData: Comment) => {
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

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        getComments,
        addComment
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
