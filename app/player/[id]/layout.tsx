import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

function PlayerPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <>
        <DashboardSidebar />
        <div className="page-content player-content">
            <DashboardNav />
            {children}
        </div>
    </>
  )
}

export default PlayerPageLayout