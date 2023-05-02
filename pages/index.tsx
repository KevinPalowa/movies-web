import { useEffect, useRef, useState } from "react";
import { useGetTrending } from "@/hooks/trending";
import type { MediaType } from "@/hooks/trending";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const [mediaTypeOption, setMediaTypeOption] = useState<MediaType>("all");
  const { query } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetTrending({
    mediaType: mediaTypeOption,
    timeWindow: "day",
    page: query.page ? Number(query.page) : 1,
  });
  const mediaType: MediaType[] = ["movie", "all", "tv", "person"];
  if (isLoading) {
    return "Loading...";
  }
  if (isError) {
    console.log(error.response?.data.status_message);
    return "error";
  }
  return (
    <main className="bg-slate-500 h-screen">
      <select
        onChange={(e) => {
          setMediaTypeOption(e.target.value as MediaType);
        }}
        value={mediaTypeOption}
      >
        {mediaType.map((media) => (
          <option key={media}>{media}</option>
        ))}
      </select>
      <div className="grid grid-cols-5 gap-5" ref={containerRef}>
        {data.pages.map((result) =>
          result.results.map((movie, i) => (
            <Link key={i} className="bg-slate-900" href={`movie/${movie.id}`}>
              <Image
                alt="Poster"
                width={500}
                height={700}
                src={`https://image.tmdb.org/t/p/w500/${
                  movie.poster_path ? movie.poster_path : movie.profile_path
                }`}
              />
              <span className="text-center">{movie.original_name}</span>
            </Link>
          ))
        )}
      </div>
      {hasNextPage && (
        <div>
          {isFetchingNextPage ? "Loading more..." : "Scroll down to load more"}
        </div>
      )}

      {!hasNextPage && <div>End of content</div>}
    </main>
  );
}
