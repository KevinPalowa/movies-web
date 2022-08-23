import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MovieType, DataProps } from "../lib/type";
const Populars: NextPage = () => {
  const [data, setData] = useState<DataProps>();
  useEffect(() => {
    axios.get(`/api/populars`).then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="border-b border-b-gray-700 pb-1">
        <p className="text-gray-400 text-sm">POPULAR</p>
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

export default Populars;
