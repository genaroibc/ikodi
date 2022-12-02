import { Hero } from "../components/Hero/Hero";
import { getAllPostsMetadata } from "../lib/mdx";
import { Post } from "../types";

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Hero />
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
