import DashboardHeader from '@/components/DashboardHeader'
import ForgotPassword from '@/components/modals/ForgotPassword'
import LoginModal from '@/components/modals/LoginModal'
import SignUpModal from '@/components/modals/SignUpModal'
import SelectedMovies from '@/components/SelectedMovies'
import TopMovies from '@/components/TopMovies'
import React from 'react'



function Dashboard() {

  return (
    <>
      <DashboardHeader />
      <SelectedMovies />
      <TopMovies />
      <LoginModal />
      <SignUpModal /> 
      <ForgotPassword />
    </>
  )
}

export default Dashboard