import Link from "next/link";
import React, { useState } from "react";

const TabLists = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-5 border-b border-gray-600">{children}</div>
  );
};

const InfoTab = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("cast");
  return (
    <div>
      <TabLists>
        <p
          className={`
            ${
              activeTab === "cast" &&
              "hover: border-b border-green-500 text-green-500"
            } cursor-pointer`}
          onClick={() => setActiveTab("cast")}
        >
          Cast
        </p>
        <p
          className={`${
            activeTab === "genres" && "border-b border-white text-green-500"
          } cursor-pointer`}
          onClick={() => setActiveTab("genres")}
        >
          Genres
        </p>
      </TabLists>
      <div className="mt-3 flex w-full flex-wrap">
        {activeTab === "cast"
          ? data.credits.cast.map((cast: { id: number; name: string }) => (
              <Link key={cast.id} href={`/cast/${cast.id}`}>
                <a className="my-0.5 mr-1 mb-0.5 block items-center whitespace-nowrap  bg-gray-800 p-1 text-xs">
                  {cast.name}
                </a>
              </Link>
            ))
          : data.genres.map((genre: { id: number; name: string }) => (
              <Link key={genre.id} href={`/genre/${genre.id}`}>
                <a className="my-0.5 mr-1 block items-center whitespace-nowrap  bg-gray-800 p-1 text-xs">
                  {genre.name}
                </a>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default InfoTab;
