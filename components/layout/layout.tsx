import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer, { FooterColumn, SocialLink } from "./footer";
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
  const columns = (data.footer?.columns ?? []).filter(
    (column) => column !== null
  ) as FooterColumn[];
  const socialLinks = (data.footer?.socialLinks ?? []).filter(
    (link) => link !== null
  ) as SocialLink[];

  return (
    <>
      <Head>
        <title>{data.title ?? "iGEM TUDELFT"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div className={cn(poppins.className, className)}>
          <Navbar logoSrc={data?.header?.logo ?? undefined} links={navLinks} />

          <main className="flex-1 flex flex-col">{children}</main>

          <Footer
            logo={data.footer?.logo ?? undefined}
            columns={columns}
            socialLinks={socialLinks}
          />
        </div>
      </>
    </>
  );
}
