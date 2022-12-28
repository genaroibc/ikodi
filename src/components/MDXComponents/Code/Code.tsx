import styles from "./Code.module.css";

type ProgrammingLanguage = "JavaScript" | "TypeScript" | "HTML" | "CSS";

type Props = {
  children: React.ReactNode;
  language: ProgrammingLanguage;
};

export function Code({ children, language }: Props) {
  return (
    <div className={styles.codeContainer}>
      <span className={styles.codeContainer__language}>
        {language || "unknown"}
      </span>
      {children}
    </div>
  );
}
