import Image from "next/image";
import { HTMLAttributes } from "react";
import styles from "./Icon.module.css";

export type IconName =
  | "arrow"
  | "calendar"
  | "clock"
  | "edit"
  | "github"
  | "info"
  | "linkedin"
  | "trash"
  | "warn";

export type IconSize = "tiny" | "small" | "medium" | "large" | "huge";

const IconAttributes: Record<IconSize, { px: number; className: string }> = {
  tiny: { px: 20, className: styles.iconTiny },
  small: { px: 30, className: styles.iconSmall },
  medium: { px: 40, className: styles.iconMedium },
  large: { px: 50, className: styles.iconLarge },
  huge: { px: 60, className: styles.iconHuge }
};

type Props = {
  name: IconName;
  size: IconSize;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

export function Icon({ name, size, className }: Props) {
  return (
    <Image
      alt={`${name} icon`}
      src={`/svg/${name}.svg`}
      width={IconAttributes[size].px}
      height={IconAttributes[size].px}
      className={`${styles.icon} ${IconAttributes[size].className} ${className}`}
    />
  );
}
