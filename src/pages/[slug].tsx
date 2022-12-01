import { MDXRemote } from "next-mdx-remote";
import { getPostBySlug, getPostsSlugs } from "../lib/mdx";
import { SerializedPost } from "../types";

export default function Post({ frontmatter, source }: SerializedPost) {
  return <MDXRemote {...source} />;
}

export async function getStaticProps({ params = { slug: "" } }) {
  const { frontmatter, source } = await getPostBySlug(params.slug);
  return {
    props: {
      frontmatter,
      source
    }
  };
}

export async function getStaticPaths() {
  const postsSlugs = getPostsSlugs({ removeExtension: true });

  const paths = postsSlugs.map(slug => ({
    params: { slug }
  }));

  return { paths, fallback: false };
}
