import { nanoid } from "nanoid";
import { ContactBarItem } from "./ContactBarItem/ContactBarItem";
import styles from "./ContactBar.module.css";

type Props = {
  items: Array<ContactBarItem>;
};

export function ContactBar({ items }: Props) {
  return (
    <div className={styles.contact_bar}>
      {items.map(item => (
        <ContactBarItem key={nanoid()} {...item} />
      ))}
    </div>
  );
}
