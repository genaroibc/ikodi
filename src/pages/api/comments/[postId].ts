import {
  createCommentByData,
  deleteCommentById,
  getAllCommentsByPostId
} from "controllers/commentsController";
import { NextApiHandler } from "next";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.MONGODB_DATABASE_URL);

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

        return res.status(200).json({ ok: true, comments });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "POST":
      try {
        const createdComment = await createCommentByData(body.commentData);

        return res.status(200).json({ ok: true, createdComment });
      } catch (error) {
        // @ts-ignore
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "DELETE":
      try {
        const deletedComment = await deleteCommentById(body.commentId);

        return res.status(200).json({ ok: true, deletedComment });
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
