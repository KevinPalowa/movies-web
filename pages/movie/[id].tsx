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
    tagline: string;
  };
};
const Movie: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <Layout title={`${data.title} (${data.release_date.substring(4, 0)})`}>
      <div className="flex space-x-10">
        <div className="h-80 w-1/4">
          <PosterImage
            src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="w-3/4 text-gray-400">
          <p className="text-3xl font-bold">{data.title}</p>
          <div>
            <span className="text-sm font-normal">
              {data.release_date.substring(4, 0)}
            </span>
            <span> Directed by James cameron</span>
          </div>
          <p>{data.tagline}</p>
          <p className="mt-5">{data?.overview}</p>
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
