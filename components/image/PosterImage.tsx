import React, { useState } from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import Image from "next/image";
const PosterImage = ({ src, alt }: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="bg-red-100 h-full relative border-2 border-gray-500 hover:border-green-400 hover:border-4 w-full"
    >
      <Image objectFit="cover" layout="fill" src={src} alt={alt} />
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
  );
};

export default PosterImage;
