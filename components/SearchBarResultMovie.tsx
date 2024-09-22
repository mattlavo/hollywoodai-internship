"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import Skeleton from "./ui/Skeleton";

interface Movie {
  title: string;
  director: string;
  imageLink: string;
  duration: string;
}

interface SearchResultMovieInterface {
  loading: boolean;
  movie?: Movie;
  id?: string;
}

function SearchBarResultMovie({ loading, movie, id }: SearchResultMovieInterface) {


  const [movieId, setMovieId] = useState<string>();

  useEffect(() => {
      if (id === undefined) {
        setMovieId(id)
      } else {
        setMovieId(id);
      }
  }, [movie]);

  return (
    <Link href={`/movie/${movieId}`} className="searchbar__movie">
      {loading ? (
        <Skeleton width="58px" height="88px" borderRadius="4px" />
      ) : (
        <Image
          src={movie!.imageLink}
          width={60}
          height={88}
          className="searchbar__movie__img"
          alt={movie!.title}
        />
      )}
      <div className="searchbar__movie__details">
        {loading ? (
          <>
            <span className="searchbar__movie__title">
                <Skeleton width="106px" height="16px" borderRadius="4px" />
            </span>
            <span className="searchbar__movie__director">
                <Skeleton width="72px" height="16px" borderRadius="4px" />
            </span>
            <span className="searchbar__movie__duration">
                <Skeleton width="64px" height="16px" borderRadius="4px" />
            </span>
          </>
        ) : (
          <>
            <span className="searchbar__movie__title">{movie?.title}</span>
            <span className="searchbar__movie__director">{movie?.director}</span>
            <div className="searchbar__movie__duration">
              <FaRegClock className="searchbar__movie__duration__icon" />
              <span className="searchbar__movie__duration__text">21:21</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default SearchBarResultMovie;
