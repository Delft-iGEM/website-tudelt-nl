import Layout from "../components/layout/layout";

export default function FourOhFour() {
  return (
    <Layout data={{}}>
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </Layout>
  );
}
