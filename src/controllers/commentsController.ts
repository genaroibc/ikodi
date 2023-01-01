import { CommentsModel } from "models/CommentsModel";
import mongoose from "mongoose";
import { Comment, CommentId } from "types";

export async function getAllCommentsByPostId(postId: string) {
  try {
    const comments = await CommentsModel.find({ postId });

    return comments;
  } catch (error) {
    return error;
  }
}

export async function getOneCommentById(_id: CommentId) {
  try {
    const comment = await CommentsModel.findById(_id);

    return comment;
  } catch (error) {
    return error;
  }
}

export async function createOneCommentByData(commentData: Comment) {
  try {
    const createdComment = new CommentsModel({
      ...commentData,
      _id: new mongoose.Types.ObjectId()
    });

    await createdComment.save();

    return createdComment;
  } catch (error) {
    return error;
  }
}

export async function deleteOneCommentById(_id: CommentId) {
  try {
    const deletedComment = await CommentsModel.findByIdAndRemove(_id);

    return deletedComment;
  } catch (error) {
    return error;
  }
}

type UpdateController = { commentId: CommentId; commentContent: string };

export async function updateOneCommentByData({
  commentContent,
  commentId
}: UpdateController) {
  try {
    const updatedComment = await CommentsModel.findByIdAndUpdate(
      commentId,
      {
        content: commentContent
      },
      { new: true }
    );

    return updatedComment;
  } catch (error) {
    return error;
  }
}
