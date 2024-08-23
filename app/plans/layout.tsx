import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import FAQ from '@/components/FAQ'
import Plan from '@/components/Plan'
import React from 'react'

function SalesPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <>
        <DashboardSidebar />
        <div className="page-content">
            <DashboardNav />
            {children}
        </div>
    </>
  )
}

export default SalesPageLayout