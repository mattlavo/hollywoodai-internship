"use client"
import React from 'react'
import PlanFeature from './PlanFeature';
import { loadCheckout } from "@/stripe/stripePayment";

interface PlanProps {
    priceAmount: string;
    productId: string;
    features: { text: string }[];
    plan: string;
    cycle: string;
}


 function Plan({priceAmount, productId, features, plan, cycle}: PlanProps) {
  
  return (
    <div className="plan">
        <div className="plan__price">
            <span className="plan__price__dollar">$</span>
            <h3 className="plan__price__amount">{priceAmount}</h3>
            <span className="plan__price__frequency">{cycle}</span>
       </div>
       <div className="plan__name">{plan}</div>
       <div className="plan__features">
            {features.map((feature, index) => (
                <PlanFeature text={feature.text} key={index} />
            ))}
       </div>
       <button className="plan__button" onClick={() => {
        loadCheckout(productId)
      }}>Choose Plan</button>
    </div>
  )
}

export default Plan