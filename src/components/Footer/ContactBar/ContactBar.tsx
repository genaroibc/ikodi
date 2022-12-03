import { nanoid } from "nanoid";
import styles from "./ContactBar.module.css";
import { ContactItem } from "../../ContactItem/ContactItem";

type Props = {
  items: Array<ContactItem>;
};

export function ContactBar({ items }: Props) {
  return (
    <div className={styles.contact_bar}>
      {items.map(item => (
        <ContactItem key={nanoid()} {...item} />
      ))}
    </div>
  );
}
