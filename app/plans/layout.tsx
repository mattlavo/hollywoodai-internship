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
            <div className="header">
                <div className="page-row">
                    <div className="header__text">
                        <h1 className="header__text__title">Plans</h1>
                        <span className="header__text__subtitle">
                            Get unlimited access to our extensive library of movie summaries.
                        </span>
                    </div>
                </div>
            </div>
            <div className="plans">
                <div className="page-row plans__row">
                    
                    <h2 className="plans__title">Subscription Plans:</h2>
                    <div className="plans__list">
                        <Plan priceAmount={"19"} cycle={"Monthly"} plan="Premium" text="Access 100+ Summaries" />
                        <Plan priceAmount={"190"} cycle={"Yearly"} plan="VIP+" text="Access 100+ Summaries" />
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    </>
  )
}

export default SalesPageLayout