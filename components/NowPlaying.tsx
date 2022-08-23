import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MovieType, DataProps } from "../lib/type";
const NowPlaying: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>();
  useEffect(() => {
    axios.get(`/api/now-playing`).then((res) => setData(res.data));
    setIsLoading(false);
  }, []);
  return (
    <>
      <div className="border-b border-b-gray-700 pb-1">
        <p className="text-gray-400 text-sm">NOW PLAYING</p>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-3 ">
        {!isLoading
          ? data?.results.map((movie: MovieType) => (
              <Card
                title={movie.title}
                id={movie.id}
                src={movie.poster_path}
                key={movie.id}
              />
            ))
          : "Loading..."}
      </div>
    </>
  );
};

export default NowPlaying;
