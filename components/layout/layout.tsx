import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
// import { Footer } from "./footer";
import { Global, GlobalHeaderNav } from "../../tina/__generated__/types";

export default function Layout({
  data,
  children,
}: {
  data: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const navLinks = (data.header?.nav ?? []).filter(
    (nav) => nav !== null
  ) as GlobalHeaderNav[];

  return (
    <>
      <Head>
        <title>NitroBLAST</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div>
          <Navbar logoSrc={data.header.logo ?? undefined} links={navLinks} />

          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
            {children}
          </div>

          {/* <Footer rawData={rawData} data={data?.footer} /> */}
        </div>
      </>
    </>
  );
}
