import type { ContactItem } from "components/ContactBar/ContactItem/ContactItem";
import { ContactBar } from "components/ContactBar/ContactBar";
import styles from "./Footer.module.css";

const CONTACT_ITEMS: Array<ContactItem> = [
  {
    href: "https://github.com/GenaroIBC",
    name: "github",
    size: "medium"
  },
  {
    href: "https://linkedin.com/in/genaro-bonavita/",
    name: "linkedin",
    size: "medium"
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
