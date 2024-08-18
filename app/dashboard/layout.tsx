import DashboardHeader from '@/components/DashboardHeader'
import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import SelectedMovies from '@/components/SelectedMovies'
import React from 'react'

function layout() {
  return (
    <div className="">

      <DashboardSidebar />
      
      <div className="page-content">
        <DashboardNav />

        <DashboardHeader />
        <SelectedMovies />
      </div>
    </div>
    
  )
}

export default layout