import { Schema, model, models, Types } from "mongoose";
import { Comment } from "types";

const commentsSchema = new Schema<Comment>({
  authorName: { type: "string", required: true },
  content: { type: "string", required: true },
  date: { type: "string", required: true },
  authorId: { type: "string", required: true },
  postId: { type: "string", required: true },
  _id: { type: Types.ObjectId }
});

export const CommentsModel =
  models.Comments || model("Comments", commentsSchema);
