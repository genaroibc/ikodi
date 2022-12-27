import "styles/globals.css";
import type { AppProps } from "next/app";
import "highlight.js/styles/shades-of-purple.css";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { SemanticHead } from "components/SemanticHead/SemanticHead";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <>
      <SemanticHead />
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
