import styles from "./Code.module.css";

type ProgrammingLanguage = "JavaScript" | "TypeScript" | "HTML" | "CSS";

type Props = {
  children: React.ReactNode;
  language: ProgrammingLanguage;
};

export function Code({ children, language }: Props) {
  return (
    <div className={styles.code_container}>
      <span className={styles.code_container__language}>{language}</span>
      {children}
    </div>
  );
}
