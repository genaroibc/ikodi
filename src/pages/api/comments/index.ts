import {
  createCommentByPostId,
  getAllCommentsByPostId
} from "controllers/commentsController";
import { NextApiHandler } from "next";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.MONGODB_DATABASE_URL);

const handler: NextApiHandler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const comments = await getAllCommentsByPostId(body.postId);

        return res.status(200).json({ ok: true, comments });
      } catch (error) {
        return res.status(error.status).json({ ok: false, ...error });
      }

    case "POST":
      try {
        const createdComment = await createCommentByPostId(body.postId);

        return res.status(200).json({ ok: true, createdComment });
      } catch (error) {
        return res.status(error.status).json({ ok: false, ...error });
      }

    default:
      return res.status(405).json({
        ok: false,
        error_message: "INVALID METHOD ON THIS ENDPOINT"
      });
  }
};

export default handler;
