import { v4 as uuid } from "uuid";
import styles from "./ContactBar.module.css";
import { ContactItem } from "./ContactItem/ContactItem";

type Props = {
  items: Array<ContactItem>;
};

export function ContactBar({ items }: Props) {
  return (
    <span className={styles.contactBar}>
      {items.map(item => (
        <ContactItem key={uuid()} {...item} />
      ))}
    </span>
  );
}
