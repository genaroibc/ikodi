import axios from "axios";
import mongoose from "mongoose";

const URL = process.env.COMMENTS_API_URL;
export function getPostComments({
  postId
}: {
  postId: mongoose.Types.ObjectId;
}) {
  return axios.get(`${URL}/${postId}`);
}
