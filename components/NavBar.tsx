import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { NextRouter, useRouter } from "next/router";
const NavLink = ({ children, href }: { children: string; href: string }) => {
  const router: NextRouter = useRouter();
  const isActive = router.asPath === href;
  console.log(router.pathname);
  return (
    <Link href={href} className="bg-blue-100">
      <a
        className={`text-lg hover:text-white ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
const NavBar: NextPage = () => {
  return (
    <div className="bg-[#2c3440] py-3 text-white ">
      <div className="max-w-4xl w-full flex justify-between mx-auto">
        <h2 className="text-3xl font-bold">Movies</h2>
        <ul className="space-x-3 flex items-center">
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/popular">Popular</NavLink>
          <NavLink href="/popular">Account</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
