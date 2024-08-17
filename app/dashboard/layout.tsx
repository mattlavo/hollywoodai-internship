import DashboardHeader from '@/components/DashboardHeader'
import DashboardNav from '@/components/DashboardNav'
import SelectedMovies from '@/components/SelectedMovies'
import React from 'react'

function layout() {
  return (
    <div>

      <DashboardNav />
      <DashboardHeader />
      <SelectedMovies />
    </div>
  )
}

export default layout