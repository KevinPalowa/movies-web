import React, { useRef } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Overlay from "./Overlay";
import { useHover } from "../../lib/hooks";
type Props = {
  src: string | null;
  title: string;
  id: number | string;
};
const Card: NextPage<Props> = ({ id, src, title }) => {
  const hoverRef = useRef<HTMLAnchorElement>(null);
  const isHover = useHover(hoverRef);
  return (
    <Link href={`/movie/${id}`}>
      <a
        ref={hoverRef}
        className="cursor-pointer h-56 rounded-md relative border-2 border-gray-500 transition hover:border-green-400 hover:border-[2px]"
      >
        {src !== null ? (
          <Image
            className="rounded-md"
            objectFit="cover"
            layout="fill"
            src={`https://image.tmdb.org/t/p/w185${src}`}
            alt={title}
          />
        ) : (
          <div className="bg-gray-800 w-full h-full font-bold rounded-md  text-center items-center flex justify-center">
            {title}
          </div>
        )}
        {isHover && (
          <>
            <div className="absolute -top-5 bg-gray-700 text-xs px-2 rounded-sm font-bold whitespace-nowrap">
              {title}
            </div>
            <Overlay />
          </>
        )}
      </a>
    </Link>
  );
};

export default Card;
