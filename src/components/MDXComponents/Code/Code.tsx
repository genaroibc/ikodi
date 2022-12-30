import Image from "next/image";
import styles from "./Code.module.css";

type ProgrammingLanguage = "javascript" | "typescript" | "html";

type Props = {
  children: React.ReactNode;
  language: ProgrammingLanguage;
};

export function Code({ children, language }: Props) {
  return (
    <div className={styles.codeContainer}>
      <span className={styles.codeContainer__language}>
        <Image
          alt={`${language} logo`}
          src={`/svg/techs/${language}.svg`}
          width={30}
          height={30}
        />
      </span>
      {children}
    </div>
  );
}
