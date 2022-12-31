import { Icon } from "components/Icon/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const { asPath } = useRouter();

  return (
    <main className="notFoundPage">
      <div className="notFoundPage__textContainer">
        <h1 className="notFoundPage__title">Oops! Page not found 😵</h1>
        <h2 className="notFoundPage__subtitle">
          {asPath} doesn&apos;t looks correct
        </h2>
        <Link className="notFoundPage__backToHome" href="/">
          <Icon name="arrow" size="tiny" />
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
