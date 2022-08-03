import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Card from "./Card";
const NowPlaying: NextPage = () => {
  type MovieType = {
    id: number;
    title: string;
    poster_path: string;
  };
  type dataProps = {
    dates: { maximum: string; minimum: string };
    page: number;
    results: [];
    total_pages: number;
    total_results: 1444;
  };
  const [data, setData] = useState<dataProps>();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1f26fdf0794ccc45f920074433eb11c6&language=en-US&page=1"
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="border-b border-b-gray-700 pb-1">
        <p className="text-gray-400 text-sm">NOW PLAYING</p>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-3 ">
        {data?.results.map((movie: MovieType) => (
          <Card
            title={movie.title}
            id={movie.id}
            src={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default NowPlaying;
