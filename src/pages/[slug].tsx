import { Article } from "components/Article/Article";
import { CommentForm } from "components/CommentForm/CommentForm";
import { Comments } from "components/Comments/Comments";
import { getPostBySlug, getPostsSlugs } from "lib/mdx";
import { SerializedPost } from "types";
import { Loader } from "components/Loader/Loader";
import { useSession } from "next-auth/react";
import { LoginBox } from "components/LoginBox/LoginBox";
import { CommentsProvider } from "context/CommentsContext";

type PostProps = {
  post: SerializedPost;
  postId: string;
};

export default function Post({ post, postId }: PostProps) {
  const { status } = useSession();

  return (
    <>
      <Article {...post} />

      <CommentsProvider>
        <Comments postId={postId} />

        {status === "authenticated" ? (
          <>
            <CommentForm postId={postId} />
          </>
        ) : status === "loading" ? (
          <Loader height={50} width={50} />
        ) : (
          <LoginBox />
        )}
      </CommentsProvider>
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
