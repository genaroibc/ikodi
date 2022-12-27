import { v4 as uuid } from "uuid";
import { Post } from "types";
import { PostCard } from "./PostCard/PostCard";
import styles from "./PostCardList.module.css";

type Props = {
  posts: Array<Post>;
};

export function PostCardList({ posts }: Props) {
  return (
    <section className={styles.post_card_list}>
      <h2 className={styles.post_card_list__title}>Latests Posts ✍️</h2>
      {posts.map(post => (
        <PostCard key={uuid()} {...post} />
      ))}
    </section>
  );
}
