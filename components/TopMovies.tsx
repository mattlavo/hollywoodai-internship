import React from 'react'
import MovieCard from './MovieCard'

function TopMovies() {
  return (
    <div className="selected">
        <div className="page-row selected__row">
            <h2 className="selected__title">Selected just for you</h2>
            <span className="selected__subtitle">
                We think you'll like these
            </span>
            <div className="selected__list">
                
            </div>
        </div>
    </div>
  )
}

export default TopMovies