import "../styles/globals.css";
import type { AppProps } from "next/app";
import "highlight.js/styles/github.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
