import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { revealDelay } from "../lib/reveal";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found · iGEM TU Delft</title>
      </Head>
      <main className="bg-navy text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center gap-6 px-6 py-28 md:px-10">
          <img
            src="/images/logo-igem-tudelft.png"
            alt="iGEM TU Delft logo"
            data-reveal
            className="mb-2 block h-12 w-auto self-start md:h-14"
          />
          <h1
            data-reveal
            style={revealDelay(90)}
            className="text-[clamp(30px,3.2vw,40px)] leading-[1.1] font-extrabold tracking-[-0.02em]"
          >
            Page not found
          </h1>
          <p
            data-reveal
            style={revealDelay(180)}
            className="max-w-[520px] text-base leading-[1.65] text-[#C7D2E8]"
          >
            This page doesn&apos;t exist, or it moved when we rebuilt the site.
          </p>
          <div data-reveal style={revealDelay(270)}>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center rounded-lg bg-green px-5 py-3 text-sm font-bold text-[#04130D] no-underline hover:bg-[#33E0A8] hover:text-[#04130D]"
            >
              Back to the home page
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
