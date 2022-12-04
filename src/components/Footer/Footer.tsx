import { ContactItem } from "../ContactItem/ContactItem";
import { ContactBar } from "./ContactBar/ContactBar";
import styles from "./Footer.module.css";

const CONTACT_ITEMS: Array<ContactItem> = [
  {
    iconSrc: "/svg/github.svg",
    title: "TITLE",
    href: "https://github.com/GenaroIBC"
  },
  {
    iconSrc: "/svg/linkedin.svg",
    title: "TITLE",
    href: "https://www.linkedin.com/in/genaro-bonavita-170742231/"
  }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__contact__title}>Reach me on:</p>

      <ContactBar items={CONTACT_ITEMS} />

      <p>
        Developed by <span className="text-bold">Genaro Bonavita</span> in 2022
      </p>
    </footer>
  );
}
