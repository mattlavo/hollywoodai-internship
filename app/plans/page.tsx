import FAQ from '@/components/FAQ'
import Plan from '@/components/Plan'
import { loadCheckout } from '@/stripe/stripePayment'
import React from 'react'

function PlansPage() {

  const premiumFeatures = [
    { text: "Premium Support" },
    { text: "Access 100+ Summaries" },
    { text: "Higher Quality Audio" },
    { text: "License for Commercial Use" },
    { text: "2 Supported Devices" }
  ]

  const vipPlusFeatures = [
    { text: "2 Months Free" },
    { text: "Access 100+ Summaries" },
    { text: "Highest Audio Quality" },
    { text: "License for Commercial Use" },
    { text: "3 Supported Devices" },

  ]

  return (
    <>
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
                        <Plan productId={"price_1PvnxaKN65bCtJOsoHzhvBFe"} priceAmount={"19"} cycle={"Monthly"} plan="Premium" features={premiumFeatures} />
                        <Plan productId={"price_1PvnxxKN65bCtJOsA7ozQqdz"} priceAmount={"190"} cycle={"Yearly"} plan="VIP+" features={vipPlusFeatures} />
                    </div>
                </div>
            </div>
            <FAQ />
    </>
  )
}

export default PlansPage