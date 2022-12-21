import { Schema, model, models } from "mongoose";
import { Comment } from "types";

const commentsSchema = new Schema<Comment>({
  author: { type: "string", required: true },
  content: { type: "string", required: true },
  date: { type: "string", required: true },
  postId: { type: Schema.Types.ObjectId, required: true },
  _id: { type: Schema.Types.ObjectId, required: true }
});

export const CommentsModel =
  models.Comments || model("Comments", commentsSchema);
