import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import PosterImage from "../../components/image/PosterImage";
import axios from "axios";
import { CastType, MovieType } from "../../lib/type";
import Card from "../../components/Card";
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${query.id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=combined_credits`
  );
  return {
    props: { data: res.data },
  };
};
const Cast: NextPage<CastType> = ({ data }) => {
  return (
    <Layout title={`Film starring ${data.name}`}>
      <div className="flex space-x-10">
        <div className="w-9/12">
          <p className="text-sm text-gray-400">FILM STARRING</p>
          <p className="text-2xl font-bold">{data.name}</p>

          <div className="mt-3 grid grid-cols-4 gap-5 ">
            {data.combined_credits.cast.map((movie: MovieType) => (
              <Card
                title={movie.title}
                id={movie.id}
                src={movie.poster_path}
                key={movie.id}
              />
            ))}
          </div>
        </div>
        <div className="w-3/12 h-80">
          <PosterImage
            src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
          />
          <p className="text-sm">{data.biography}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cast;
