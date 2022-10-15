import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Layout from "../../components/Layout";
import { MovieType, DataProps } from "../../lib/type";
const Genre = () => {
  const [movies, setMovies] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=1f26fdf0794ccc45f920074433eb11c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data));
    setIsLoading(false);
  }, []);
  return (
    <Layout title="Browse Movie">
      {!isLoading ? (
        <>
          {/* <div className="bg-gray-700 text-center text-xs p-3 rounded-md text-gray-300"> */}
          {/*   There are {movies.total_results} thrillers */}
          {/* </div> */}
          <div className="mt-3 grid grid-cols-5 gap-3 ">
            {movies?.results.map((movie: MovieType) => (
              <Card
                title={movie.title}
                id={movie.id}
                src={movie.poster_path}
                key={movie.id}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-3">
            <p className="text-green-400 rounded-full">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>{movies?.total_pages}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Genre;
