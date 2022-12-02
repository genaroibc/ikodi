import { nanoid } from "nanoid";
import { TooltipItem } from "./TooltipItem/TooltipItem";
import styles from "./Tooltip.module.css";

type Props = {
  items: Array<TooltipItem>;
  children: JSX.Element;
};

export function Tooltip({ items, children }: Props) {
  return (
    <div className={styles.tooltip_container}>
      {children}

      <div className={styles.tooltip}>
        {items.map(item => (
          <TooltipItem {...item} key={nanoid()} />
        ))}
      </div>
    </div>
  );
}
