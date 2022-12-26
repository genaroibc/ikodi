import axios from "axios";
import { CommentId } from "types";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL ?? "";

type Args = {
  postId: string;
  commentData: { commentId: CommentId; commentContent: string };
};

export function updateComment({ commentData, postId }: Args) {
  return axios.put(`${URL}/${postId}`, { commentData });
}
