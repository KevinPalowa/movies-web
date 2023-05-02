import AXIOS_INSTANCE from "@/lib/axios";
import type { ErrorResponse, PaginatedResponse } from "@/type/global";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";

const TrendingResultScheme = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  profile_path: z.string(),
  release_date: z.date(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  popularity: z.number(),
  first_air_date: z.date(),
  name: z.string(),
  origin_country: z.array(z.string()),
  original_name: z.string(),
});

type TrendingResult = z.infer<typeof TrendingResultScheme>;

export const MediaTypeScheme = z.enum(["tv", "all", "movie", "person"]);
export const TimeWindowScheme = z.enum(["day", "week"]);
export type MediaType = z.infer<typeof MediaTypeScheme>;
export type TimeWindow = z.infer<typeof TimeWindowScheme>;
type GetTrendingProps = {
  mediaType: MediaType;
  timeWindow: TimeWindow;
  page: number;
};
type GetTrendingReturn = Readonly<PaginatedResponse<Partial<TrendingResult>>>;
async function getTrending({
  mediaType,
  timeWindow,
  page = 1,
}: GetTrendingProps): Promise<GetTrendingReturn> {
  const response = await AXIOS_INSTANCE.get(
    `trending/${mediaType}/${timeWindow}?page=${page}`
  );
  return response.data;
}

export function useGetTrending({
  mediaType,
  timeWindow,
  page,
}: GetTrendingProps) {
  return useInfiniteQuery<GetTrendingReturn, AxiosError<ErrorResponse>>({
    queryKey: ["trending", mediaType, timeWindow, page],
    queryFn: ({ pageParam }) =>
      getTrending({ mediaType, timeWindow, page: pageParam }),
    getNextPageParam: (lastPage, pages) => lastPage.page + 1,
  });
  /* useQuery<GetTrendingReturn, AxiosError<ErrorResponse>>({
    queryKey: ["trending", mediaType, timeWindow, page],
    keepPreviousData: true,
    queryFn: () => getTrending({ mediaType, timeWindow, page }),
  }); */
}
