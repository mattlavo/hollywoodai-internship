import DashboardHeader from '@/components/DashboardHeader'
import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import SelectedMovies from '@/components/SelectedMovies'
import TopMovies from '@/components/TopMovies'
import React from 'react'

function layout() {
  return (
    <div className="">

      <DashboardSidebar />
      
      <div className="page-content">
        <DashboardNav />

        <DashboardHeader />
        <SelectedMovies />
        <TopMovies />
      </div>
    </div>
    
  )
}

export default layout