import Link from "next/link";
import React, { useState } from "react";

const InfoTab = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("cast");
  console.log(data);
  return (
    <div>
      <div className="flex space-x-5">
        <p
          className={`
            ${
              activeTab === "cast" && "text-green-500 border-b border-white"
            } cursor-pointer`}
          onClick={() => setActiveTab("cast")}
        >
          Cast
        </p>
        <p
          className={`${
            activeTab === "genres" && "text-green-500 border-b border-white"
          } cursor-pointer`}
          onClick={() => setActiveTab("genres")}
        >
          Genres
        </p>
      </div>
      <div className="flex mt-3 w-full flex-wrap">
        {activeTab === "cast"
          ? data.credits.cast.map((cast: { id: number; name: string }) => (
              <Link key={cast.id} href={`/cast/${cast.id}`}>
                <a className="mr-1 mb-0.5 my-0.5 block text-xs bg-gray-800  p-1 items-center whitespace-nowrap">
                  {cast.name}
                </a>
              </Link>
            ))
          : data.genres.map((genre: { id: number; name: string }) => (
              <Link key={genre.id} href={`/genre/${genre.id}`}>
                <a className="mr-1 my-0.5 block text-xs bg-gray-800  p-1 items-center whitespace-nowrap">
                  {genre.name}
                </a>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default InfoTab;
