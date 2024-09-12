import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Skeleton from "./ui/Skeleton";

interface SearchResultMovieInterface {
  loading: boolean;
}

function SearchBarResultMovie({ loading }: SearchResultMovieInterface) {
  return (
    <Link href="/movie/:id" className="searchbar__movie">
      {loading ? (
        <Skeleton width="58px" height="88px" borderRadius="4px" />
      ) : (
        <Image
          src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX190_CR0,0,190,281_.jpg"
          width={60}
          height={88}
          className="searchbar__movie__img"
          alt="Avengers Endgame"
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
            <span className="searchbar__mvoie__duration">
                <Skeleton width="64px" height="16px" borderRadius="4px" />
            </span>
          </>
        ) : (
          <>
            <span className="searchbar__movie__title">Avengers: Endgame</span>
            <span className="searchbar__movie__director">Anthony Russo</span>
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
