import type { NextPage } from "next";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Grid title="Now Playing" fetchUrl="/api/now-playing" />
      <Grid title="Populars" fetchUrl="/api/populars" />
    </Layout>
  );
};

export default Home;
