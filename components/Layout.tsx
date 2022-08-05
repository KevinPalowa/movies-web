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
    <div className="bg-dark text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main className="max-w-4xl mx-auto py-5">{children}</main>
    </div>
  );
};

export default Layout;
