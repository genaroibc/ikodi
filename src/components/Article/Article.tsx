import { MDXRemote } from "next-mdx-remote";
import { SerializedPost } from "../../types";
import MDXComponents from "../MDXComponents/MDXComponents";
import styles from "./Article.module.css";

export function Article({ frontmatter, source }: SerializedPost) {
  return (
    <article className={styles.article}>
      <MDXRemote {...source} components={MDXComponents} />
    </article>
  );
}
