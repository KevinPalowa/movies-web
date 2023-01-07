import React from "react";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import requests from "../../lib/requests";
import SearchBox from "../../components/SearchBox";
const Home = () => {
  return (
    <Layout title="Movies">
      <div className="flex items-center justify-end space-x-2">
        <p className="text-sm text-gray-400">FIND A FILM</p>
        <SearchBox />
      </div>
      <Grid title="Populars" fetchUrl={requests.requestPopular} />
    </Layout>
  );
};

export default Home;
