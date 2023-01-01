import { Icon } from "components/Icon/Icon";
import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "types";
import styles from "./PostCard.module.css";

export function PostCard({
  date,
  title,
  reading_time,
  image_description,
  image_url,
  slug
}: PostMetadata) {
  return (
    <Link className={styles.link} href={`/${slug}`}>
      <article className={styles.postCard}>
        <Image
          className={styles.postCard__img}
          src={image_url}
          alt={image_description}
          fill
        />

        <h3 className={styles.postCard__title}>{title}</h3>

        <h4 className={styles.postCard__date}>
          <Icon name="calendar" size="tiny" />
          {date}
        </h4>

        <h4 className={styles.postCard__readingTime}>
          <Icon name="clock" size="tiny" />
          {reading_time}
        </h4>

        <Icon size="small" name="arrow" className={styles.postCard__arrow} />
      </article>
    </Link>
  );
}
