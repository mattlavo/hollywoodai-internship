"use client"
import React from 'react'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react'



const selectedMovies = [
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

function SelectedMovies() {
  const [emblaRef] = useEmblaCarousel();


  return (
    <div className="selected">
        <div className="page-row selected__row">
            <h2 className="selected__title">Selected just for you</h2>
            <span className="selected__subtitle">
                We think you'll like these
            </span>
            <div className="selected__list">
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    {selectedMovies.map((movie, index) => (
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

export default SelectedMovies