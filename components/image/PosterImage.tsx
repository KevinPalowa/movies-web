import React, { useRef } from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import Image from "next/image";
import { useHover } from "../../lib/hooks";
const PosterImage = ({ src, alt }: any) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);
  return (
    <div
      ref={hoverRef}
      className="cursor-pointer h-full rounded-md relative border-2 border-gray-500 transition hover:border-green-400 hover:border-[2px]"
    >
      <Image
        className="rounded-md"
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
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
  );
};

export default PosterImage;
