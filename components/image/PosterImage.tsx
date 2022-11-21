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
      className="relative h-full cursor-pointer rounded-md border-2 border-gray-500 transition hover:border-[2px] hover:border-green-400"
    >
      <Image
        className="rounded-md"
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
      />
      {isHover ? (
        <div className="absolute bottom-0 flex w-full justify-center space-x-2 bg-black/50 py-1">
          <FiEye size={"20px"} />
          <FiHeart size={"20px"} />
        </div>
      ) : (
        <div className="absolute bottom-0 hidden w-full justify-center space-x-2 bg-black/50">
          <FiEye size={"20px"} />
          <FiHeart size={"20px"} />
        </div>
      )}
    </div>
  );
};

export default PosterImage;
