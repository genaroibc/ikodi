import { createContext, useContext, useState } from "react";
import { getPostComments } from "services/getPostComments";
import { Comment, CommentId } from "types";
import { createComment, deleteComment, updateComment } from "services/comments";
import { sortByDate } from "utils/sortByDate";

type HandleDeleteComment = (ids: {
  commentId: CommentId;
  postId: string;
}) => Promise<void>;

type HandleUpdateComment = (data: {
  commentData: {
    commentContent: string;
    commentId: CommentId;
  };
  postId: string;
}) => Promise<void>;

type CommentsContext = {
  comments: Comment[];
  handleGetComments: (postId: string) => Promise<void>;
  handleAddComment: (commentData: Comment) => Promise<void>;
  handleDeleteComment: HandleDeleteComment;
  handleUpdateComment: HandleUpdateComment;
};

const CommentsContext = createContext<CommentsContext | null>(null);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  type GenericReqHandlerParams = {
    handler: (data: any) => any;
    handlerParams: any;
    onError: any;
    onSuccess: any;
  };

  const genericReqHandler = async ({
    handler,
    handlerParams,
    onError,
    onSuccess
  }: GenericReqHandlerParams) => {
    try {
      const { data } = await handler(handlerParams);

      if (!data.ok) throw new Error(data);

      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };

  const handleGetComments = async (postId: string) => {
    genericReqHandler({
      handler: getPostComments,
      handlerParams: { postId },
      onError: console.error,
      onSuccess: (data: any) => {
        setComments(
          sortByDate<Comment>({ newestFirst: true, items: data.comments })
        );
      }
    });
  };

  const handleAddComment = async (commentData: Comment) => {
    genericReqHandler({
      handler: createComment,
      handlerParams: { commentData },
      onError: console.error,
      onSuccess: (data: any) => {
        setComments(prevState => [data.createdComment, ...prevState]);
      }
    });
  };

  const handleDeleteComment: HandleDeleteComment = async ({
    commentId,
    postId
  }) => {
    genericReqHandler({
      handler: deleteComment,
      handlerParams: { commentId, postId },
      onError: console.error,
      onSuccess: (data: any) => {
        setComments(prevState =>
          prevState.filter(comment => comment._id !== commentId)
        );
      }
    });
  };

  const handleUpdateComment: HandleUpdateComment = async ({
    commentData,
    postId
  }) => {
    genericReqHandler({
      handler: updateComment,
      handlerParams: { commentData, postId },
      onError: console.error,
      onSuccess: (data: any) => {
        setComments(prevState => {
          const noModifiedComments = prevState.filter(comment => {
            return comment._id !== data.updatedComment._id;
          });
          const comments = [...noModifiedComments, data.updatedComment];

          return sortByDate<Comment>({ newestFirst: true, items: comments });
        });
      }
    });
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        handleAddComment,
        handleDeleteComment,
        handleGetComments,
        handleUpdateComment
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
