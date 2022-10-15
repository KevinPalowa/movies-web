import axios from "axios";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import requests from "../../lib/requests";
import { MovieType } from "../../lib/type";
const Home = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Array<MovieType>>();
  const [isFocus, setIsFocus] = useState(false);
  const [time, setTime] = useState<any>();
  const searchMovie = async (query: string) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=1f26fdf0794ccc45f920074433eb11c6&language=en-US&query=${query}&page=1&include_adult=false`
      );

      const sorted = res.data.results.sort((a: MovieType, b: MovieType) => {
        return b.popularity - a.popularity;
      });
      return sorted;
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(time);
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      setMovies([]);
    }
    setTime(
      setTimeout(async () => {
        console.log("fetch");
        const data = await searchMovie(input);
        setMovies(data);
      }, 500)
    );
  };
  const suggestionsClass = classNames(
    "w-full bg-gray-400 max-h-40 z-10 absolute overflow-y-scroll",
    { hidden: !isFocus }
  );
  return (
    <Layout title="Movies">
      <div className="flex justify-end items-center space-x-2">
        <p className="text-gray-400 text-sm">FIND A FILM</p>
        <div className="relative">
          <input
            type="text"
            onChange={handleChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            className="p-1 rounded-sm bg-gray-700 w-56 text-gray-400 focus:bg-white focus:border-none"
            value={input}
          />
          <ul className={suggestionsClass}>
            {input.length > 0
              ? movies?.map((movie) => (
                  <Link href={`/movie/${movie.id}`} key={movie.id}>
                    <li
                      onClick={() => {
                        console.log("click");
                      }}
                      className="hover:bg-green-700 p-2 cursor-pointer"
                    >
                      {movie.title} ({movie.release_date?.slice(0, 4)})
                    </li>
                  </Link>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <Grid title="Populars" fetchUrl={requests.requestPopular} />
    </Layout>
  );
};

export default Home;
