import React from "react";
import { InferGetStaticPropsType } from "next";
// import { Blocks } from "../components/blocks";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Layout from "../components/layout/layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);

  return (
    <Layout data={data.global}>
      <div className="prose prose-lg dark:prose-dark mx-auto px-6 sm:px-8 py-12 max-w-5xl">
        <TinaMarkdown content={data.page.body} />
      </div>
      {/* <Blocks {...data.page} /> */}
    </Layout>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { filename: string };
}) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`,
  });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();
  return {
    paths: pagesListData.data.pageConnection?.edges?.map((page) => {
      const filename = page?.node?._sys.filename;
      return {
        params: { filename: filename?.toLowerCase() },
      };
    }),
    fallback: false,
  };
};
