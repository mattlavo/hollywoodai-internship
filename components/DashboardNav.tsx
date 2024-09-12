"use client"
import { RootState } from '@/redux/store';
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from "@/components/SearchResults"

function DashboardNav() {

  const [open, setOpen] = useState(false);

  return (
    <div className="searchbar">
        <div className="page-row searchbar__row">
            <div className="searchbar__field">
                <FaSearch className="searchbar__field__icon" />
                <input type="text" placeholder="Search for movies..."  className="searchbar__field__input" />
            </div>
            <RxHamburgerMenu className="searchbar__menu" />
            <SearchResults isOpen={true} />
        </div>
    </div>
  )
}

export default DashboardNav