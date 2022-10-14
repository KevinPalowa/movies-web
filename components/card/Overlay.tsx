import React, { useState } from "react";
import {
  AiOutlineEye,
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

const Overlay = () => {
  const [isWatched, setIsWatched] = useState(false);
  const [isLove, setIsLove] = useState(false);
  return (
    <div className="z-20 absolute bg-black/90 left-1/3 bottom-2 rounded-md justify-center space-x-2 flex p-1">
      {isWatched ? (
        <AiFillEye size={"20px"} onClick={() => setIsWatched(!isWatched)} />
      ) : (
        <AiOutlineEye size={"20px"} onClick={() => setIsWatched(!isWatched)} />
      )}
      {isLove ? (
        <AiFillHeart size={"20px"} onClick={() => setIsLove(!isLove)} />
      ) : (
        <AiOutlineHeart size={"20px"} onClick={() => setIsLove(!isLove)} />
      )}
    </div>
  );
};

export default Overlay;
