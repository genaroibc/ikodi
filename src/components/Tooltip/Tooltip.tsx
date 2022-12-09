import { nanoid } from "nanoid";
import styles from "./Tooltip.module.css";
import { ContactItem } from "components/ContactItem/ContactItem";

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
          <ContactItem {...item} key={nanoid()} />
        ))}
      </span>
    </span>
  );
}
