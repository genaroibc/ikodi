import { Article } from "../components/Article/Article";
import { getPostBySlug, getPostsSlugs } from "../lib/mdx";
import { SerializedPost } from "../types";

export default function Post(post: SerializedPost) {
  return <Article {...post} />;
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
