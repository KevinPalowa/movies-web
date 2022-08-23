import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { FiLogOut } from "react-icons/fi";
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

const Modal = ({
  user,
  isActive,
}: {
  user: { picture: string; email: string; name: string };
  isActive: boolean;
}) => {
  console.log(isActive);
  return (
    <div
      className={`absolute top-14 z-10 p-5 rounded-lg right-56 bg-[#2c3440] border border-gray-500 ${
        !isActive && "hidden"
      }`}
    >
      <div className="flex space-x-1 items-center text-sm text-gray-400">
        <div className="w-8 h-8 relative ">
          <Image
            className="rounded-full"
            src={user.picture}
            alt="profile picture"
            layout="fill"
          />
        </div>
        <div className="flex-row">
          <p className="text-white">{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <FiLogOut />
        <Link href="/api/auth/logout">
          <a className="text-sm text-inherit">Log out</a>
        </Link>
      </div>
    </div>
  );
};

const NavBar = () => {
  const { user } = useUser();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-[#2c3440] py-3">
      <div className="max-w-4xl w-full flex justify-between mx-auto">
        <Link href="/">
          <a className="text-3xl font-bold">Movies</a>
        </Link>
        <ul className="space-x-3 flex items-center">
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/popular">Popular</NavLink>
          {user ? (
            <>
              <div
                onClick={() => setIsActive(!isActive)}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <div className="w-8 h-8 relative ">
                  <Image
                    className="rounded-full"
                    src={user.picture}
                    alt="profile picture"
                    layout="fill"
                  />
                </div>
              </div>
              <Modal isActive={isActive} user={user} />
              {/* <NavLink href="/api/auth/logout">Logout</NavLink> */}
            </>
          ) : (
            <NavLink href="/api/auth/login">Login</NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
