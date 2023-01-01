import mongoose from "mongoose";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostMetadata = {
  content: string;
  date: string;
  reading_time: string;
  image_description: string;
  image_url: string;
  slug: string;
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
