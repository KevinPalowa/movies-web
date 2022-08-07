import type { NextPage } from "next";
import Layout from "../components/Layout";
import NowPlaying from "../components/NowPlaying";
import Populars from "../components/Populars";
const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <NowPlaying />
      <Populars />
    </Layout>
  );
};

export default Home;
