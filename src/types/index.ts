import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  title: string;
  date: string;
  content: string;
  slug: string;
  reading_time: string;
};
export type PostMetadata = {
  slug: string;
  date: string;
  reading_time: string;
  title: string;
};

export type SerializedPost = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontmatter: PostMetadata;
};
