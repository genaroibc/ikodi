import Image from "next/image";
import Link from "next/link";
import styles from "./TooltipItem.module.css";

export type TooltipItem = {
  iconSrc: string;
  title: string;
  href: string;
};

export function TooltipItem({ iconSrc, title, href }: TooltipItem) {
  return (
    <span className={styles.tooltip_item}>
      <Link href={href} target="_blank">
        <Image
          className={styles.tooltip_item__icon}
          src={iconSrc}
          alt={title}
          width={50}
          height={50}
        />
      </Link>
    </span>
  );
}
