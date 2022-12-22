import { Article } from "components/Article/Article";
import { CommentForm } from "components/CommentForm/CommentForm";
import { Comments } from "components/Comments/Comments";
import { getPostBySlug, getPostsSlugs } from "lib/mdx";
import { SerializedPost } from "types";

type PostProps = {
  post: SerializedPost;
  postId: string;
};

export default function Post({ post, postId }: PostProps) {
  return (
    <>
      <Article {...post} />
      <Comments postId={postId} />
      <CommentForm postId={postId} />
    </>
  );
}

type GetStaticPropsReturn = {
  props: PostProps;
};

export async function getStaticProps({
  params = { slug: "" }
}): Promise<GetStaticPropsReturn> {
  const { frontmatter, source } = await getPostBySlug(params.slug);

  return {
    props: {
      post: {
        frontmatter,
        source
      },
      postId: params.slug
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
