import React, { useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { FiEye, FiHeart } from "react-icons/fi";
import Link from "next/link";
type Props = {
  src: string | null;
  title: string;
  id: number | string;
};
const Card: NextPage<Props> = ({ id, src, title }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={`/movie/${id}`}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="box-border cursor-pointer h-56 rounded-md relative border-2 border-gray-500 hover:border-green-400 hover:border-4"
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
          <div className="bg-gray-800 w-full h-full font-bold rounded-md text-center items-center flex justify-center">
            {title}
          </div>
        )}
        {isHover ? (
          <div className="absolute bg-black/50 w-full bottom-0 justify-center space-x-2 flex py-1">
            <FiEye size={"20px"} />
            <FiHeart size={"20px"} />
          </div>
        ) : (
          <div className="absolute bg-black/50 w-full bottom-0 justify-center space-x-2 hidden">
            <FiEye size={"20px"} />
            <FiHeart size={"20px"} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
