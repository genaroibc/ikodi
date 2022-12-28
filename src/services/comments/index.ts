import axios from "axios";
import { Comment } from "types";
import { CommentId } from "types";

const COMMENTS_API_URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL;

type CreateCommentParams = {
  commentData: Comment;
};

export function createComment({ commentData }: CreateCommentParams) {
  if (!COMMENTS_API_URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.post(`${COMMENTS_API_URL}/${commentData.postId}`, {
    commentData
  });
}

type DeleteCommentParams = {
  commentId: CommentId;
  postId: string;
};

export function deleteComment({ commentId, postId }: DeleteCommentParams) {
  if (!COMMENTS_API_URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.delete(`${COMMENTS_API_URL}/${postId}`, { data: { commentId } });
}

type UpdateCommentParams = {
  postId: string;
  commentData: { commentId: CommentId; commentContent: string };
};

export function updateComment({ commentData, postId }: UpdateCommentParams) {
  if (!COMMENTS_API_URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.put(`${COMMENTS_API_URL}/${postId}`, { commentData });
}
