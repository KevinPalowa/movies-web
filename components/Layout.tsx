import { NextPage } from "next";
import Head from "next/head";
import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
}
const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
