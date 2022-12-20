import { CommentsModel } from "controllers/commentsController";
import { Comment } from "types";

export async function getAllCommentsByPostId(postId: string) {
  try {
    // findAll ? findOne ? find ?
    const comments = await CommentsModel.find({ postId });

    return comments ?? [];
  } catch (error) {
    return error;
  }
}

export async function createCommentByPostId({
  postId,
  ...commentData
}: Comment) {
  try {
    const createdComment = await new CommentsModel({ ...commentData, postId });

    await createdComment.save();

    return createdComment ?? {};
  } catch (error) {
    return error;
  }
}

export async function deleteCommentByPostId(postId: string) {
  try {
    const deletedComment = await CommentsModel.removeOneById(postId);

    return deletedComment;
  } catch (error) {
    return error;
  }
}
