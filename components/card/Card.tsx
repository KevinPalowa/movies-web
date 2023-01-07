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
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);
  return (
    <div
      ref={hoverRef}
      className="relative h-56 cursor-pointer rounded-md border-2 border-gray-500 transition hover:border-[2px] hover:border-green-400"
    >
      <Link href={`/movie/${id}`}>
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
      {isHover && (
        <>
          <div className="absolute -top-5 whitespace-nowrap rounded-sm bg-gray-700 px-2 text-xs font-bold">
            {title}
          </div>
          <Overlay />
        </>
      )}
    </div>
  );
};

export default Card;
