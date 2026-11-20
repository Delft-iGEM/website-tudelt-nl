import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JoinCta from "../components/JoinCta";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import WhatIsIgem from "../components/WhatIsIgem";

const description =
  "Since 2008, TU Delft student teams have designed, built and tested a synthetic-biology project every year for iGEM, the world's biggest synthetic biology competition.";

export default function Home() {
  return (
    <>
      <Head>
        <title>iGEM TU Delft</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="iGEM TU Delft" />
        <meta property="og:description" content={description} />
      </Head>
      <main>
        <Hero />
        <WhatIsIgem />
        <Stats />
        <Projects />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
