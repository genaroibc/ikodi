import axios from "axios";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL;

export function getPostComments({ postId }: { postId: string }) {
  if (!URL)
    throw new Error(
      "env variable 'NEXT_PUBLIC_COMMENTS_API_URL' is not declared"
    );

  return axios.get(`${URL}/${postId}`);
}
