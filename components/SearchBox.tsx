import React, { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MovieType } from "../lib/type";
import useOutsideClick from "../lib/hooks";
import ClipLoader from "react-spinners/ClipLoader";
const SearchBox = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Array<MovieType>>();
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState<any>();
  const parentRef = useRef(null);
  useOutsideClick(parentRef, () => {
    setIsFocus(false);
  });
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
        setIsLoading(true);
        const data = await searchMovie(input);
        setIsLoading(false);
        setMovies(data);
      }, 500)
    );
  };
  return (
    <div ref={parentRef} className="relative">
      {isLoading && <ClipLoader size={25} className="absolute right-0" />}
      <input
        type="text"
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        /* onBlur={() => setIsFocus(false)} */
        className="p-1 rounded-sm bg-gray-700 w-56 text-gray-400 focus:bg-white focus:border-none"
        value={input}
      />
      {isFocus && (
        <ul className="w-full bg-gray-500 max-h-40 z-10 absolute overflow-y-scroll">
          {input.length > 0
            ? movies?.map((movie) => (
                <Link href={`/movie/${movie.id}`} key={movie.id}>
                  <li
                    onClick={() => {
                      console.log("click");
                    }}
                    className="hover:bg-green-700 p-2 cursor-pointer text-sm"
                  >
                    {movie.title} ({movie.release_date?.slice(0, 4)})
                  </li>
                </Link>
              ))
            : ""}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
