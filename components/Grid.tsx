import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import { MovieType, DataProps } from "../lib/type";
import Skeleton from "./card/Skeleton";
type Props = {
  title: string;
  fetchUrl: string;
};
const Grid = ({ title, fetchUrl }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>();
  console.log(data);
  useEffect(() => {
    axios.get(fetchUrl).then((res) => setData(res.data));
    setIsLoading(false);
  }, [fetchUrl]);
  return (
    <>
      <div className="border-b border-b-gray-700 pb-1">
        <p className="text-lg text-gray-400">{title}</p>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-3 ">
        {!isLoading ? (
          data?.results.map((movie: MovieType) => (
            <Card
              title={movie.title}
              id={movie.id}
              src={movie.poster_path}
              key={movie.id}
              href={`/movie/${movie.id}`}
            />
          ))
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
    </>
  );
};
export default Grid;
