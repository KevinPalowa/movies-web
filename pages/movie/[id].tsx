import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import PosterImage from "../../components/image/PosterImage";
import Link from "next/link";

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
  // const { id } = router.query;
  // const [data, setData] = useState<Data>();
  // useEffect(() => {
  //   axios.get(`/api/movie/${id}`).then((res) => setData(res.data));
  // }, [id]);
  return (
    <Layout title={data.title}>
      <div className="flex space-x-10">
        <div className="w-1/4 h-80">
          <PosterImage
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="w-3/4">
          <p className="font-bold text-3xl">
            {data.original_title}{" "}
            <span className="text-sm font-normal">
              {data.release_date.substring(4, 0)}
            </span>
          </p>
          <p className="mt-5 text-gray-400">{data?.overview}</p>
          <div>
            <p>Cast: </p>
            <div className="flex space-y-1 w-full flex-wrap">
              {data.credits.cast.map((cast) => (
                <Link key={cast.id} href={`/cast/${cast.id}`}>
                  <a className="mr-1 my-0.5 block text-xs bg-gray-800  p-1 items-center whitespace-nowrap">
                    {cast.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const router = useRouter();
  // const { id } = router.query;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/616037?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`
  );
  return {
    props: { data: res.data },
  };
};
export default Movie;
