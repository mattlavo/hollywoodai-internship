import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";

const movieDetails = [
  {
    Icon: FaRegStar,
    text: "7.2 / 10",
  },
  {
    Icon: FaRegClock,
    text: "10:00",
  },
  {
    Icon: FaMicrophone,
    text: "Audio & text",
  },
  {
    Icon: FaRegCalendar,
    text: "2009",
  },
];

const movieGenres = [
  {
    text: "Action",
  },
  {
    text: "Adventure",
  },
  {
    text: "Fantasy",
  },
  {
    text: "Sci-Fi",
  },
];

function MoviePage() {
  return (
    <div className="movieDetails">
      <div className="page-row movieDetails__row">
        <div className="movieDetails__content">
          <h1 className="movieDetails__title">Avatar</h1>
          <span className="movieDetails__director">James Cameron</span>
          <span className="movieDetails__tagline"></span>
          <div className="movieDetails__details__wrapper">
            <div className="movieDetails__details">
              {movieDetails.map((movie, index) => (
                <div key={index} className="movieDetails__detail">
                  <movie.Icon className="movieDetails__detail__icon" />
                  <span className="movieDetails__detail__text">
                    {movie.text}
                  </span>
                </div>
              ))}
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
            {movieGenres.map((movie, index) => (
              <div className="movieDetails__genre" key={index}>
                {movie.text}
              </div>
            ))}
          </div>
          <p className="movieDetails__para">
            When his brother is killed in a robbery, paraplegic Marine Jake
            Sully decides to take his place in a mission on the distant world of
            Pandora. There he learns of greedy corporate figurehead Parker
            Selfridge's intentions of driving off the native humanoid "Na'vi" in
            order to mine for the precious material scattered throughout their
            rich woodland. In exchange for the spinal surgery that will fix his
            legs, Jake gathers knowledge, of the Indigenous Race and their
            Culture, for the cooperating military unit spearheaded by gung-ho
            Colonel Quaritch, while simultaneously attempting to infiltrate the
            Na'vi people with the use of an "avatar" identity. While Jake begins
            to bond with the native tribe and quickly falls in love with the
            beautiful alien Neytiri, the restless Colonel moves forward with his
            ruthless extermination tactics, forcing the soldier to take a stand
            - and fight back in an epic battle for the fate of Pandora. —The
            Massie Twins
          </p>
        </div>
        <div className="movieDetails__img__wrapper">
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src={
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX190_CR0,0,190,281_.jpg"
            }
            alt=""
            className="movieDetails__img"
          />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
