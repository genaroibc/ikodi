import { v4 as uuid } from "uuid";
import styles from "./Tooltip.module.css";
import { ContactItem } from "../ContactItem/ContactItem";

type Props = {
  items: Array<ContactItem>;
  children: JSX.Element;
};

export function Tooltip({ items, children }: Props) {
  return (
    <span className={styles.tooltip_container}>
      {children}

      <span className={styles.tooltip}>
        {items.map(item => (
          <ContactItem {...item} key={uuid()} />
        ))}
      </span>
    </span>
  );
}
