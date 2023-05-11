import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  const NAVLINK = [
    { name: "SIGN IN", href: "/signin" },
    { name: "CREATE ACCOUNT", href: "/signup" },
    { name: "FILMS", href: "/films" },
  ];
  return (
    <div>
      <div className="relative z-10 from-primary to-transparent hover:bg-gradient-to-b">
        <nav className="container relative flex max-w-4xl justify-between py-6">
          <div className="z-10 text-4xl font-bold">Logo</div>
          <ul className="z-10 space-x-4 text-sm font-bold text-[#d8d6c0]">
            {NAVLINK.map((nav, i) => (
              <Link key={i} href={nav.href} className="hover:text-white">
                {nav.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute top-0 flex w-full items-center justify-center">
        <div className="relative h-[600px] w-8/12">
          <Image
            alt="image"
            src="https://images5.alphacoders.com/127/1276272.jpg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 h-[600px] w-8/12">
          <div className="absolute h-full w-1/2 bg-gradient-to-r from-primary to-transparent"></div>
          <div className="absolute right-0 h-full w-1/2 bg-gradient-to-l from-primary to-transparent"></div>
          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-primary to-transparent "></div>
        </div>
      </div>
      <div className="container relative z-20 max-w-4xl">
        <div className="flex h-[600px] flex-col items-center justify-end">
          <h1 className="w-8/12 text-center text-4xl font-bold leading-[48px]">
            Track films you’ve watched. Save those you want to see. Tell your
            friends what’s good.
          </h1>
          <button className="mt-5 rounded-md bg-green-600 px-5 py-2">
            GET STARTED - IT&apos;S FREE
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
