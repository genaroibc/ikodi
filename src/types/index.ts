import mongoose from "mongoose";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  title: string;
  date: string;
  content: string;
  slug: string;
  reading_time: string;
};

export type PostMetadata = {
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

export type CommentId = mongoose.Types.ObjectId;
export type CommentContent = string;
export type CommentDate = string;
export type CommentAutorName = string;
export type CommentAuthorId = string;
export type CommentPostId = string;

export type Comment = {
  authorName: CommentAutorName;
  content: CommentContent;
  date: CommentDate;
  authorId: CommentAuthorId;
  postId: CommentPostId;
  _id?: CommentId;
};
