import Image from "next/image";
import Link from "next/link";
import styles from "./ContactItem.module.css";

export type ContactItem = {
  href: string;
  iconSrc: string;
  title: string;
};

export function ContactItem({ href, iconSrc, title }: ContactItem) {
  return (
    <Link className={styles.contactItem} href={href} target="_blank">
      <Image
        className={styles.contactItem__icon}
        width={50}
        height={50}
        src={iconSrc}
        alt={title}
      />
    </Link>
  );
}
