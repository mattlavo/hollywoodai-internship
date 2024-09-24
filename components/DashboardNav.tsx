"use client"
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchResults from "@/components/SearchResults"
import axios from 'axios';
import { useDebounce } from '@/hooks/useDebounce';

interface DashboardNavProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DashboardNav({ sidebarOpen, setSidebarOpen}: DashboardNavProps) {

  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [movieResults, setMovieResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const debouncedSearch = useDebounce(searchQuery);

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value

    if (searchValue) {
      setOpen(true);
      setSearchQuery(searchValue)
      setMovieResults([])
      setLoading(true);
    } else {
      setOpen(false)
      setMovieResults([])
      setLoading(false);
    }
  }

  const fetchMovies = async () => {
    try {
      const searchMovieQuery = `https://advanced-internship-api-production.up.railway.app/movies?search=${debouncedSearch}`
      const response = await axios.get(searchMovieQuery);
      setMovieResults(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (debouncedSearch) {
      fetchMovies();
    }
  }, [debouncedSearch])



  return (
    <div className="searchbar">
        <div className="page-row searchbar__row">
            <div className="searchbar__field">
                <FaSearch className="searchbar__field__icon" />
                <input type="text" placeholder="Search for movies..."  className="searchbar__field__input" onChange={(event) => {
                  search(event)
                }} />
            </div>
            <RxHamburgerMenu className="searchbar__menu" onClick={() => setSidebarOpen((prev) => !prev)} />
            <SearchResults movieResults={movieResults} isOpen={open} searchQuery={searchQuery} loading={loading} />
        </div>
    </div>
  )
}

export default DashboardNav