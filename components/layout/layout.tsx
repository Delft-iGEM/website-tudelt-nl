import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
// import { Footer } from "./footer";
import { Global, GlobalHeaderNav } from "../../tina/__generated__/types";
import { Poppins } from "next/font/google";
import { cn } from "../../lib/cn";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Layout({
  data,
  children,
  className = "",
}: {
  data: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
  className?: string;
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
        <div className={cn(poppins.className, className)}>
          <Navbar logoSrc={data?.header?.logo ?? undefined} links={navLinks} />

          <main className="flex-1 flex flex-col">{children}</main>

          {/* <Footer rawData={rawData} data={data?.footer} /> */}
        </div>
      </>
    </>
  );
}
