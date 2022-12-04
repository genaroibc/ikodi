import "../styles/globals.css";
import type { AppProps } from "next/app";
import "highlight.js/styles/shades-of-purple.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { SemanticHead } from "../components/SemanticHead/SemanticHead";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SemanticHead />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
