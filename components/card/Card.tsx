import React from "react";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
type Props = {
  src: string | null;
  title: string;
  id: number;
  href: string;
};
const Card = ({ id, src, title, href }: Props) => {
  return (
    <div className="group relative h-56 cursor-pointer rounded-md border-2 border-gray-500 transition-all hover:border-[2px] hover:border-green-400">
      <Link href={href}>
        <a>
          {src !== null ? (
            <Image
              className="rounded-md"
              objectFit="cover"
              layout="fill"
              src={`https://image.tmdb.org/t/p/w185${src}`}
              alt={title}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center  rounded-md bg-gray-800 text-center font-bold">
              {title}
            </div>
          )}
        </a>
      </Link>
      <div className="absolute -top-8 left-1/2 z-20 -translate-x-1/2 translate-y-5 space-x-2 whitespace-nowrap rounded-md bg-gray-700 py-1 px-3 text-xs opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        {title}
      </div>
      <Overlay id={id} />
    </div>
  );
};

export default Card;
