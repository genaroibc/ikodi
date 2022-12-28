import axios from "axios";
import { Comment } from "types";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL;

type Params = {
  commentData: Comment;
};

export function createComment({ commentData }: Params) {
  if (!URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.post(`${URL}/${commentData.postId}`, { commentData });
}
