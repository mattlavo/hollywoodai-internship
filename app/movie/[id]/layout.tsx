import DashboardNav from '@/components/DashboardNav'
import DashboardSidebar from '@/components/DashboardSidebar'
import ForgotPassword from '@/components/modals/ForgotPassword'
import LoginModal from '@/components/modals/LoginModal'
import SignUpModal from '@/components/modals/SignUpModal'
import React from 'react'

function MoviePageLayout({
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
        <SignUpModal />
        <LoginModal />
        <ForgotPassword />
    </>
        

  )
}

export default MoviePageLayout