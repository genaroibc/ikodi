import { Hero } from "../components/Hero/Hero";
import { PostCardList } from "../components/PostCardList/PostCardList";
import { getAllPostsMetadata } from "../lib/mdx";
import { Post } from "../types";

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Hero />

      <hr />

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
