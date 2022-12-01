import { PostCardList } from "../components/PostCardList/PostCardList";
import { getAllPostsMetadata } from "../lib/mdx";
import { Post } from "../types";

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props) {
  return (
    <>
      <h1>IKodi</h1>

      <PostCardList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMetadata();

  return {
    props: {
      posts
    }
  };
}
