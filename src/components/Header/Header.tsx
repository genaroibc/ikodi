import { v4 as uuid } from "uuid";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

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
  const { data: session, status } = useSession();
  console.log({ session, status });

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
            key={uuid()}
            href={href}
            target={target}
          >
            {title}
          </Link>
        ))}
      </nav>
      <nav className={styles.auth_nav_bar}>
        {status === "authenticated" ? (
          <>
            <Image
              className={styles.auth_nav_bar__img}
              alt={`Your profile photo`}
              src={session.user?.image ?? "/img/user-placeholder.jpg"}
              width={50}
              height={50}
            />
            <button
              onClick={() => signOut()}
              className={styles.auth_nav_bar__auth_provider}
            >
              Log out
            </button>
          </>
        ) : status === "loading" ? (
          <Image
            src="/svg/loader.svg"
            alt="animated loader"
            width={50}
            height={50}
          />
        ) : (
          <button
            onClick={() => signIn("github")}
            className={styles.auth_nav_bar__auth_provider}
          >
            Log in
            <Image
              width={30}
              height={30}
              src="/svg/github.svg"
              alt="GitHub logo"
            />
          </button>
        )}
      </nav>

      <button onClick={toggleMenu} className={styles.menu_btn}>
        <span className={styles.menu_btn__stick}></span>
        <span className={styles.menu_btn__stick}></span>
        <span className={styles.menu_btn__stick}></span>
      </button>
    </header>
  );
}
