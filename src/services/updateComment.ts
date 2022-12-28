import axios from "axios";
import { CommentId } from "types";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL;

type Params = {
  postId: string;
  commentData: { commentId: CommentId; commentContent: string };
};

export function updateComment({ commentData, postId }: Params) {
  if (!URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.put(`${URL}/${postId}`, { commentData });
}
