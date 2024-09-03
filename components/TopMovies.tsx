"use client"
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react';
import axios from 'axios';
import Skeleton from './ui/Skeleton';

const topMovies = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY281_CR3,0,190,281_.jpg",
      title: "Avatar",
      director: "James Cameron",
      duration: "10:00",
      rating: 7.9
    },
  ]

function TopMovies() {
    const [loading, setLoading] = useState(true);
    const [topMovies, setTopMovies] = useState<any[]>([]);
    const [emblaRef] = useEmblaCarousel({ loop: true });

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://advanced-internship-api-production.up.railway.app/topMovies`
        );
        setTopMovies(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchMovies();
    }, [])

    return (
        <div className="top">
            <div className="page-row top__row">
                <h2 className="top__title">Top Movies</h2>
                <span className="top__subtitle">
                    Enjoy our highest rated films.
                </span>
                <div className="top__list">
                    <div className="embla" ref={emblaRef}>
                      <div className="embla__container">
                        
                        {/* {topMovies.map((movie, index) => (
                          <div className="embla__slide" key={index}>
                              <MovieCard id={movie.id} image={movie.image} title={movie.title} director={movie.director} duration={movie.duration} rating={movie.rating} />
                          </div>
                        ))} */}

                        {loading ? new Array(10).fill(0).map((_, index) => (
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
                            <div className="movie__text" style={{gap: '4px'}}>
                              <Skeleton 
                                width="100%"
                                height="8px"
                                borderRadius="4px"
                              />
                              <Skeleton 
                                width="50%"
                                height="8px"
                                borderRadius="4px"
                              />
                              <Skeleton 
                                width="70%"
                                height="8px"
                                borderRadius="4px"
                              />
                            </div>
                          </div>
                        )) : topMovies.map((movie, index) => (
                          <div className="embla__slide" key={index}>
                            <MovieCard 
                              id={movie.id}
                              image={movie.imageLink}
                              title={movie.title}
                              director={movie.director}
                              duration={movie.duration}
                              rating={movie.rating}
                            />
                          </div>
                        ))}

                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
      )
}

export default TopMovies