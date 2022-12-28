import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import { SerializedPost } from "types";
import MDXComponents from "components/MDXComponents/MDXComponents";
import styles from "./Article.module.css";
import { Metadata } from "./Metadata/Metadata";

export function Article({ frontmatter, source }: SerializedPost) {
  return (
    <>
      <Metadata {...frontmatter} />
      <article className={styles.article}>
        <MDXRemote {...source} components={MDXComponents} />
      </article>

      <p className={styles.thanks}>Thanks for reading!!</p>

      <Link className={styles.backToHome} href="/">
        <Image
          src="/svg/arrow-right.svg"
          alt="arrow icon"
          height={20}
          width={20}
        />
        Back to home
      </Link>
    </>
  );
}
