import { v4 as uuid } from "uuid";
import { PostMetadata } from "types";
import { PostCard } from "./PostCard/PostCard";
import styles from "./PostCardList.module.css";

type Props = {
  posts: Array<PostMetadata>;
};

export function PostCardList({ posts }: Props) {
  return (
    <section className={styles.postCardList}>
      <h2 className={styles.postCardList__title}>Latests Posts ✍️</h2>
      {posts.map(post => (
        <PostCard key={uuid()} {...post} />
      ))}
    </section>
  );
}
