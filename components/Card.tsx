import React, { useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { FiEye, FiHeart } from "react-icons/fi";
import Link from "next/link";
type Props = {
  src: string;
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
        className="bg-red-100 h-48 relative border-2 border-gray-500 hover:border-green-400 hover:border-4"
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={`https://image.tmdb.org/t/p/w500${src}`}
          alt={title}
        />
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
