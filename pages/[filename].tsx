import React from "react";
import { InferGetStaticPropsType } from "next";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Layout from "../components/layout/layout";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { templateComponents } from "../components/templates";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);

  return (
    <Layout data={data.global}>
      <div className="prose prose-lg dark:prose-dark mx-auto px-6 sm:px-8 py-12 max-w-5xl">
        <TinaMarkdown
          data-tina-field={tinaField(data.page.body)}
          content={data.page.body as TinaMarkdownContent}
          components={templateComponents}
        />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { filename: string };
}) => {
  const props = await client.queries.contentQuery({
    relativePath: `${params.filename}.mdx`,
  });
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
        params: { filename },
      };
    }),
    fallback: false,
  };
};
