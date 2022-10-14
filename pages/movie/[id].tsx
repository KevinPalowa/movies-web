import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import PosterImage from "../../components/image/PosterImage";
import InfoTab from "../../components/InfoTab";

type Props = {
  data: {
    title: string;
    poster_path: string;
    original_title: string;
    overview: string;
    release_date: string;
    credits: object;
  };
};
const Movie: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <Layout title={data.title}>
      <div className="flex space-x-10">
        <div className="w-1/4 h-80">
          <PosterImage
            src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="w-3/4">
          <p className="font-bold text-3xl">
            {data.title}{" "}
            <span className="text-sm font-normal">
              {data.release_date.substring(4, 0)}
            </span>
          </p>
          <p className="mt-5 text-gray-400">{data?.overview}</p>
          <InfoTab data={data} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const router = useRouter();
  // const { id } = router.query;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${query.id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`
  );
  return {
    props: { data: res.data },
  };
};
export default Movie;
