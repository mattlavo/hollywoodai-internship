"use client"
import DashboardHeader from '@/components/DashboardHeader'
import ForgotPassword from '@/components/modals/ForgotPassword'
import LoginModal from '@/components/modals/LoginModal'
import SignUpModal from '@/components/modals/SignUpModal'
import SelectedMovies from '@/components/SelectedMovies'
import TopMovies from '@/components/TopMovies'
import { AudioPlayerProvider } from '@/context/audio-player-context'
import React from 'react'



function Dashboard() {

  return (
    <AudioPlayerProvider>
      <DashboardHeader />
      <SelectedMovies />
      <TopMovies />
      <LoginModal />
      <SignUpModal /> 
      <ForgotPassword />
    </AudioPlayerProvider>
  )
}

export default Dashboard