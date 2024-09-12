"use client"
import Image from "next/image"
import Link from "next/link"
import { FaRegClock } from "react-icons/fa6"
import SearchBarResultMovie from "./SearchBarResultMovie"
import { useState } from "react"

interface SearchResultsInterface {
  isOpen: boolean
}

function SearchResults({ isOpen } : SearchResultsInterface) {

  const [movieResults, setMovieResults] = useState([]);


  return (
    <div className={`searchbar__movies ${isOpen && 'searchbar__movies--open'}`}>
        <div className="searchbar__movies__header">
            <h3 className="searchbar__movies__header__title">Search Results</h3>
        </div>
        <SearchBarResultMovie loading={false} />
        <SearchBarResultMovie loading={false} />
        <SearchBarResultMovie loading={false} />
        <SearchBarResultMovie loading={false} />
        <div className="searchbar__movies__noResults"></div>
    </div>
  )
}

export default SearchResults