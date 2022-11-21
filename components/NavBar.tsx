import Link from "next/link";
import React from "react";
import { NextRouter, useRouter } from "next/router";
const NavLink = ({ children, href }: { children: string; href: string }) => {
  const router: NextRouter = useRouter();
  const isActive = router.asPath === href;
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

const NavBar = () => {
  return (
    <div className="bg-[#2c3440] py-3">
      <div className="mx-auto flex w-full max-w-4xl justify-between">
        <Link href="/">
          <a className="text-3xl font-bold">Movies</a>
        </Link>
        <ul className="flex items-center space-x-3">
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/shows">Shows</NavLink>
          <NavLink href="/popular">Popular</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
