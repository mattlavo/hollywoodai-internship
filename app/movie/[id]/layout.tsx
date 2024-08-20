import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

function MoviePageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <>
        <DashboardSidebar />
        <div className="page-content movieDetails__row">
            <DashboardNav />
            { children }
        </div>

    </>
  )
}

export default MoviePageLayout