import Image from "next/image";
import { PostMetadata } from "../../../types";
import styles from "./Metadata.module.css";

export function Metadata({ reading_time, date }: PostMetadata) {
  return (
    <div className={styles.metadata_container}>
      <span>
        <Image
          src="/svg/clock-regular.svg"
          alt="clock icon"
          width={20}
          height={20}
        />
        {reading_time}
      </span>

      <span>
        <Image
          src="/svg/calendar-regular.svg"
          alt="clock icon"
          width={20}
          height={20}
        />
        {date}
      </span>
    </div>
  );
}
