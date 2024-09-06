"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import useEmblaCarousel from "embla-carousel-react";
import axios from "axios";
import Link from "next/link";
import Skeleton from "./ui/Skeleton";

function SelectedMovies() {
  const [loading, setLoading] = useState(true);
  const [selectedMovies, setSelectedMovies] = useState<any[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://advanced-internship-api-production.up.railway.app/selectedMovies`
      );
      setSelectedMovies(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="selected">
      <div className="page-row selected__row">
        <h2 className="selected__title">Selected just for you</h2>
        <span className="selected__subtitle">We think you'll like these</span>
        <div className="selected__list">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {loading
                ? new Array(10).fill(0).map((_, index) => (
                    <div className="embla__slide" key={index}>
                      <div className="movie">
                        <figure className="movie__img__wrapper">
                          <Skeleton
                            width="100%"
                            height="100%"
                            borderRadius="12px"
                          />
                        </figure>
                      </div>
                      <div className="movie__text" style={{ gap: "4px" }}>
                        <Skeleton
                          width="100%"
                          height="8px"
                          borderRadius="4px"
                        />
                        <Skeleton width="50%" height="8px" borderRadius="4px" />
                        <Skeleton width="70%" height="8px" borderRadius="4px" />
                      </div>
                    </div>
                  ))
                : selectedMovies.map((movie, index) => (
                    <div className="embla__slide" key={index}>
                      <MovieCard
                        id={movie.id}
                        image={movie.imageLink}
                        title={movie.title}
                        director={movie.director}
                        duration={movie.duration}
                        rating={movie.rating}
                        subscriptionRequired={movie.subscriptionRequired}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovies;