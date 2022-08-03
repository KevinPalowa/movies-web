import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="title">
      <Head>
        <title>Title</title>
      </Head>
      <h2 className="text-5xl">This Page Using Tailwindcss</h2>
    </Layout>
  );
};

export default Home;
