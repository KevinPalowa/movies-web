import { useGetMovieDetails } from "@/hooks/movie";
import Image from "next/image";
import dayjs from "dayjs";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { z } from "zod";

export default function MovieDetailsPage() {
  const { query } = useRouter();
  const { data, isLoading, isError, error } = useGetMovieDetails({
    id: Number(query.id),
    append: ["release_dates", "credits"],
  });
  if (isLoading) {
    return "isLoading...";
  }
  if (isError) {
    return error.response?.data.status_message;
  }
  return (
    <>
      <Head>
        <title>{`${data.title}  (${dayjs(data.release_date).format(
          "YYYY"
        )})`}</title>
      </Head>
      <div className="relative h-96 w-full">
        <Image
          alt="Backdrop Image"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex bg-stone-600">
        <div className="relative h-80 w-52 rounded-lg border border-slate-200">
          <Image
            alt="Poster Image"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <p>{data.title}</p>
          <p>{data.overview}</p>
        </div>
      </div>
    </>
  );
}
