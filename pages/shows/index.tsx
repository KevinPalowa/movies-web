import React from "react";
import Grid from "../../components/Grid";
import Layout from "../../components/Layout";
import requests from "../../lib/requests";

const Home = () => {
  return (
    <Layout title="Shows">
      <Grid title="Populars" fetchUrl={requests.requestTVPopular} />
    </Layout>
  );
};

export default Home;
