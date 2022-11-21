import React, { useState } from "react";
import {
  AiOutlineEye,
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

type Props = { id: number };
const addFavorites = (id: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") as string);
  if (favorites) {
    if (!favorites.find((fav: number) => fav === id)) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
      return true;
    } else {
      removeFavorites(id);
    }
  } else {
    localStorage.setItem("favorites", JSON.stringify([id]));
    return true;
  }
};

const removeFavorites = (id: number) => {
  const favorites = getFavorites();
  const result = favorites.filter((fav: number) => fav !== id);
  localStorage.setItem("favorites", JSON.stringify(result));
  return result;
};

const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites") as string);
};
const Overlay = ({ id }: Props) => {
  const [isWatched, setIsWatched] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const handleWatchClick = () => {
    setIsLove(!isLove);
    addFavorites(id);
    console.log(getFavorites().includes(id), getFavorites());
  };
  return (
    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 translate-y-5 items-center space-x-2 rounded-md bg-black/80 py-1 px-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
      {isWatched ? (
        <AiFillEye size={"20px"} onClick={() => setIsWatched(!isWatched)} />
      ) : (
        <AiOutlineEye size={"20px"} onClick={() => setIsWatched(!isWatched)} />
      )}
      {getFavorites().includes(id) ? (
        <AiFillHeart
          size={"20px"}
          onClick={handleWatchClick}
          className="text-green-400"
        />
      ) : (
        <AiOutlineHeart size={"20px"} onClick={handleWatchClick} />
      )}
    </div>
  );
};

export default Overlay;
