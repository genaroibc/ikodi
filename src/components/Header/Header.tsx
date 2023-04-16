import { v4 as uuid } from "uuid";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";
import { Loader } from "components/Loader/Loader";
import { LoginButton } from "components/LoginButton/LoginButton";

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
    href: "https://genarobonavita.dev/",
    target: "_blank"
  }
];

const toggleMenu = () => {
  document.getElementById("open-menu-btn")?.classList.toggle(styles.menuOpened);
};

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.header__logo}
          src="/img/logo-dark.png"
          alt="IKodi Logo"
          width={390}
          height={187}
        />
      </Link>
      <nav id="open-menu-btn" className={styles.navBar}>
        {LINKS.map(({ href, title, target }) => (
          <Link
            onClick={toggleMenu}
            className={styles.navBar__link}
            key={uuid()}
            href={href}
            target={target}
          >
            {title}
          </Link>
        ))}
      </nav>
      <nav className={styles.authNavBar}>
        {status === "authenticated" ? (
          <>
            <Image
              className={styles.authNavBar__img}
              alt={`Your profile photo`}
              src={session.user?.image ?? "/img/user-placeholder.jpg"}
              width={50}
              height={50}
            />
            <button
              className={styles.authNavBar__btn}
              onClick={() => signOut()}
            >
              Log out
            </button>
          </>
        ) : status === "loading" ? (
          <Loader width={50} height={50} />
        ) : (
          <LoginButton />
        )}
      </nav>

      <button accessKey="k" onClick={toggleMenu} className={styles.menuBtn}>
        <span className={styles.menuBtn__stick}></span>
        <span className={styles.menuBtn__stick}></span>
        <span className={styles.menuBtn__stick}></span>
      </button>
    </header>
  );
}
