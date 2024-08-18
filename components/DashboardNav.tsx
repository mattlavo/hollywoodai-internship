import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import '../app/globals.css'

function DashboardNav() {
  return (
    <div className="searchbar">
        <div className="page-row searchbar__row">
            <div className="searchbar__field">
                <FaSearch className="searchbar__field__icon" />
                <input type="text" placeholder="Search for movies..."  className="searchbar__field__input" />
            </div>
            <RxHamburgerMenu className="searchbar__menu" />
        </div>
    </div>
  )
}

export default DashboardNav