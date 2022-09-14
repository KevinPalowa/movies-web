import React from "react";
import Layout from "../components/Layout";
const Error = () => {
  return (
    <Layout title="Page not found">
      <div className="text-center">
        Sorry, we can’t find the page you’ve requested.
      </div>
    </Layout>
  );
};

export default Error;
