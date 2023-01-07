import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MovieType } from "../lib/type";
import ClipLoader from "react-spinners/ClipLoader";
import { useDebounce, useOutsideClick } from "../lib/hooks";
const SearchBox = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Array<MovieType>>();
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const debounce = useDebounce<string>(input, 500);
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
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      setMovies([]);
    }
  };
  useEffect(() => {
    console.log("fetch");
    setIsLoading(true);
    const data = searchMovie(input).then((res) => {
      setIsLoading(false);
      setMovies(res);
    });
  }, [debounce]);
  return (
    <div ref={parentRef} className="relative">
      {isLoading && <ClipLoader size={25} className="absolute right-0" />}
      <input
        type="text"
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        /* onBlur={() => setIsFocus(false)} */
        className="w-56 rounded-sm bg-gray-700 p-1 text-gray-400 focus:border-none focus:bg-white"
        value={input}
      />
      {isFocus && (
        <ul className="absolute z-10 max-h-40 w-full overflow-y-scroll bg-gray-500">
          {input.length > 0
            ? movies?.map((movie) => (
                <Link href={`/movie/${movie.id}`} key={movie.id}>
                  <li
                    onClick={() => {
                      console.log("click");
                    }}
                    className="cursor-pointer p-2 text-sm hover:bg-green-700"
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
