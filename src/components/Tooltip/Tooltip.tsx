import type { ContactItem } from "../ContactBar/ContactItem/ContactItem";
import { ContactBar } from "../ContactBar/ContactBar";
import styles from "./Tooltip.module.css";

type Props = {
  items: Array<ContactItem>;
  children: JSX.Element;
};

export function Tooltip({ items, children }: Props) {
  return (
    <span className={styles.tooltipContainer}>
      {children}

      <span className={styles.tooltip}>
        <ContactBar items={items} />
      </span>
    </span>
  );
}
