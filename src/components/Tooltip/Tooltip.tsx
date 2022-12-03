import { nanoid } from "nanoid";
import { TooltipItem } from "./TooltipItem/TooltipItem";
import styles from "./Tooltip.module.css";

type Props = {
  items: Array<TooltipItem>;
  children: JSX.Element;
};

export function Tooltip({ items, children }: Props) {
  return (
    <span className={styles.tooltip_container}>
      {children}

      <span className={styles.tooltip}>
        {items.map(item => (
          <TooltipItem {...item} key={nanoid()} />
        ))}
      </span>
    </span>
  );
}
