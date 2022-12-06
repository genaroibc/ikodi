import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../types";
import styles from "./PostCard.module.css";

export function PostCard({ date, title, slug, reading_time }: Post) {
  return (
    <Link className={styles.link} href={`/${slug}`}>
      <article className={styles.post_card}>
        <h3 className={styles.post_card__title}>{title}</h3>
        <h4 className={styles.post_card__date}>
          <Image
            src="/svg/calendar-regular.svg"
            alt="calendar icon"
            width={20}
            height={20}
          />
          {date}
        </h4>
        <h4 className={styles.post_card__reading_time}>
          <Image
            src="/svg/clock-regular.svg"
            alt="clock icon"
            width={20}
            height={20}
          />

          {reading_time}
        </h4>
        <Image
          className={styles.post_card__arrow}
          src="/svg/arrow-right.svg"
          alt="arrow icon"
          width={20}
          height={20}
        />
      </article>
    </Link>
  );
}
