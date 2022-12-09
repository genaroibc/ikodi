import { ContactItem } from "components/ContactItem/ContactItem";
import { Tooltip } from "components/Tooltip/Tooltip";
import styles from "./Hero.module.css";

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

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>IKodi</h1>
      <h2 className={styles.hero_subtitle}>
        a blog about <span className="text-highlighted">web development</span>
      </h2>

      <p className={styles.hero_description}>
        Welcome 👋. I am{" "}
        <Tooltip items={CONTACT_ITEMS}>
          <span className={styles.hero_description__name}>Genaro Bonavita</span>
        </Tooltip>
        , Frontend Developer.
      </p>
      <p className={styles.hero_description}>
        Here I share my knowledge writting posts about different tools,
        technologies and concepts.
      </p>
      <p className={styles.hero_description}>I hope you enjoy it 🚀!</p>
    </section>
  );
}
