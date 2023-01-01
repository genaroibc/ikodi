import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { PostMetadata, SerializedPost } from "types";
import rehypeHighlight from "rehype-highlight";

const root = process.cwd();

type ParseMdxProps = {
  title: string;
};

const parseMDXFile = ({ title }: ParseMdxProps) => {
  const postPath = path.join(root, "src/posts", title);

  const mdxPost = fs.readFileSync(postPath, "utf-8");

  return matter(mdxPost);
};

type GetPostBySlugProps = {
  removeExtension: boolean;
};

export const getPostsSlugs = ({ removeExtension }: GetPostBySlugProps) => {
  const postsPath = path.join(root, "src/posts");

  const postsTitles = fs.readdirSync(postsPath);

  if (!removeExtension) {
    return postsTitles;
  }

  const postsSlugs = postsTitles.map(slug => slug.replace(".mdx", ""));

  return postsSlugs;
};

export const getPostBySlug = async (slug: string): Promise<SerializedPost> => {
  const { data: metadata, content } = parseMDXFile({ title: `${slug}.mdx` });

  const source = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] }
  });

  return {
    source,
    frontmatter: {
      ...(metadata as PostMetadata)
    }
  };
};

export const getAllPostsMetadata = (): PostMetadata[] => {
  const postsTitles = getPostsSlugs({ removeExtension: false });

  const composedPosts = postsTitles.reduce<PostMetadata[]>(
    (allPosts, postTitle) => {
      const { data, content } = parseMDXFile({ title: postTitle });

      const slug = postTitle.replace(".mdx", "");

      return [...allPosts, { ...(data as PostMetadata), content, slug }];
    },
    []
  );

  return composedPosts;
};
