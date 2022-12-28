import { MDXRemote } from "next-mdx-remote";
import { SerializedPost } from "types";
import MDXComponents from "components/MDXComponents/MDXComponents";
import styles from "./Article.module.css";
import { Metadata } from "./Metadata/Metadata";
import { ArticleFooter } from "./ArticleFooter/ArticleFooter";

export function Article({ frontmatter, source }: SerializedPost) {
  return (
    <>
      <Metadata {...frontmatter} />
      <article className={styles.article}>
        <MDXRemote {...source} components={MDXComponents} />
      </article>

      <ArticleFooter />
    </>
  );
}
