import type { IconName, IconSize } from "../../Icon/Icon";
import { Icon } from "../../Icon/Icon";
import Link from "next/link";
import styles from "./ContactItem.module.css";

export type ContactItem = {
  href: string;
  name: IconName;
  size: IconSize;
};

export function ContactItem({ href, name, size }: ContactItem) {
  return (
    <Link className={styles.contactItem} href={href} target="_blank">
      <Icon className={styles.contactItem__icon} size={size} name={name} />
    </Link>
  );
}
