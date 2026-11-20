import "../styles.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useScrollReveal } from "../lib/reveal";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  useScrollReveal();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
