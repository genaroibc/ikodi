import { CommentsModel } from "models/CommentsModel";
import mongoose from "mongoose";
import { Comment } from "types";

export async function getAllCommentsByPostId(postId: string) {
  try {
    const comments = await CommentsModel.find({ postId });

    return comments ?? [];
  } catch (error) {
    return error;
  }
}

export async function getOneCommentById(_id: mongoose.Types.ObjectId) {
  try {
    const comment = await CommentsModel.findById(_id);

    return comment ?? {};
  } catch (error) {
    return error;
  }
}

export async function createCommentByData(commentData: Comment) {
  try {
    const createdComment = new CommentsModel({ ...commentData });

    await createdComment.save();

    return createdComment ?? {};
  } catch (error) {
    return error;
  }
}

export async function deleteCommentById(_id: mongoose.Types.ObjectId) {
  try {
    const deletedComment = await CommentsModel.findByIdAndRemove(_id);

    return deletedComment ?? {};
  } catch (error) {
    return error;
  }
}
