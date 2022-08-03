import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar";
interface Props {
  children: React.ReactNode;
  title: string;
}
const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <div className="bg-dark">
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
