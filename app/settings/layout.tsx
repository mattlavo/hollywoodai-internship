import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

function SettingsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <>
        <DashboardSidebar />
        <div className="page-content">
            <DashboardNav />
            { children }
        </div>
    </>
        

  )
}

export default SettingsPageLayout;