import axios from "axios";
import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";

const Show: NextPage = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/1402?api_key=1f26fdf0794ccc45f920074433eb11c6&language=en-US"
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <Layout title="show">Show</Layout>;
};

export default Show;
