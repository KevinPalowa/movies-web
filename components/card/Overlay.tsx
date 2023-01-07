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
    <div className="absolute left-1/3 bottom-2 z-20 flex justify-center space-x-2 rounded-md bg-black/90 p-1">
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
