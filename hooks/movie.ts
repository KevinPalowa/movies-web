import AXIOS_INSTANCE from "@/lib/axios";
import { ErrorResponse } from "@/type/global";
import { Movie } from "@/type/movie";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type AppendResponse = "credits" | "similar" | "release_dates";
type GetMovieDetailsParams = {
  id: number;
  append?: AppendResponse[];
};
async function getMovieDetails(params: GetMovieDetailsParams): Promise<Movie> {
  const { id, append } = params;
  let query = "";
  if (append) {
    query += `append_to_response=${append.join(",")}`;
  }
  const response = await AXIOS_INSTANCE.get(`movie/${id}?${query}`);
  return response.data;
}
export function useGetMovieDetails(params: {
  id: number;
  append?: AppendResponse[];
}) {
  const { id, append } = params;
  return useQuery<Movie, AxiosError<ErrorResponse>>({
    queryFn: () => getMovieDetails(params),
    enabled: !!params.id,
    queryKey: ["movieDetails", id, append],
  });
}
