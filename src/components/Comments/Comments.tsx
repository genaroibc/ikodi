import { CommentItem } from "./CommentItem/CommentItem";
import { Comment } from "types";
import { v4 as uuid } from "uuid";

type Props = {
  comments: Array<Comment>;
};

export function Comments({ comments = [] }: Props) {
  return (
    <div>
      {comments.map(comment => (
        <CommentItem key={uuid()} {...comment} />
      ))}
    </div>
  );
}
