import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const LINKS = [
  {
    title: "home",
    href: "/"
  },
  {
    title: "about",
    href: "/"
  },
  {
    title: "portfolio",
    href: "https://portfolio-genaroibc.vercel.app/",
    target: "_blank"
  }
];

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo-dark.png"
        alt="IKodi Logo"
        width={390}
        height={187}
      />
      <nav className={styles.nav_bar}>
        {LINKS.map(({ href, title, target }) => (
          <Link
            className={styles.nav_bar__link}
            key={nanoid()}
            href={href}
            target={target}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
