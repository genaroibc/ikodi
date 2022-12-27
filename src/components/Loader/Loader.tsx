import Image from "next/image";
import styles from "./Loader.module.css";

type Props = {
  width: number;
  height: number;
};

export function Loader(props: Props) {
  return (
    <Image
      className={styles.loader}
      src="/svg/loader.svg"
      alt="animated loader"
      {...props}
    />
  );
}
