import axios from "axios";

const URL = process.env.NEXT_PUBLIC_COMMENTS_API_URL ?? "";

export function createComment({ commentData = {} }) {
  return axios.post(URL, { commentData });
}
