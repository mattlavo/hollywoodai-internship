import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import '../app/globals.css'

function DashboardNav() {
  return (
    <div>
        <div className="page-row gap-5 relative">
            <div className="bg-[#f1f1f3] flex items-center h-11 rounded-full max-w-[435px] relative w-full">
                <FaSearch className="opacity-75 transform -translate-y-1/2 w-5 absolute top-1/2 text-gray-600 left-3" />
                <input type="text" placeholder="Search for movies..."  className="py-2 pr-4 pl-10 w-full h-full rounded-full bg-transparent outline-none border-none text-[13px] font-medium" />
            </div>
            <RxHamburgerMenu className="w-8 h-8 min-w-8 min-h-8 cursor-pointer flex md:hidden" />
        </div>
    </div>
  )
}

export default DashboardNav