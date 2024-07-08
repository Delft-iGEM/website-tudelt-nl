import { InferGetStaticPropsType } from "next";
import Layout from "../components/layout/layout";
import client from "../tina/__generated__/client";

export default function FourOhFour(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (!props) return null;
  return (
    <Layout data={props}>
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const props =
    (await client.queries.globalConnection()).data?.globalConnection?.edges?.[0]
      ?.node ?? null;
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};
