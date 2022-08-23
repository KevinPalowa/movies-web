export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type DataProps = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
};

export type CastType = {
  data: {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string | null;
    deathday: string | null;
    known_for_department: string;
    id: number;
    gender: number;
    popularity: number;
    place_of_birth: string | null;
    profile_path: string | null;
    imdb_id: string;
    homepage: string | null;
    name: string;
    combined_credits: [cast: [], crew: []];
  };
};
