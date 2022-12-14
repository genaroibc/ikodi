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
    title: "github",
    href: "https://github.com/GenaroIBC",
    target: "_blank"
  },
  {
    title: "portfolio",
    href: "https://portfolio-genaroibc.vercel.app/",
    target: "_blank"
  }
];

const toggleMenu = () => {
  document
    .getElementById("open-menu-btn")
    ?.classList.toggle(styles.menu_opened);
};

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/img/logo-dark.png"
        alt="IKodi Logo"
        width={390}
        height={187}
      />
      <nav id="open-menu-btn" className={styles.nav_bar}>
        {LINKS.map(({ href, title, target }) => (
          <Link
            onClick={toggleMenu}
            className={styles.nav_bar__link}
            key={nanoid()}
            href={href}
            target={target}
          >
            {title}
          </Link>
        ))}
      </nav>
      <button onClick={toggleMenu} className={styles.menu_btn}>
        <span className={styles.menu_btn__stick}></span>
        <span className={styles.menu_btn__stick}></span>
        <span className={styles.menu_btn__stick}></span>
      </button>
    </header>
  );
}
