import { Icon } from "components/Icon/Icon";
import styles from "./Note.module.css";

type NoteIcon = "info" | "warn";

type Props = {
  children: React.ReactNode;
  type: NoteIcon;
};

export function Note({ children, type }: Props) {
  return (
    <div className={styles.note}>
      <Icon className={styles.note__icon} name={type} size="small" />
      {children}
    </div>
  );
}
