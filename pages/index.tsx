import type { NextPage } from "next";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import requests from "../lib/requests";
const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Grid title="Now Playing" fetchUrl={requests.requestNowPlaying} />
      <Grid title="Populars" fetchUrl={requests.requestPopular} />
    </Layout>
  );
};

export default Home;
