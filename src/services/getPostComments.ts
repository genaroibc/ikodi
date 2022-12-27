import axios from "axios";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL;
export function getPostComments({ postId }: { postId: string }) {
  return axios.get(`${URL}/${postId}`);
}
