"use client";
import DashboardSidebar from "@/components/DashboardSidebar";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";
import Skeleton from "@/components/ui/Skeleton";

interface Movie {
  id: string;
  director: string;
  title: string;
  tagLine: string;
  imageLink: string;
  audioLink: string;
  rating: string;
  releaseYear: string;
  type: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  movieDescription: string;
}

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://advanced-internship-api-production.up.railway.app/movies/${id}`
      );
      setMovie(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="movieDetails">
          <div className="page-row movieDetails__row">
            <div className="movieDetails__content">
              <div className="movieDetails__title">
                <Skeleton width="280px" height="48px" borderRadius="8px" />
              </div>
              <span className="movieDetails__director">
                <Skeleton width="140px" height="20px" borderRadius="4px" />
              </span>
              <span className="movieDetails__tagline">
                <Skeleton width="200px" height="20px" borderRadius="4px" />
              </span>
              <div className="movieDetails__details__wrapper">
                <div className="movieDetails__details">
                  <div className="movieDetails__detail">
                    <Skeleton width="80px" height="20px" borderRadius="4px" />
                  </div>
                  <div className="movieDetails__detail">
                    <Skeleton width="80px" height="20px" borderRadius="4px" />
                  </div>
                  <div className="movieDetails__detail">
                    <Skeleton width="80px" height="20px" borderRadius="4px" />
                  </div>
                  <div className="movieDetails__detail">
                    <Skeleton width="80px" height="20px" borderRadius="4px" />
                  </div>
                </div>
              </div>
              <div className="movieDetails__button">
                <Skeleton width="100%" height="100%" borderRadius="4px" />
              </div>
              <div className="movieDetails__bookmark">
                <Skeleton width="200px" height="32px" borderRadius="8px" />
              </div>
              <div className="movieDetails__subtitle">
                <Skeleton width="140px" height="24px" borderRadius="4px" />
              </div>
              <div className="movieDetails__genres">
                <Skeleton width="100px" height="36px" borderRadius="4px" />
                <Skeleton width="100px" height="36px" borderRadius="4px" />
                <Skeleton width="100px" height="36px" borderRadius="4px" />
              </div>
              <div className="movieDetails__para">
                <Skeleton width="100%" height="16px" borderRadius="4px" />
                <Skeleton width="100%" height="16px" borderRadius="4px" />
                <Skeleton width="100%" height="16px" borderRadius="4px" />
                <Skeleton width="50%" height="16px" borderRadius="4px" />
              </div>
            </div>
            <figure className="movieDetails__img__wrapper">
              <Skeleton width="100%" height="100%" borderRadius="12px" />
            </figure>
          </div>
        </div>
      ) : (
        <div className="movieDetails">
          <div className="page-row movieDetails__row">
            <div className="movieDetails__content">
              <h1 className="movieDetails__title">{movie.title} {movie.subscriptionRequired && "(Premium)"}</h1>
              <span className="movieDetails__director">{movie.director}</span>
              <span className="movieDetails__tagline"></span>
              <div className="movieDetails__details__wrapper">
                <div className="movieDetails__details">
                  <div className="movieDetails__detail">
                    <FaRegStar className="movieDetails__detail__icon" />
                    <span className="movieDetails__detail__text">{movie.rating}</span>
                  </div>
                  <div className="movieDetails__detail">
                    <FaRegClock className="movieDetails__detail__icon" />
                    <span className="movieDetails__detail__text">10:00</span>
                  </div>
                  <div className="movieDetails__detail">
                    <FaMicrophone className="movieDetails__detail__icon" />
                    <span className="movieDetails__detail__text">{movie.type}</span>
                  </div>
                  <div className="movieDetails__detail">
                    <FaRegCalendar className="movieDetails__detail__icon" />
                    <span className="movieDetails__detail__text">{movie.releaseYear}</span>
                  </div>
                </div>
              </div>
              <button className="movieDetails__button">
                <span className="movieDetails__button__text">Summarize</span>
                <HiLightningBolt />
              </button>
              <div className="movieDetails__bookmark">
                <FaRegBookmark className="movieDetails__bookmark__icon" />
                <span className="movieDetails__bookmark__text">
                  Add to Favorites
                </span>
              </div>
              <h2 className="movieDetails__subtitle">What's it about?</h2>
              <div className="movieDetails__genres">
                {!movie.tags ? [] : movie.tags.map((movie: string, index: number) => (
                  <div className="movieDetails__genre" key={index}>
                    {movie}
                  </div>
                ))}
              </div>
              <p className="movieDetails__para">
                {movie.summary}
              </p>
            </div>
            <div className="movieDetails__img__wrapper">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                src={
                  movie.imageLink
                }
                alt=""
                className="movieDetails__img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
