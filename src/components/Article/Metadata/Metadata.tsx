import { Icon } from "components/Icon/Icon";
import { PostMetadata } from "types";
import styles from "./Metadata.module.css";

export function Metadata({ reading_time, date }: PostMetadata) {
  return (
    <div className={styles.metadataContainer}>
      <span>
        <Icon name="clock" size="tiny" />
        {reading_time}
      </span>

      <span>
        <Icon name="calendar" size="tiny" />
        {date}
      </span>
    </div>
  );
}
