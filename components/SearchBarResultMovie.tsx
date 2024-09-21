import Image from "next/image";
import Link from "next/link";
import React from "react";
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
}

function SearchBarResultMovie({ loading, movie }: SearchResultMovieInterface) {


  return (
    <Link href="/movie/:id" className="searchbar__movie">
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
