import Link from "next/link";
import React from "react";

type Props = { href: string; children: React.ReactNode };
const Chip = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a className="my-0.5 mr-1 mb-0.5 block items-center whitespace-nowrap  bg-gray-800 p-1 text-xs">
        {children}
      </a>
    </Link>
  );
};

export default Chip;
