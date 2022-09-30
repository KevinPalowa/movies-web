import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MovieType, DataProps } from "../lib/type";
type Props = {
  title: string;
  fetchUrl: string;
};
const NowPlaying = ({ title, fetchUrl }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>();
  useEffect(() => {
    axios.get(fetchUrl).then((res) => setData(res.data));
    setIsLoading(false);
  }, []);
  return (
    <>
      <div className="border-b border-b-gray-700 pb-1">
        <p className="text-gray-400 text-sm">{title}</p>
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
