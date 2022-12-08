import Image from "next/image";
import styles from "./Note.module.css";

type NoteIcon = "info" | "warn";

type Props = {
  children: React.ReactNode;
  type: NoteIcon;
};

export function Note({ children, type }: Props) {
  return (
    <div className={styles.note}>
      <Image
        className={styles.note__icon}
        width={30}
        height={30}
        src={`/svg/${type}.svg`}
        alt={`${type} icon`}
      />
      {children}
    </div>
  );
}
