import React from 'react'
import MovieCard from './MovieCard'

function SelectedMovies() {
  return (
    <div className="pt-10">
        <div className="page-row flex-col items-start">
            <h2 className="text-[22px] font-bold">Selected just for you</h2>
            <span className="text-[#404654] opacity-70 text-sm mt-1 mb-4">
                We think you'll like these
            </span>
            <div className="selected__list">
                <MovieCard />
            </div>
        </div>
    </div>
  )
}

export default SelectedMovies