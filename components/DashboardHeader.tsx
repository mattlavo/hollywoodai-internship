import React from 'react'

function DashboardHeader() {
  return (
    <div className="w-full py-3 px-0 border-b border-[#f1f3f4]">
        <div className="page-row">
            <div className="header__text">
                <h1 className="text-[33px] font-bold">AI Movie Summarizer</h1>
                <span className="text-[#404654] opacity-70">
                    Enjoy high-quality summaries of your favorite movies instantly without breaking a sweat.
                </span>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader