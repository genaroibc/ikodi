import axios from "axios";
import { CommentId } from "types";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL ?? "";

type Params = {
  commentId: CommentId;
  postId: string;
};

export function deleteComment({ commentId, postId }: Params) {
  return axios.delete(`${URL}/${postId}`, { data: { commentId } });
}
