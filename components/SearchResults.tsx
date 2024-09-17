"use client"
import Image from "next/image"
import Link from "next/link"
import { FaRegClock } from "react-icons/fa6"
import SearchBarResultMovie from "./SearchBarResultMovie"
import { useEffect, useState } from "react"
import axios from "axios"

interface SearchResultsInterface {
  isOpen: boolean
  searchQuery: string
  movieResults: any[];
  loading: boolean;
}

function SearchResults({ isOpen, searchQuery, movieResults, loading } : SearchResultsInterface) {


  return (
    <div className={`searchbar__movies ${isOpen && 'searchbar__movies--open'}`}>
        <div className="searchbar__movies__header">
            <h3 className="searchbar__movies__header__title">Search Results</h3>
        </div>
        {loading && searchQuery && (
          <> 
            {console.log("Loading...")}
            <SearchBarResultMovie loading={true} />
            <SearchBarResultMovie loading={true} />
            <SearchBarResultMovie loading={true} />
            <SearchBarResultMovie loading={true} />
          </>
        )}

        {!loading && movieResults.length > 0 && (
          <>
            {console.log("Displaying movie results", movieResults)}
            {movieResults.map((movie, index) => (
              <SearchBarResultMovie key={index} movie={movie} loading={false} />
            ))}
          </>
        )}

        {!loading && searchQuery && movieResults.length === 0 && (
          <>
            {console.log("No results found")}
            <div className="searchbar__movies__noResults">No results found</div>
          </>
        )}
    </div>
  )
}

export default SearchResults