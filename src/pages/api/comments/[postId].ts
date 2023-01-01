import {
  createOneCommentByData,
  deleteOneCommentById,
  getAllCommentsByPostId,
  updateOneCommentByData
} from "controllers/commentsController";
import { NextApiHandler } from "next";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection();

const handler: NextApiHandler = async (req, res) => {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      try {
        if (!query.postId) {
          return res
            .status(400)
            .json({ ok: false, error_message: "PostId is required" });
        }

        const comments = await getAllCommentsByPostId(query.postId as string);

        if (!comments) {
          return res.status(409).json({
            ok: false,
            message: "There was an error getting comments"
          });
        }

        return res.status(200).json({ ok: true, comments });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "POST":
      try {
        const createdComment = await createOneCommentByData(body.commentData);

        if (!createdComment) {
          return res.status(409).json({
            ok: false,
            message: "There was an error creating the comment"
          });
        }

        return res.status(200).json({ ok: true, createdComment });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "DELETE":
      try {
        const deletedComment = await deleteOneCommentById(body.commentId);

        if (!deletedComment) {
          return res.status(409).json({
            ok: false,
            message: "There was an error deleting the comment"
          });
        }

        return res.status(200).json({ ok: true, deletedComment });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "PUT":
      const {
        commentData: { commentContent, commentId }
      } = body;

      try {
        const updatedComment = await updateOneCommentByData({
          commentContent,
          commentId
        });

        if (!updatedComment) {
          return res.status(409).json({
            ok: false,
            message: "There was an error updating the comment"
          });
        }

        return res.status(200).json({
          ok: true,
          message: "Comment updated successfully",
          updatedComment
        });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    default:
      return res
        .status(405)
        .json({ ok: false, error_message: "INVALID METHOD ON THIS ENDPOINT" });
  }
};

export default handler;
