import DashboardHeader from '@/components/DashboardHeader'
import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import SelectedMovies from '@/components/SelectedMovies'
import TopMovies from '@/components/TopMovies'
import React from 'react'

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <DashboardSidebar />
      <div className="page-content">
        <DashboardNav />
        {children}
      </div>
    </div>
    
  )
}

export default DashboardLayout