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
