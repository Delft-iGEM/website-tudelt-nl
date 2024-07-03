import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import Layout from "../components/layout/layout";
import { client } from "../tina/__generated__/client";
import { Blocks } from "../components/templates";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);
  return (
    <Layout data={data.global}>
      <Blocks blocks={data.home.blocks} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const props = await client.queries.homeQuery();
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};
