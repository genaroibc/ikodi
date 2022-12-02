import { nanoid } from "nanoid";
import { Post } from "../../types";
import { PostCard } from "../PostCard/PostCard";
import styles from "./PostCardList.module.css";

type Props = {
  posts: Array<Post>;
};

export function PostCardList({ posts }: Props) {
  return (
    <section className={styles.post_card_list}>
      {posts.map(post => (
        <PostCard key={nanoid()} {...post} />
      ))}
    </section>
  );
}