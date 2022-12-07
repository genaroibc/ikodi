import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import { SerializedPost } from "../../types";
import MDXComponents from "../MDXComponents/MDXComponents";
import styles from "./Article.module.css";

export function Article({ frontmatter, source }: SerializedPost) {
  return (
    <>
      <article className={styles.article}>
        <MDXRemote {...source} components={MDXComponents} />
      </article>
      <Link className={styles.back_to_home_link} href="/">
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
