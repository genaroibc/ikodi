import { MDXRemote } from "next-mdx-remote";
import { SerializedPost } from "types";
import MDXComponents from "components/MDXComponents/MDXComponents";
import styles from "./Article.module.css";
import { Metadata } from "./Metadata/Metadata";
import { ArticleFooter } from "./ArticleFooter/ArticleFooter";
import Image from "next/image";

export function Article({ frontmatter, source }: SerializedPost) {
  return (
    <>
      <Metadata {...frontmatter} />
      <article className={styles.article}>
        <Image
          className={styles.article__frontImage}
          alt={frontmatter.image_description}
          src={frontmatter.image_url}
          fill
        />
        <MDXRemote {...source} components={MDXComponents} />
      </article>

      <ArticleFooter />
    </>
  );
}
