"use client"
import React from 'react'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react';

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
    const [emblaRef] = useEmblaCarousel();

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
                        {topMovies.map((movie, index) => (
                          <div className="embla__slide" key={index}>
                              <MovieCard id={movie.id} image={movie.image} title={movie.title} director={movie.director} duration={movie.duration} rating={movie.rating} />
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