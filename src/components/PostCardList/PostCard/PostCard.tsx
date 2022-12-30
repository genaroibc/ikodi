import { Icon } from "components/Icon/Icon";
import Link from "next/link";
import { Post } from "types";
import styles from "./PostCard.module.css";

export function PostCard({ date, title, slug, reading_time }: Post) {
  return (
    <Link className={styles.link} href={`/${slug}`}>
      <article className={styles.postCard}>
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
