import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

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

export type SerializedPost = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontmatter: {
    slug: string;
  };
};

export const getPostBySlug = async (slug: string): Promise<SerializedPost> => {
  const { data: metadata, content } = parseMDXFile({ title: `${slug}.mdx` });

  const source = await serialize(content);

  return {
    source,
    frontmatter: {
      slug,
      ...metadata
    }
  };
};

export const getAllPostsMetadata = () => {
  const postsTitles = getPostsSlugs({ removeExtension: false });

  // @ts-ignore
  const composedPosts = postsTitles.reduce((allPosts, postTitle) => {
    const { data: metadata, content } = parseMDXFile({ title: postTitle });

    const slug = postTitle.replace(".mdx", "");

    return [...allPosts, { ...metadata, content, slug }];
  }, []);

  return composedPosts;
};
