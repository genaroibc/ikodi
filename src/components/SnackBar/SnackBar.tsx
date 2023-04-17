import { useEffect, useState } from "react";
import styles from "./SnackBar.module.css";

type Props = {
  duration: number;
  message: string;
};

export function SnackBar({ duration, message }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const visibilityTimeout = setTimeout(
      () => setVisible(prevState => !prevState),
      duration
    );

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [duration]);

  return (
    <div
      className={`${styles.snackBar} ${visible ? "" : styles.snackBarVisible}`}
    >
      {message}
    </div>
  );
}
