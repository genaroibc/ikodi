import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>IKodi</h1>
      <h2 className={styles.hero_subtitle}>
        a blog about <span className="text-highlighted">web development.</span>
      </h2>

      <p className={styles.hero_description}>
        Welcome 👋. I am <span className="text-bold">Genaro Bonavita</span>,
        Frontend Developer.
      </p>
      <p className={styles.hero_description}>
        Here I share my knowledge writing posts about different tools,
        technologies and concepts.
      </p>
      <p className={styles.hero_description}>I hope you enjoy it 🚀!</p>
    </section>
  );
}
