import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

interface MovieDetails {
  id: number,
  image: string,
  title: string,
  director: string,
  duration: string,
  rating: number
}

function MovieCard({ id, image, title, director, duration, rating }: MovieDetails) {
  
  return (
    <Link className="movie" href={`/movie/${id}`}>
        <figure className="movie__img__wrapper">
            <Image className="movie__img" alt="Movie Card" src={`${image}`} width={0} height={0} sizes="100vw" />
          </figure>
        
          <div className="movie__text">
              <span className="movie__title">Avatar</span>
              <span className="movie__director">James Cameron</span>
              <span className="movie__details">
                <div className="movie__detail">
                  <FaRegClock className="movie__detail__icon" />
                  <span className="movie__detail__text">10:00</span>
                </div>
                <div className="movie__detail">
                  <FaRegStar className="movie__detail__icon" />
                  <span className="movie__detail__text">7.9</span>
                </div>
              </span>
          </div>
    </Link>
  )
}

export default MovieCard