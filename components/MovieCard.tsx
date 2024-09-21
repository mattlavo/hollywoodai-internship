import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import {
  AudioPlayerProvider,
  useAudioPlayerContext,
} from "@/context/audio-player-context";
import { formatTime } from "./ProgressBar";

interface MovieDetails {
  id: string;
  director: string;
  title: string;
  image: string;
  duration: string;
  rating: string;
  // releaseYear: string;
  // type: string;
  subscriptionRequired: boolean;
  // summary: string;
  // tags: string[];
  // movieDescription: string;
}

function MovieCard({
  id,
  image,
  title,
  director,
  duration,
  rating,
  subscriptionRequired,
}: MovieDetails) {
  const user = useSelector((state: RootState) => state.user);
  const { audioRef } = useAudioPlayerContext();
  const [movieDuration, setMovieDuration] = useState(0);

  const fetchDuration = async () => {
    try {
      const currentMovie = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies/${id}`);
      const audioLink = `https://advanced-internship-api-production.up.railway.app/${currentMovie.data.data.audioLink}`

      if (audioLink) {
        const audio = new Audio(audioLink);

        audio.addEventListener("loadedmetadata", () => {
          const seconds = audio.duration;

          if (seconds && !isNaN(seconds)) {
            setMovieDuration(seconds);
          } else {
            console.error("Failed to load metadata or invalid duration")
          }
        });

        audio.load()
      } else {
        console.log("Invalid or missing audio link")
      }

    } catch (error) {
      console.error("Error fetching movie or audio duration", error);
    }

  };
  

  const showPremiumTag = () => {
    if (!user.email && subscriptionRequired) {
      return true;
    } else if (user.email && subscriptionRequired && !user.subscription) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchDuration();
  }, []);

  return (
    <Link className="movie" href={`/movie/${id}`}>
      <figure className="movie__img__wrapper">
        {showPremiumTag() && <div className="movie__pill">Premium</div>}
        <Image
          className="movie__img"
          alt="Movie Card"
          src={`${image}`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </figure>

      <div className="movie__text">
        <span className="movie__title">{title}</span>
        <span className="movie__director">{director}</span>
        <span className="movie__details">
          <div className="movie__detail">
            <FaRegClock className="movie__detail__icon" />
            <span className="movie__detail__text">{formatTime(movieDuration)}</span>
          </div>
          <div className="movie__detail">
            <FaRegStar className="movie__detail__icon" />
            <span className="movie__detail__text">{rating}</span>
          </div>
        </span>
      </div>
    </Link>
  );
}

export default MovieCard;
