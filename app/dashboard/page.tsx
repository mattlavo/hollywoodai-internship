import DashboardHeader from '@/components/DashboardHeader'
import SelectedMovies from '@/components/SelectedMovies'
import TopMovies from '@/components/TopMovies'
import React from 'react'

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <SelectedMovies />
      <TopMovies />
    </>
  )
}

export default Dashboard