import Image from "next/image";
import Link from "next/link";

import styles from "./ContactBarItem.module.css";

export type ContactBarItem = {
  href: string;
  iconSrc: string;
  title: string;
};

export function ContactBarItem({ href, iconSrc, title }: ContactBarItem) {
  return (
    <Link className={styles.contact_bar_item} href={href} target="_blank">
      <Image
        className={styles.contact_bar_item__icon}
        width={50}
        height={50}
        src={iconSrc}
        alt={title}
      />
    </Link>
  );
}
